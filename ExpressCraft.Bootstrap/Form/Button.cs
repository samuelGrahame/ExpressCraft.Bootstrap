using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;
using ExpressCraft;

namespace ExpressCraft.Bootstrap
{
    public class Button : BootWidget
    {
		public Action<MouseEvent> OnClick { get { return this.Content.OnClick;  } set { this.Content.OnClick = value; } }
		public Button(string text = "", BootTheme type = BootTheme.Default, ButtonType buttonType = ButtonType.Button) : base(new HTMLButtonElement() { Type = buttonType, ClassName = "btn" + Extension.GetClassTheme(" btn-", type)})
		{									
			if (!string.IsNullOrWhiteSpace(text))			
				Content.InnerHTML = text;			
		}
		public Button(string text = "", ButtonType buttonType = ButtonType.Button) : this(text, BootTheme.Default, buttonType)
		{
			
		}

		public bool NavbarButton
		{
			get { return GetClassTrue("navbar-btn"); }
			set
			{
				SetClassTrue("navbar-btn", value);
			}
		}

		public bool Block
		{
			get { return GetClassTrue("btn-block"); }
			set
			{
				SetClassTrue("btn-block", value);
			}
		}

		public BootTheme Theme
		{
			get
			{
				var x = GetEnumClassValue("btn-", typeof(BootTheme)).As<Enum>();
				if(x == null)
					return BootTheme.None;
				else
					return x.As<BootTheme>();
			}
			set {
				if(value == BootTheme.None)
				{
					ClearEnumClassValue("btn-", typeof(BootRowCellTheme));
				}
				else
				{
					SetEnumClassValue("btn-", typeof(BootRowCellTheme), value.GetEnumToClass());
				}				
			}
		}

		public ButtonSize ButtonSize
		{
			get
			{
				var x = GetEnumClassValue("btn-", typeof(ButtonSize)).As<Enum>();
				if(x == null)
					return ButtonSize.None;
				else
					return x.As<ButtonSize>();
			}
			set
			{
				if(value == ButtonSize.None)
				{
					ClearEnumClassValue("btn-", typeof(ButtonSize));
				}
				else
				{
					SetEnumClassValue("btn-", typeof(ButtonSize), value.GetEnumToClass());
				}
			}
		}


		public bool Dropdown
		{
			get { return GetClassTrue("dropdown-toggle"); }
			set
			{
				if(value)
				{
					SetAttribute("data-toggle", "dropdown");
					SetAttribute("aria-haspopup", "true");
					SetAttribute("aria-expanded", "false");
				}
				else
				{
					SetAttribute("data-toggle", null);
					SetAttribute("aria-haspopup", null);
					SetAttribute("aria-expanded", null);
				}
				SetClassTrue("dropdown-toggle", value);
			}
		}
	}

}
