using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;
using ExpressCraft.Bootstrap.Typography;

namespace ExpressCraft.Bootstrap.Typography
{
	public class Blockquote : BootstrapDiv
	{
		public Blockquote(string paragraph, string footer, params Union<string, Control, HTMLElement>[] typos) : base(Document.CreateElement("blockquote"), CreateBlock(paragraph, footer, typos))
		{
			
		}
				
		public bool BlockquoteReverse
		{
			get { return ClassList.Contains("blockquote-reverse"); }
			set {
				if(value == BlockquoteReverse)
				{
					return;
				}
				if(value)
					ClassList.Add("blockquote-reverse");
				else
					ClassList.Remove("blockquote-reverse");				
			}
		}
		
		internal static Union<string, Control, HTMLElement>[] CreateBlock(string paragraph, string footer, params Union<string, Control, HTMLElement>[] typos)
		{
			var a = new List<Union<string, Control, HTMLElement>>();

			a.Add(new Paragraph(paragraph));
			a.Add(new Footer(footer));
			a.AddRange(typos);

			return a.ToArray();
		}
	}
}
