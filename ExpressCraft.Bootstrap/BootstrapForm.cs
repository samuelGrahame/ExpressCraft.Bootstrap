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
	public class BootstrapForm : Form
	{
		public BootstrapForm(params Union<string, Control, HTMLElement>[] typos) : base("")
		{		
			var x = (HTMLDivElement)(new BootstrapStyleDiv("container")).Content;

			this.BackColor = Color.White;
			this.Body.AppendChild(x);

			this.Body = x;
			this.BodyStyle.Padding = "0";

			//this.Body.ClassName = "container " + this.Body.ClassName;			
			//this.Body.SetBounds(1, 29, "calc(100% - 2px)", "calc(100% - 30px)");			
			BootstrapDiv.AppendTypos(this.Body, typos);
			this.BodyStyle.OverflowY = Overflow.Auto;
		}
	}
}
