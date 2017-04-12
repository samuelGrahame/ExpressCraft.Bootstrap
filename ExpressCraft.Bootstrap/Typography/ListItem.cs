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
	public class ListItem : BootstrapDiv
	{
		public ListItem(params Union<string, Control, HTMLElement>[] typos) : base(Document.CreateElement("li"), typos)
		{

		}

		public static void AppendItemList(Control control, params Union<string, Control, HTMLElement>[] typos)
		{
			if(typos == null || typos.Length == 0)
				return;

			var length = typos.Length;
			var list = new Union<string, Control, HTMLElement>[length];

			for(int i = 0; i < length; i++)
			{
				if(typos[i] == null)
				{
					list[i] = new ListItem();
					continue;
				}

				if(typos[i].Is<ListItem>())
				{
					list[i] = typos[i];
				}
				else
				{
					list[i] = new ListItem(typos[i]);
				}

			}
			BootstrapDiv.AppendTypos(control, list);
		}
	}
}
