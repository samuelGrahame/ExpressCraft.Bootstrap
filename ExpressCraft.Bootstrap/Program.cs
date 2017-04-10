using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;
using ExpressCraft;

namespace ExpressCraft.Bootstrap
{
	public class Program
	{
		public static void Main()
		{
			Settings.IncludeFocusRegion = false;
			Application.SetApplicationDefinition();
			
			Application.Run(
				new BootstrapForm().AppendChild(new Panel(BootstrapTheme.Default).AppendChildren(
					new PanelHeading("Welcome to ExpressCraft-Bootstrap"),
					new PanelBody().AppendChildren(
						new Button("Hello World", BootstrapTheme.Success) { ItemClick = (but) => { Global.Alert("Welcome"); } },
						new TextBox("hello World")))));
		}
	}
}
