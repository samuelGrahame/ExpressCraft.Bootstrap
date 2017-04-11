using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;
using ExpressCraft;

namespace ExpressCraft.Bootstrap
{
	public class TextBox : TextInput
	{
		public TextBox(string text = "", InputType type = InputType.Text) : base(type, false)
		{
			Content.ClassName = "form-control";
			if (!string.IsNullOrWhiteSpace(text))
			{
				if(type == InputType.Date || type == InputType.DateTime || type == InputType.DateTimeLocal)
					this.SetDate(text);
				else if(type == InputType.Checkbox)
					this.SetChecked(text);
				else
					this.Text = text;
			}
				
		}
	}
}
