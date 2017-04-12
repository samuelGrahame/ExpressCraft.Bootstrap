using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;
using ExpressCraft.Bootstrap;

namespace ExpressCraft.Bootstrap
{
	public class BootStyleWidget : BootWidget
	{
		public BootStyleWidget(string className, params Union<string, Control, HTMLElement>[] typos) : base(new HTMLDivElement() { ClassName = className }, typos)
		{
			
		}
	}
}
