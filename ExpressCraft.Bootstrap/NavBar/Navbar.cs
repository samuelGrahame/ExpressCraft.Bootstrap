using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;
using Bridge.jQuery2;

namespace ExpressCraft.Bootstrap
{
	public class Navbar : BootWidget
	{
		public Navbar(params Union<string, Control, HTMLElement>[] typos) : base(Document.CreateElement("nav"))
		{
			Content.ClassName = "navbar navbar-default";

			var container = (new BootStyleWidget("container-fluid"));
			
			AppendTypos(container, typos);

			Content.AppendChild(container);

			this.Content.AddEventListener(EventType.MouseDown, (ev) => {
				 ev.StopPropagation();

				var x = BootWindowHandle;
				var y = Form.GetActiveFormCollection();

				for(int i = 0; i < y.VisibleForms.Count; i++)
				{
					if(Global.ParseInt(y.VisibleForms[i].Body.GetAttribute("bsh")) == x)
					{
						Form.ActiveForm = y.VisibleForms[i];
						return;
					}
				}
				if(Global.ParseInt(y.FormOwner.Body.GetAttribute("bsh")) == x)
				{
					Form.ActiveForm = y.FormOwner;
				}				
			});
			this.Content.AddEventListener(EventType.MouseMove, (ev) => { ev.StopPropagation(); });
			this.Content.AddEventListener(EventType.MouseUp, (ev) => { ev.StopPropagation(); });
		}

		public NavBarTheme Theme
		{
			get
			{
				return GetEnumClassValue(typeof(NavBarTheme)).As<NavBarTheme>();
			}
			set { SetEnumClassValue(typeof(NavBarTheme), value.ToString("G").ToLower().Replace("_", "-")); }
		}

		public NavBarLocation NavbarLocation
		{
			get
			{
				var x = GetEnumClassValue("navbar-", typeof(NavBarLocation)).As<Enum>();
				if(x == null)
					return NavBarLocation.None;
				else
					return x.As<NavBarLocation>();
			}
			set
			{
				if(value == NavBarLocation.None)
				{
					ClearEnumClassValue("navbar-", typeof(NavBarLocation));
				}
				else
				{
					SetEnumClassValue("navbar-", typeof(NavBarLocation), value.ToString("G").ToLower().Replace("_", "-"));
				}
			}
		}
	}
}
