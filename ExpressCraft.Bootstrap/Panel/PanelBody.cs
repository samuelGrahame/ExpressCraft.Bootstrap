using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;
using ExpressCraft;

using ExpressCraft.Bootstrap;

namespace ExpressCraft.Bootstrap
{
	public class PanelBody : BootStyleWidget
	{
		public PanelBody(params Union<string, Control, HTMLElement>[] typos) : base("panel-body", typos)
		{
			
		}
	}
}
