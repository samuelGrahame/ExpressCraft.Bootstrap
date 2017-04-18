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
	public class ListItem : BootWidget
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
			BootWidget.AppendTypos(control, list);
		}		

		public bool Dropdown
		{
			get { return GetClassTrue("dropdown"); }
			set
			{
				SetClassTrue("dropdown", value);
			}
		}

		public bool Divider
		{
			get { return GetClassTrue("divider"); }
			set
			{
				if(value)
				{
					SetAttribute("role", "separator");
				}else
				{
					var x = GetAttribute("role");
					if(x == "separator")
					{
						SetAttribute("role", null);
					}
				}
				SetClassTrue("divider", value);
			}
		}
	}
}
