using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;
using ExpressCraft;

namespace ExpressCraft.Bootstrap
{
	public class PanelFooter : BootstrapStyleDiv
	{
		public PanelFooter(params Union<string, Control, HTMLElement>[] typos) : base("panel-footer", typos)
		{
			
		}
	}
}
