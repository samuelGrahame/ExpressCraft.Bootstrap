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
	public class Mark : BootstrapDiv
	{
		public Mark(params Union<string, Control, HTMLElement>[] typos) : base(Document.CreateElement("mark"), typos)
		{

		}
	}
}
