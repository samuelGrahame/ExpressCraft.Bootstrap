using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class BootstrapDiv : Control
	{		
		public BootstrapDiv(params Union<string, Control, HTMLElement>[] typos) : this(new HTMLDivElement(), typos)
		{
			
		}
		
		public BootstrapDiv(HTMLElement element, params Union<string, Control, HTMLElement>[] typos) : base(element)
		{
			AppendTypos(this, typos);			
		}

		public static void AppendTypos(Control control, params Union<string, Control, HTMLElement>[] typos)
		{
			AppendTypos(control.Content, typos);
		}

		public static void AppendTypos(HTMLElement control, params Union<string, Control, HTMLElement>[] typos)
		{
			if(typos != null)
			{
				int length = typos.Length;
				for(int i = 0; i < length; i++)
				{
					if(typos[i].Is<string>())
						control.AppendChild(Document.CreateTextNode((string)typos[i]));
					else if(typos[i].Is<Control>())
						control.AppendChild((Control)typos[i]);
					else if(typos[i].Is<HTMLElement>())
						control.AppendChild((HTMLElement)typos[i]);
				}
			}
		}

		public string ContextualText
		{
			get {
				return GetContextual("text-");				
			}
			set {
				SetContextual("text-", value);
			}
		}

		public string ContextualBackground
		{
			get
			{
				return GetContextual("bg-");
			}
			set
			{				
				SetContextual("bg-", value);
			}
		}

		public static bool GetInline(Control control, string type)
		{
			return control.ClassList.Contains(type + "-inline");
		}
		public static void SetInline(Control control, string type, bool value)
		{
			if(GetInline(control, type) != value)
			{
				if(value)
					control.ExchangeClass(type, type + "-inline");
				else
					control.ExchangeClass(type + "-inline", type);
			}			
		}
		
		internal string GetContextual(string type)
		{
			int length = ClassList.Length;
			for(int i = 0; i < length; i++)
			{
				if(ClassList[i].StartsWith(type))
					return ClassList[i];
			}
			return string.Empty;
		}

		internal void SetContextual(string type, string value)
		{
			int length = ClassList.Length;
			for(int i = 0; i < length; i++)
			{
				if(ClassList[i].StartsWith(type))
				{
					ClassList.Remove(ClassList[i]);
					break;
				}
			}
			if(!string.IsNullOrWhiteSpace(value) && value.StartsWith(type))
			{
				ClassList.Add(value);
			}
		}

	}

	public static class Contextual
	{
		public static class Text
		{
			public const string Muted = "text-muted";
			public const string Primary = "text-primary";
			public const string Success = "text-success";
			public const string Info = "text-info";
			public const string Warning = "text-warning";
			public const string Danger = "text-danger";
		}

		public static class Background
		{			
			public const string Primary = "bg-primary";
			public const string Success = "bg-success";
			public const string Info = "bg-info";
			public const string Warning = "bg-warning";
			public const string Danger = "bg-danger";
		}
	}
}
