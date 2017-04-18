using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpressCraft.Bootstrap
{
	public class InputGroup : BootStyleWidget
	{
		public InputGroup(Union<string, Control, Bridge.Html5.HTMLElement>[] typos) : base("input-group", typos)
		{

		}

		public BootSize InputSize
		{
			get
			{
				var x = GetEnumClassValue("input-group-", typeof(BootSize)).As<Enum>();
				if(x == null)
					return BootSize.None;
				else
					return x.As<BootSize>();
			}
			set
			{
				if(value == BootSize.None)
				{
					ClearEnumClassValue("input-group-", typeof(BootSize));
				}
				else
				{
					SetEnumClassValue("input-group-", typeof(BootSize), value.GetEnumToClass());
				}
			}
		}

	}
}
