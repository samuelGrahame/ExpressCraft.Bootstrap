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
	public class BootstrapForm : Form
	{
		public BootstrapForm(params Union<string, Control, HTMLElement>[] typos) : base("")
		{
			this.Body.ClassName = "container " + this.Body.ClassName;			
			this.Body.SetBounds(0, 29, "100%", "calc(100% - 29px)");

			BootstrapDiv.AppendTypos(this.Body, typos);
		}
	}
}
