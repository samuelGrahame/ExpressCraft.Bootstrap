﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class Caret : BootWidget
	{
		public Caret() : base(new HTMLSpanElement() { ClassName = "caret" })
		{

		}
	}
}
