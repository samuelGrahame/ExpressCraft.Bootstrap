using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class Table : BootstrapDiv
	{
		public Table(params Union<string, Control, HTMLElement>[] typos) : base(new HTMLTableElement() { ClassName = "table" }, typos)
		{

		}

		public bool Striped
		{
			get { return GetClassTrue("table-striped"); }
			set
			{
				SetClassTrue("table-striped", value);
			}
		}

		public bool Bordered
		{
			get { return GetClassTrue("table-bordered"); }
			set
			{
				SetClassTrue("table-bordered", value);
			}
		}

		public bool Hover
		{
			get { return GetClassTrue("table-hover"); }
			set
			{
				SetClassTrue("table-hover", value);
			}
		}

		public bool Condensed
		{
			get { return GetClassTrue("table-condensed"); }
			set
			{
				SetClassTrue("table-condensed", value);
			}
		}
	}
}
