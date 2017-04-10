using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;
using ExpressCraft;

namespace ExpressCraft.Bootstrap
{
	public class FormGroup : Control
	{
		public FormGroup() : base("form-group")
		{
			Style.Position = Position.Relative;
			ClassList.Remove("control");
		}
	}
}
