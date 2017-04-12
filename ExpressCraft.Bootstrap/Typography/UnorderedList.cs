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
	public class UnorderedList : BootstrapDiv
	{
		public UnorderedList(params Union<string, Control, HTMLElement>[] typos) : base(Document.CreateElement("ul"), typos)
		{
			ListItem.AppendItemList(this, typos);
		}
		
		public bool Unstyled
		{
			get { return GetClassTrue("list-unstyled"); }
			set
			{
				SetClassTrue("list-unstyled", value);
			}
		}

		public bool Inline
		{
			get { return GetClassTrue("list-inline"); }
			set
			{
				SetClassTrue("list-inline", value);
			}
		}
	}
}
