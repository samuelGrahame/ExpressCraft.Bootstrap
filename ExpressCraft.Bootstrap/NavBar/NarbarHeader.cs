using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpressCraft.Bootstrap
{
	public class NarbarHeader : BootStyleWidget
	{
		public NarbarHeader(Union<string, Control, Bridge.Html5.HTMLElement>[] typos) : base("navbar-header", typos)
		{

		}
	}
}
