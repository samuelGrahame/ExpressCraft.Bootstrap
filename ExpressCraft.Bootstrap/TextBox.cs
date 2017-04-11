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
				this.Text = text;
		}
	}
}
