using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;
using ExpressCraft;

namespace ExpressCraft.Bootstrap
{
	public class PanelFooter : BootstrapDiv
	{
		public PanelFooter(string footer = "") : base("panel-footer")
		{
			InnerHTML = footer;
		}
	}
}
