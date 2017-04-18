using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class NavbarContent : BootStyleWidget
	{
		public NavbarContent(string _id, params Union<string, Control, HTMLElement>[] typos) : base("collapse navbar-collapse", typos)
		{
			if(!string.IsNullOrWhiteSpace(_id))
			{
				if(_id.StartsWith("#"))
					_id = _id.Substring(1);
				Id = _id;
			}
		}
	}
}
