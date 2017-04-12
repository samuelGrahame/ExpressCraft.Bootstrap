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
	public class Label : BootWidget
	{
		public Label(params Union<string, Control, HTMLElement>[] typos) : base(Document.CreateElement("label"), typos)
		{
			
		}
		
		public bool SourceOnly
		{
			get { return GetClassTrue("sr-only"); }
			set
			{
				SetClassTrue("sr-only", value);
			}
		}
	}
}
