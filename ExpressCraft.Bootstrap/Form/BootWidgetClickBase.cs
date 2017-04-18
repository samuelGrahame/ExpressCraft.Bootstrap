using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class BootWidgetClickBase : BootWidget
	{
		public Action<MouseEvent> OnClick { get { return this.Content.OnClick; } set { this.Content.OnClick = value; } }
		public BootWidgetClickBase(HTMLElement element) : base(element)
		{

		}

		public BootWidgetClickBase(HTMLElement element, params Union<string, Control, HTMLElement>[] typos) : base(element, typos)
		{

		}


		public bool Dropdown
		{
			get { return GetClassTrue("dropdown-toggle"); }
			set
			{
				if(value)
				{
					SetAttribute("data-toggle", "dropdown");
					SetAttribute("aria-haspopup", "true");
					SetAttribute("aria-expanded", "false");
				}
				else
				{
					SetAttribute("data-toggle", null);
					SetAttribute("aria-haspopup", null);
					SetAttribute("aria-expanded", null);
				}
				SetClassTrue("dropdown-toggle", value);
			}
		}
	}
}
