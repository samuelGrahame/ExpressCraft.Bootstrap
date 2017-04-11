using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;
using ExpressCraft.Bootstrap.Typography;

namespace ExpressCraft.Bootstrap.Typography
{
	public class Abbr : BootstrapDiv
	{
		public Abbr(params Union<string, Control, HTMLElement>[] typos) : base(Document.CreateElement("abbr"), typos)
		{
			
		}
	}
}
