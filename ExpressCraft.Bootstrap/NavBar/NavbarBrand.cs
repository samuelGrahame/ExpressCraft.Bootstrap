using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class NavbarBrand : BootWidget
	{
		public NavbarBrand(params Union<string, Control, HTMLElement>[] typos) : base(new HTMLAnchorElement() { ClassName = "navbar-brand" }, typos)
		{

		}
	}
}
