using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;
using ExpressCraft;

namespace ExpressCraft.Bootstrap
{
	public class PanelHeading : BootstrapDiv
	{
		public PanelHeading(string heading = "") : base("panel-heading")
		{
			InnerHTML = heading;
		}
	}
}
