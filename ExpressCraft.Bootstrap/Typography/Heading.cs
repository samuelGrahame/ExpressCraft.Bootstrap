﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap.Typography
{
	public class Heading : BootstrapDiv
	{
		public Heading(HeadingType ht, params Union<string, Control, HTMLElement>[] typos) : base(new HTMLHeadingElement(ht), typos)
		{
			
		}
	}
}
