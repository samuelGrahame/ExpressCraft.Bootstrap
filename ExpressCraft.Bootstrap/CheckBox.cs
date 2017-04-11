using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class CheckBox : BootstrapStyleDiv
	{
		private TextBox checkBox;
		public CheckBox(string label, string value = "") : base("checkbox")
		{
			AppendTypos(this, new Label(checkBox = new TextBox(value, InputType.Checkbox, ""), label));
		}
		
		public bool Inline
		{
			get { return GetInline(this, "checkbox"); }
			set
			{
				SetInline(this, "checkbox", value);
			}
		}
	}
}
