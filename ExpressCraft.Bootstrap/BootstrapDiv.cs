using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;
using ExpressCraft;

namespace ExpressCraft.Bootstrap
{
	public class BootstrapDiv : Control
	{
		public BootstrapDiv(string className) : base(className, false)
		{
			Style.Position = Position.Relative;
		}
		
		public string InnerHTML
		{
			get { return Content.InnerHTML; }
			set { Content.InnerHTML = value; }
		}

	}
}
