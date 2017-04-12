using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;


namespace ExpressCraft.Bootstrap
{
	public class Kbd : BootstrapDiv
	{
		public Kbd(params Union<string, Control, HTMLElement>[] typos) : base(Document.CreateElement("kbd"), typos)
		{

		}
	}
}
