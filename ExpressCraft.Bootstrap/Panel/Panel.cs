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
	public class Panel : BootstrapStyleDiv
	{		
		public Panel(BootstrapTheme type = BootstrapTheme.Default, params Union<string, Control, HTMLElement>[] typos) : base("panel" + Extension.GetClassTheme(" panel-", type), typos)
		{			
								
		}
	}
}
