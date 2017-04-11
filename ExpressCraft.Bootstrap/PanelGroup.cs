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
	public class PanelGroup : BootstrapStyleDiv
	{
		public PanelGroup(params Union<string, Control, HTMLElement>[] typos) : base("panel-group", typos)
		{
			
		}
	}
}
