using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class TableHeaderData : BootWidget
	{
		public TableHeaderData(params Union<string, Control, HTMLElement>[] typos) : base(new HTMLTableHeaderCellElement(), typos)
		{

		}

		public TableHeaderData(BootstrapRowCellTheme theme, params Union<string, Control, HTMLElement>[] typos) : base(new HTMLTableHeaderCellElement() { ClassName = theme.ToString("G") }, typos)
		{

		}

		public static void AppendHeaderDataRow(Control control, params Union<string, Control, HTMLElement>[] typos)
		{
			if(typos == null || typos.Length == 0)
				return;

			var length = typos.Length;
			var list = new Union<string, Control, HTMLElement>[length];

			for(int i = 0; i < length; i++)
			{
				if(typos[i] == null)
				{
					list[i] = new TableHeaderData();
					continue;
				}

				if(typos[i].Is<TableHeaderData>())
				{
					list[i] = typos[i];
				}
				else
				{
					list[i] = new TableHeaderData(typos[i]);
				}

			}
			BootWidget.AppendTypos(control, list);
		}
	}
}
