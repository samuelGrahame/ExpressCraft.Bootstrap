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
		public TextBox(string text, InputType type = InputType.Text, string className = "form-control") : base(type, false)
		{
			Content.ClassName = className;
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
		public TextBox(InputType type = InputType.Text, string className = "form-control") : base(type, false)
		{
			Content.ClassName = className;			
		}
	}
}
