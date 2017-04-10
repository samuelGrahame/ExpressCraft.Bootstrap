using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;
using ExpressCraft;

namespace ExpressCraft.Bootstrap
{
    public class Button : SimpleButton
    {		
		public Button(string text = "", BootstrapTheme type = BootstrapTheme.Default) : base(Bridge.Html5.ButtonType.Button, false)
		{
			Style.Position = Position.Relative;
			Content.ClassName = ( "btn" + Extension.GetClassTheme(" btn-", type) + Content.ClassName.Replace("simplebutton", "")).Trim();			
			if (!string.IsNullOrWhiteSpace(text))			
				Text = text;
			this.Size = new Vector2("", "");
		}		
	}
}
