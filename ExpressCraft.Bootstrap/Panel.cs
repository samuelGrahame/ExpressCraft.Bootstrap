using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;
using ExpressCraft;

namespace ExpressCraft.Bootstrap
{
	public class Panel : Control
	{		
		public Panel(BootstrapTheme type = BootstrapTheme.Default) : base("panel" + Extension.GetClassTheme(" panel-", type), false)
		{			
			Style.Position = Position.Relative;						
		}
	}
}
