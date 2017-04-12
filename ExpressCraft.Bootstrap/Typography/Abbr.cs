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
	public class Abbr : BootstrapDiv
	{
		public Abbr(string title = string.Empty, params Union<string, Control, HTMLElement>[] typos) : base(Document.CreateElement("abbr"), typos)
		{
			if(!string.IsNullOrWhiteSpace(title))
				this.Content.Title = title;
		}

		public bool Initialism
		{
			get { return GetClassTrue("initialism"); }
			set
			{
				SetClassTrue("initialism", value);
			}
		}
	}
}
