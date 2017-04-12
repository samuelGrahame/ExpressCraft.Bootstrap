using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class TableData : BootstrapDiv
	{
		public TableData(params Union<string, Control, HTMLElement>[] typos) : base(new HTMLTableDataCellElement(), typos)
		{

		}

		public TableData(BootstrapRowCellTheme theme, params Union<string, Control, HTMLElement>[] typos) : base(new HTMLTableDataCellElement() { ClassName = theme.ToString("G") }, typos)
		{

		}
	}
}
