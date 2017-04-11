using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;
using ExpressCraft;

using ExpressCraft.Bootstrap;

namespace ExpressCraft.Bootstrap
{
	public class BootstrapForm : Form
	{
		public BootstrapForm(params Union<string, Control, HTMLElement>[] typos) : base("")
		{		
			var x = (HTMLDivElement)(new BootstrapStyleDiv("container")).Content;

			this.BackColor = Color.White;
			this.Body.AppendChild(x);
			this.BodyStyle.OverflowY = Overflow.Auto;

			this.Body = x;						
			this.BodyStyle.Padding = "0";
			SetCalcSize();

			BootstrapDiv.AppendTypos(this.Body, typos);			
		}

		protected void SetCalcSize()
		{
			this.Body.SetSize("calc(100% - 28px)", this.Body.Style.Height);
		}

		private void CalcSizeOnChange()
		{
			var x = this.Content.GetBoundingClientRect();
			if(x.Width - 2 < 1170)
			{
				SetCalcSize();
			}
			else
			{
				this.Body.SetSize("", this.Body.Style.Height);
			}
		}

		protected override void OnShowed()
		{
			base.OnShowed();

			CalcSizeOnChange();
		}

		protected override void OnResizing()
		{
			base.OnResizing();

			CalcSizeOnChange();
		}
	}
}
