using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{	
	public class TableHeaderRow : BootWidget
	{
		public TableHeaderRow(params Union<string, Control, HTMLElement>[] typos) : base(new HTMLTableRowElement())
		{
			TableHeaderCell.AppendHeaderDataRow(this, typos);
		}

		public TableHeaderRow(BootstrapRowCellTheme theme, params Union<string, Control, HTMLElement>[] typos) : base(new HTMLTableRowElement() { ClassName = theme.ToString("G") })
		{
			TableHeaderCell.AppendHeaderDataRow(this, typos);
		}

		public TableHeaderCell HeaderCell(int index)
		{
			return CastElement<TableHeaderCell>(Content.Children[index]);
		}

		public IEnumerable<TableHeaderCell> HeaderCells
		{
			get
			{
				int length = Content.ChildElementCount;
				for(int i = 0; i < length; i++)
				{
					yield return HeaderCell(i);
				}
			}
		}
	}
}
