using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class BootForm : Control
	{
		public BootForm(BootFormType formType = BootFormType.None, params Union<string, Control, HTMLElement>[] typos) : base(new HTMLFormElement() )
		{			
			if(formType != BootFormType.None)
				Content.ClassName = "form-" + formType.ToString("G").ToLower();
			FormGroup.AppendGroupList(this, typos);			
		}
	}
}
