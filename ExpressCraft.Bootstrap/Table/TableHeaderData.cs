using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class TableHeaderData : BootstrapDiv
	{
		public TableHeaderData(params Union<string, Control, HTMLElement>[] typos) : base(new HTMLTableHeaderCellElement(), typos)
		{

		}

		public TableHeaderData(BootstrapRowCellTheme theme, params Union<string, Control, HTMLElement>[] typos) : base(new HTMLTableHeaderCellElement() { ClassName = theme.ToString("G") }, typos)
		{

		}
	}
}
