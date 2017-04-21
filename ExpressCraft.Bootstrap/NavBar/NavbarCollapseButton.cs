using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class NavbarCollapseButton : BootWidgetClickBase
	{
		public NavbarCollapseButton(string _id) : base(new HTMLButtonElement() { Type = ButtonType.Button, ClassName = "navbar-toggle collapsed" })
		{
			if(!string.IsNullOrWhiteSpace(_id) && !_id.StartsWith("#"))
			{
				_id = "#" + _id;
			}
			AppendTypos(this, new SourceOnly("Toggle navigation"), new IconBar(), new IconBar(), new IconBar());
			SetAttribute("data-toggle", "collapse");
			SetAttribute("data-target", _id);
			
			SetAttribute("aria-expanded", "false");
			
			this.Content.OnMouseDown = (ev) =>
			{
				ev.StopImmediatePropagation();
				var x = BootWindowHandle;
				var y = Form.GetActiveFormCollection();

				for(int i = 0; i < y.VisibleForms.Count; i++)
				{
					if(Global.ParseInt(y.VisibleForms[i].Body.GetAttribute("bsh")) == x)
					{					
						if(Form.ActiveForm != y.VisibleForms[i])
						{
							Form.ActiveForm = y.VisibleForms[i];
							Content.Click();
						}
						return;
					}
				}
				if(Global.ParseInt(y.FormOwner.Body.GetAttribute("bsh")) == x)
				{
					if(Form.ActiveForm != y.FormOwner)
					{
						Form.ActiveForm = y.FormOwner;
						Content.Click();
					}
				}
			};
		}
	}
}
