using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class BootstrapBaseBox : BootstrapDiv
	{
		private string prevText = "";

		public Action<BootstrapBaseBox> OnTextChanged = null;
		public Action<BootstrapBaseBox, KeyboardEvent> OnKeyDown = null;
		public Action<BootstrapBaseBox, KeyboardEvent> OnKeyUp = null;
		public Action<BootstrapBaseBox, KeyboardEvent> OnKeyPress = null;
		
		public BootstrapBaseBox(HTMLElement element) : base(element)
		{
			Content.ClassName = "form-control";

			this.Content.OnChange = (ev) => {
				CheckTextChanged();
			};
			this.Content.OnContextMenu = (ev) => {
				ev.StopPropagation();
			};
			this.Content.OnKeyPress = (ev) =>
			{
				CheckTextChanged();
				if(OnKeyPress != null)
					OnKeyPress(this, ev);
			};
			this.Content.OnKeyDown = (ev) =>
			{
				CheckTextChanged();
				if(OnKeyDown != null)
					OnKeyDown(this, ev);
			};
			this.Content.OnKeyUp = (ev) =>
			{
				CheckTextChanged();
				if(OnKeyUp != null)
					OnKeyUp(this, ev);
			};
			this.Content.AddEventListener(EventType.Paste, () =>
			{
				CheckTextChanged();
			});
			this.Content.AddEventListener(EventType.Cut, () => {
				CheckTextChanged();
			});
		}

		private void CheckTextChanged()
		{
			if(Text != prevText)
			{
				if(OnTextChanged != null)
					OnTextChanged(this);
				prevText = Text;
			}
		}

		public override void Render()
		{
			base.Render();
			prevText = Text;
		}

		public string Text
		{
			get
			{
				return this.Content.As<HTMLInputElement>().InnerHTML;
			}
			set
			{
				this.Content.As<HTMLInputElement>().InnerHTML = value;
				
				CheckTextChanged();
			}
		}		
	}
}
