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
		private CheckBoxBase checkBox;
		public CheckBox(string label, bool value = false) : base("checkbox")
		{
			AppendTypos(this, new Label(checkBox = new CheckBoxBase(value), label));
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
