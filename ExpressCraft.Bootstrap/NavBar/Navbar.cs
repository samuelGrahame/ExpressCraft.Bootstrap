using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class Navbar : BootStyleWidget
	{
		public Navbar(params Union<string, Control, HTMLElement>[] typos) : base("navbar navbar-default")
		{
			var container = (new BootStyleWidget("container-fluid"));
			
			AppendTypos(container, typos);

			Content.AppendChild(container);
		}

		public NavBarTheme Theme
		{
			get
			{
				return GetEnumClassValue(typeof(NavBarTheme)).As<NavBarTheme>();
			}
			set { SetEnumClassValue(typeof(NavBarTheme), value.GetEnumToClass()); }
		}
	}
}
