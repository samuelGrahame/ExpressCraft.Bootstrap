using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

using ExpressCraft.Bootstrap;

namespace ExpressCraft.Bootstrap
{
	public class Strong : BootWidget
	{
		public Strong(params Union<string, Control, HTMLElement>[] typos) : base(Document.CreateElement("strong"), typos)
		{

		}
	}
}
