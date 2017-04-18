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
		public Button(string text = "") : this(text, BootTheme.Default)
		{

		}
		public Button() : this("", BootTheme.Default)
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

		public BootSize ButtonSize
		{
			get
			{
				var x = GetEnumClassValue("btn-", typeof(BootSize)).As<Enum>();
				if(x == null)
					return BootSize.None;
				else
					return x.As<BootSize>();
			}
			set
			{
				if(value == BootSize.None)
				{
					ClearEnumClassValue("btn-", typeof(BootSize));
				}
				else
				{
					SetEnumClassValue("btn-", typeof(BootSize), value.GetEnumToClass());
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
