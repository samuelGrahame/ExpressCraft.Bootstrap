using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class TableRow : BootWidget
	{
		public TableRow(params Union<string, Control, HTMLElement>[] typos) : base(new HTMLTableRowElement())
		{
			TableCell.AppendDataRow(this, typos);
		}

		public TableRow(BootRowCellTheme theme, params Union<string, Control, HTMLElement>[] typos) : base(new HTMLTableRowElement() { ClassName = theme.ToString("G") })
		{
			TableCell.AppendDataRow(this, typos);
		}

		public TableCell Cell(int index)
		{
			return CastElement<TableCell>(Content.Children[index]);
		}

		public IEnumerable<TableCell> Cells
		{
			get
			{
				int length = Content.ChildElementCount;
				for(int i = 0; i < length; i++)
				{
					yield return Cell(i);
				}
			}
		}

		public void ClearTheme()
		{
			ClearEnumClassValue(typeof(BootRowCellTheme));
		}

		public BootRowCellTheme Theme
		{
			get
			{
				return GetEnumClassValue(typeof(BootRowCellTheme)).As<BootRowCellTheme>();
			}
			set { SetEnumClassValue(typeof(BootRowCellTheme), value.ToString("G").ToLower()); }
		}

	}
}
