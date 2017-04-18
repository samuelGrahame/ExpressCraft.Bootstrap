using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

using ExpressCraft.Bootstrap;

namespace ExpressCraft.Bootstrap
{
	public class Paragraph : BootWidget
	{
		public Paragraph(params Union<string, Control, HTMLElement>[] typos) : base(new HTMLParagraphElement(), typos)
		{
			
		}
		public Paragraph(BootParagraphAlignment alignment, params Union<string, Control, HTMLElement>[] typos) : base(new HTMLParagraphElement() { ClassName = "text-" + alignment.ToString("G").ToLower() }, typos)
		{

		}
		public Paragraph(BootParagraphAlignment alignment, BootParagraphTransformation transform, params Union<string, Control, HTMLElement>[] typos) : base(new HTMLParagraphElement() { ClassName = "text-" + transform.ToString("G").ToLower() + " " + "text-" + alignment.ToString("G").ToLower() }, typos)
		{

		}
		public Paragraph(BootParagraphTransformation transform, params Union<string, Control, HTMLElement>[] typos) : base(new HTMLParagraphElement() { ClassName = "text-" + transform.ToString("G").ToLower() }, typos)
		{

		}
		
		public bool Initialism
		{
			get { return GetClassTrue("initialism"); }
			set
			{
				SetClassTrue("initialism", value);
			}
		}

		public bool NavbarText
		{
			get { return GetClassTrue("navbar-text"); }
			set
			{
				SetClassTrue("navbar-text", value);
			}
		}
		
		public bool Lead
		{
			get { return GetClassTrue("lead"); }
			set
			{
				SetClassTrue("lead", value);
			}
		}

		public bool Help
		{
			get { return GetClassTrue("help-block"); }
			set
			{
				SetClassTrue("help-block", value);
			}
		}
	}
}
