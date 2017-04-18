using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class BootBaseBox : BootWidget
	{
		private string prevText = "";

		public Action<BootBaseBox> OnTextChanged = null;
		public Action<BootBaseBox, KeyboardEvent> OnKeyDown = null;
		public Action<BootBaseBox, KeyboardEvent> OnKeyUp = null;
		public Action<BootBaseBox, KeyboardEvent> OnKeyPress = null;

		public string AriaDescribedBy
		{
			get { return GetAttribute("aria-describedby"); }
			set
			{
				SetAttribute("aria-describedby", value);
			}
		}

		public string AriaLabel
		{
			get { return GetAttribute("aria-label"); }
			set
			{
				SetAttribute("aria-label", value);
			}
		}

		public string Placeholder
		{
			get { return GetAttribute("placeholder"); }
			set
			{
				SetAttribute("placeholder", value);
			}
		}

		public BootBaseBox(HTMLElement element) : base(element)
		{			
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
				if(this.Content.Is<HTMLInputElement>() && this.Content.As<HTMLInputElement>().Type == InputType.Checkbox)
				{
					return this.Content.As<HTMLInputElement>().Checked.ToString();
				}
				else
				{
					return this.Content.As<HTMLInputElement>().Value;
				}
			}
			set
			{
				if(this.Content.Is<HTMLInputElement>() && this.Content.As<HTMLInputElement>().Type == InputType.Checkbox)
				{
					value = value.ToLower();
					this.Content.As<HTMLInputElement>().Checked = value.IsTrue() == 1;
				}
				else
				{
					this.Content.As<HTMLInputElement>().Value = value;
				}

				CheckTextChanged();
			}
		}
	}
}
