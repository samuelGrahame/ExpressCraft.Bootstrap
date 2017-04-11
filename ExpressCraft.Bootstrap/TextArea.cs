using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class TextArea : Control
	{
		private string prevText = "";

		public Action<TextArea> OnTextChanged = null;
		public Action<TextArea, KeyboardEvent> OnKeyDown = null;
		public Action<TextArea, KeyboardEvent> OnKeyUp = null;
		public Action<TextArea, KeyboardEvent> OnKeyPress = null;
		
		public TextArea(string text = "", int rows = 1) : base(new HTMLTextAreaElement() { ClassName = "form-control" })
		{
			Text = text;
			Content.As<HTMLTextAreaElement>().Rows = Math.Max(rows, 1);
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
