using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;
using ExpressCraft;

namespace ExpressCraft.Bootstrap
{
    public class Button : Control
    {
		public Action<MouseEvent> OnClick { get { return this.Content.OnClick;  } set { this.Content.OnClick = value; } }
		public Button(string text = "", BootTheme type = BootTheme.Default, ButtonType buttonType = ButtonType.Button) : base(new HTMLButtonElement() { Type = buttonType, ClassName = "btn" + Extension.GetClassTheme(" btn-", type)})
		{									
			if (!string.IsNullOrWhiteSpace(text))			
				Content.InnerHTML = text;
			this.Size = new Vector2("", "");
		}
		public Button(string text = "", ButtonType buttonType = ButtonType.Button) : this(text, BootTheme.Default, buttonType)
		{
			
		}
	}
}
