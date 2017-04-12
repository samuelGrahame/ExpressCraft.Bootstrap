using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public static class ColExtentions
	{
		public static void ApplyColumns(this BootWidget widget, params ColClass[] colClasses)
		{
			int length;
			if(widget != null && colClasses != null && (length = colClasses.Length) > 0)
			{
				var builder = new StringBuilder();

				for(int i = 0; i < length; i++)
				{
					builder.Append(colClasses[i].value + " ");
				}
				builder.Length--;
				widget.Content.ClassName = builder.ToString();
			}
		}
	}

	public class Col : BootWidget
	{		
		public Col(ColClass[] colClasses, params Union<string, Control, HTMLElement>[] typos) : base(typos)
		{
			this.ApplyColumns(colClasses);			
		}		

		public Col(List<ColClass> colClasses, params Union<string, Control, HTMLElement>[] typos) : this(colClasses.ToArray(), typos)
		{

		}

		public Col(ColClass colClass1, params Union<string, Control, HTMLElement>[] typos) : this(new ColClass[] { colClass1 }, typos)
		{

		}
		public Col(ColClass colClass1, ColClass colClass2, params Union<string, Control, HTMLElement>[] typos) : this(new ColClass[] { colClass1, colClass2 }, typos)
		{

		}
		public Col(ColClass colClass1, ColClass colClass2, ColClass colClass3, params Union<string, Control, HTMLElement>[] typos) : this(new ColClass[] { colClass1, colClass2, colClass3 }, typos)
		{

		}
		public Col(ColClass colClass1, ColClass colClass2, ColClass colClass3, ColClass colClass4, params Union<string, Control, HTMLElement>[] typos) : this(new ColClass[] { colClass1, colClass2, colClass3, colClass4 }, typos)
		{

		}
		public Col(ColClass colClass1, ColClass colClass2, ColClass colClass3, ColClass colClass4, ColClass colClass5, params Union<string, Control, HTMLElement>[] typos) : this(new ColClass[] { colClass1, colClass2, colClass3, colClass4, colClass5}, typos)
		{

		}
		public Col(ColClass colClass1, ColClass colClass2, ColClass colClass3, ColClass colClass4, ColClass colClass5, ColClass colClass6, params Union<string, Control, HTMLElement>[] typos) : this(new ColClass[] { colClass1, colClass2, colClass3, colClass4, colClass5, colClass6 }, typos)
		{

		}
		public Col(ColClass colClass1, ColClass colClass2, ColClass colClass3, ColClass colClass4, ColClass colClass5, ColClass colClass6, ColClass colClass7, params Union<string, Control, HTMLElement>[] typos) : this(new ColClass[] { colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, colClass7 }, typos)
		{

		}
		public Col(ColClass colClass1, ColClass colClass2, ColClass colClass3, ColClass colClass4, ColClass colClass5, ColClass colClass6, ColClass colClass7, ColClass colClass8, params Union<string, Control, HTMLElement>[] typos) : this(new ColClass[] { colClass1, colClass2, colClass3, colClass4, colClass5, colClass6, colClass7, colClass8 }, typos)
		{

		}
	}
}
