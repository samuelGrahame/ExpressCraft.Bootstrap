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
	public class ParagraphList : BootstrapDiv
	{
		public ParagraphList(params Union<string, Control, HTMLElement>[] typos) : base(new HTMLDivElement())
		{
			if(typos == null || typos.Length == 0)
				return;

			var length = typos.Length;
			var list = new Union<string, Control, HTMLElement>[length];

			for(int i = 0; i < length; i++)
			{
				if(typos[i] == null)
				{
					list[i] = new Paragraph();
					continue;
				}
					
				if(typos[i].Is<Paragraph>())
				{
					list[i] = typos[i];
				}
				else
				{
					list[i] = new Paragraph(typos[i]);
				}
				
			}
			BootstrapDiv.AppendTypos(this, list);
		}
	}
}
