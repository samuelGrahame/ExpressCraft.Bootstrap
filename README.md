# ExpressCraft.Bootstrap

# Demo https://rawgit.com/samuelGrahame/ExpressCraft/master/ExpressCraftDesign/Bridge/www/rawprev.html

```csharp
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
			Settings.AllowCloseWithoutQuestion = true;

			Application.SetApplicationDefinition();
			
			Action<MouseEvent> buttonClick = (ev) => { Global.Alert(ev.CurrentTarget.As<HTMLElement>().InnerHTML); };

			BootstrapWindow.SetupMetaTags();

			Application.Run(
				new BootstrapWindow(
					new Panel(BootstrapTheme.Default,
						new PanelHeading("Welcome to ExpressCraft-Bootstrap"),
						new PanelBody(
							new BootstrapSelectionDiv(
								new FormGroupList(
									new TextBox("Textbox"),
									new CheckBox("checkbox", "true"),
									new FormGroup(
										new CheckBox("checkbox-inline 1", "true") { Inline = true },
										new CheckBox("checkbox-inline 2", "false") { Inline = true },
										new CheckBox("checkbox-inline 3", "true") { Inline = true }
										),
									new TextBox("11/04/2017", InputType.Date),
									new TextBox("Password", InputType.Password),
									new TextArea("TextArea", 4),
									new BootstrapForm(bootstrapForm.Inline,
										new Label(
											"Email:",
											new TextBox()
										),
										new Label(
											"Password:",
											new TextBox(InputType.Password)
										),
										new CheckBox("Remeber me"),
										new Button("Submit", ButtonType.Submit)
									),
									new BootstrapForm(bootstrapForm.Horizontal,
										new Label(
											"Email:",
											new TextBox()
										),
										new Label(
											"Password:",
											new TextBox(InputType.Password)
										),
										new CheckBox("Remeber me"),
										new Button("Submit", ButtonType.Submit)
									),
									new Button("Basic", BootstrapTheme.None) { OnClick = buttonClick },
									new Button("Default", BootstrapTheme.Default) { OnClick = buttonClick },
									new Button("Primary", BootstrapTheme.Primary) { OnClick = buttonClick },
									new Button("Success", BootstrapTheme.Success) { OnClick = buttonClick },
									new Button("Info", BootstrapTheme.Info) { OnClick = buttonClick },
									new Button("Warning", BootstrapTheme.Warning) { OnClick = buttonClick },
									new Button("Danger", BootstrapTheme.Danger) { OnClick = buttonClick },
									new Button("Link", BootstrapTheme.Link) { OnClick = buttonClick }																																
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
											new DescriptionDetail("- Description Detail 2")),
										new Paragraph("The following HTML elements: ", new Code("span"), ", ", new Code("section"), ", and ", new Code("div"), " defines a section in a document."),
										new Paragraph("Use ", new Kbd("ctrl + p"), " to open the Print dialog box."),
										new Pre(
@"Text in a pre element
is displayed in a fixed-width
font, and it preserves
both      spaces and
line breaks."),
										new Paragraph(
											new ParagraphList(
												new Heading(HeadingType.H2, "Contextual Colors"),
												new Paragraph("This text is muted.") { ContextualText = Contextual.Text.Muted },
												new Paragraph("This text is important.") { ContextualText = Contextual.Text.Primary },
												new Paragraph("This text indicates success.") { ContextualText = Contextual.Text.Success },
												new Paragraph("This text represents some information.") { ContextualText = Contextual.Text.Info },
												new Paragraph("This text represents a warning.") { ContextualText = Contextual.Text.Warning },
												new Paragraph("This text represents danger.") { ContextualText = Contextual.Text.Danger }
											)
										),
										new Paragraph(
											new ParagraphList(
												new Heading(HeadingType.H2, "Contextual Backgrounds"),
												new Paragraph("This text is important.") { ContextualBackground = Contextual.Background.Primary },
												new Paragraph("This text indicates success.") { ContextualBackground = Contextual.Background.Success },
												new Paragraph("This text represents some information.") { ContextualBackground = Contextual.Background.Info },
												new Paragraph("This text represents a warning.") { ContextualBackground = Contextual.Background.Warning },
												new Paragraph("This text represents danger.") { ContextualBackground = Contextual.Background.Danger }
											)
										)
									)
								)
						),
						new PanelFooter(
							"Footer"
							)
						)
				)
				{ Windowstate = WindowState.Maximized }				
			);			
		}
	}
}

```
