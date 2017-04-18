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
	public class Anchor : BootWidgetClickBase
	{
		public Anchor(string href = string.Empty, params Union<string, Control, HTMLElement>[] typos) : base(new HTMLAnchorElement(), typos)
		{
			if(!string.IsNullOrWhiteSpace(href))
				this.Content.As<HTMLAnchorElement>().Href = href;
		}

		public bool NavbarLink
		{
			get { return GetClassTrue("navbar-link"); }
			set
			{
				SetClassTrue("navbar-link", value);
			}
		}

	}
}
