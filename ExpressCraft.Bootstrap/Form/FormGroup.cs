using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;
using ExpressCraft;


namespace ExpressCraft.Bootstrap
{
	public class FormGroup : BootStyleWidget
	{
		public FormGroup(params Union<string, Control, HTMLElement>[] typos) : base("form-group", typos)
		{
			
		}

		public static void AppendGroupList(Control control, params Union<string, Control, HTMLElement>[] typos)
		{
			if(typos == null || typos.Length == 0)
				return;

			var length = typos.Length;
			var list = new Union<string, Control, HTMLElement>[length];

			for(int i = 0; i < length; i++)
			{
				if(typos[i] == null)
				{
					list[i] = new FormGroup();
					continue;
				}

				if(typos[i].Is<FormGroup>() || typos[i].Is<bootstrapForm>())
				{
					list[i] = typos[i];
				}
				else
				{
					list[i] = new FormGroup(typos[i]);
				}

			}
			BootWidget.AppendTypos(control, list);
		}
	}
}
