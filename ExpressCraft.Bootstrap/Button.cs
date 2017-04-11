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
		public Button(string text = "", BootstrapTheme type = BootstrapTheme.Default) : base(new HTMLButtonElement() { Type = ButtonType.Button, ClassName = "btn" + Extension.GetClassTheme(" btn-", type)})
		{									
			if (!string.IsNullOrWhiteSpace(text))			
				Content.InnerHTML = text;
			this.Size = new Vector2("", "");
		}		
	}
}
