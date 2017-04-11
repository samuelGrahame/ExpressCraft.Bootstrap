using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;
using ExpressCraft;

using ExpressCraft.Bootstrap;

namespace ExpressCraft.Bootstrap
{
	public class Program
	{
		public static void Main()
		{
			Settings.IncludeFocusRegion = false;
			Application.SetApplicationDefinition();
			
			Application.Run(
				new BootstrapForm(new Panel(BootstrapTheme.Default,
					new PanelHeading("Welcome to ExpressCraft-Bootstrap"),
					new PanelBody(
						new Button("Hello World", BootstrapTheme.Success) { ItemClick = (but) => { Global.Alert("Welcome"); } },
						new TextBox("hello World")
						),
					new PanelFooter(
						new BootstrapDiv(
							new Heading(HeadingType.H2, "Heading"),
							new Code("Code"),
							"Text"
							)
						)
					)
				)
			);			
		}
	}
}
