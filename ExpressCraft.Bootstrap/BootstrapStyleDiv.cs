using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class BootstrapStyleDiv : BootstrapDiv
	{
		public BootstrapStyleDiv(string className, params Union<string, Control, HTMLElement>[] typos) : base(new HTMLDivElement(), typos)
		{
			this.ClassList.Add(className);
		}
	}
}
