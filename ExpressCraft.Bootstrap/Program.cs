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
				new BootstrapForm(					
					new Panel(BootstrapTheme.Default,					
						new PanelHeading("Welcome to ExpressCraft-Bootstrap"),
						new PanelBody(
							new BootstrapSelectionDiv(
								new FormGroup(
									new TextBox("hello World")
								),
								new FormGroup(
									new Button("Hello World", BootstrapTheme.Success) { ItemClick = (but) => { Global.Alert("Hello World"); } }
								),
								new Heading(HeadingType.H2, "Heading", new Small(" - Heading Small")),
									new ParagraphList(
										"Text",
										new Abbr("Abbr hover", "Abbr"),
										new Small("Small"),
										new Blockquote("Block Quote Content", "Block Quote From"),
										new Blockquote("Block Quote Content Reverse", "Block Quote From Reverse") { Reverse = true },
										new DescriptionList(
											new DescriptionTitle("Description Title 1"),
											new DescriptionDetail("- Description Detail 1"),
											new DescriptionTitle("Description Title 2"),
											new DescriptionDetail("- Description Detail 2"))
										),
										new Paragraph("The following HTML elements: ", new Code("span"), ", ", new Code("section"), ", and ", new Code("div"), " defines a section in a document."),
										new Paragraph("Use ", new Kbd("ctrl + p"), " to open the Print dialog box."),
										new Pre(
@"Text in a pre element
is displayed in a fixed-width
font, and it preserves
both      spaces and
line breaks.")
							)
						),
						new PanelFooter(
							"Footer"
							)
						)
				)				
			);			
		}
	}
}
