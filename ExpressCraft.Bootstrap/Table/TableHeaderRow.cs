using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{	
	public class TableHeaderRow : TableRow
	{
		public TableHeaderRow(params Union<string, Control, HTMLElement>[] typos)
		{
			TableHeaderData.AppendHeaderDataRow(this, typos);
		}

		public TableHeaderRow(BootstrapRowCellTheme theme, params Union<string, Control, HTMLElement>[] typos) : base(theme)
		{
			TableHeaderData.AppendHeaderDataRow(this, typos);
		}

	}
}
