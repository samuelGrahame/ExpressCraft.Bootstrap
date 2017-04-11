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
	public class FormGroupList : BootstrapDiv
	{
		public FormGroupList(params Union<string, Control, HTMLElement>[] typos) : base()
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

				if(typos[i].Is<FormGroup>())
				{
					list[i] = typos[i];
				}
				else
				{
					list[i] = new FormGroup(typos[i]);
				}

			}
			BootstrapDiv.AppendTypos(this, list);
		}
	}
}
