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
	public class Blockquote : BootstrapDiv
	{
		public Blockquote(params Union<string, Control, HTMLElement>[] typos) : base(Document.CreateElement("blockquote"), typos)
		{
			
		}

		public Blockquote(Paragraph para, params Union<string, Control, HTMLElement>[] typos) : base(Document.CreateElement("blockquote"))
		{
			var x = new List<Union<string, Control, HTMLElement>>();
			
			x.Add(para);
			x.AddRange(typos);

			AppendTypos(this, x.ToArray());
		}

		public Blockquote(Paragraph para, Footer footer, params Union<string, Control, HTMLElement>[] typos) : base(Document.CreateElement("blockquote"))
		{
			var x = new List<Union<string, Control, HTMLElement>>();

			x.Add(para);
			x.Add(footer);
			x.AddRange(typos);

			AppendTypos(this, x.ToArray());
		}

		public Blockquote(Paragraph para, Footer footer, Cite source, params Union<string, Control, HTMLElement>[] typos) : base(Document.CreateElement("blockquote"))
		{
			var x = new List<Union<string, Control, HTMLElement>>();

			x.Add(para);
			x.Add(footer.AppendChild(source));
			x.AddRange(typos);

			AppendTypos(this, x.ToArray());
		}

		public bool Reverse
		{
			get { return GetClassTrue("blockquote-reverse"); }
			set {
				SetClassTrue("blockquote-reverse", value);				
			}
		}
	}
}
