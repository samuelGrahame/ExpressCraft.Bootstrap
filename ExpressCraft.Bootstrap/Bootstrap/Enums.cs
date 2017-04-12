using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpressCraft.Bootstrap
{
	public enum BootstrapTheme
	{
		None,
		Default,
		Primary,
		Success,
		Info,
		Warning,
		Danger,
		Link
	}

	public enum BootstrapRowCellTheme
	{		
		Active,
		Success,
		Warning,
		Danger,
		Info
	}

	public enum BootstrapParagraphAlignment
	{
		Left,
		Center,
		Right,
		Justify,
		Nowrap
	}

	public enum BootstrapParagraphTransformation
	{
		Lowercase,
		Uppercase,
		Capitalize,		
	}

	public enum bootstrapForm
	{
		None,
		Inline,
		Horizontal
	}

	public static class Extension
	{
		public static string GetClassTheme(string cls, BootstrapTheme type)
		{
			if (type == BootstrapTheme.None)
				return string.Empty;
			return cls + type.ToString("G").ToLower();
		}
	}

	public class ColTier
	{
		public string value;
		public ColTier(string _value)
		{
			value = _value;
		}
		/// <summary>
		/// Phones
		/// </summary>
		public static ColTier XS = new ColTier("-xs-");
		/// <summary>
		/// Tablets
		/// </summary>
		public static ColTier SM = new ColTier("-sm-");
		/// <summary>
		/// Desktops
		/// </summary>
		public static ColTier MD = new ColTier("-md-");
		/// <summary>
		/// Larger Desktops
		/// </summary>
		public static ColTier LG = new ColTier("-lg-");
	}

	public class ColClass
	{
		public string value;		
		public ColClass(ColTier _tier, int _colIndex, string bonus)
		{
			value = "col" + _tier.value + bonus + _colIndex;			
		}
		public ColClass(ColTier _tier, int _colIndex) : this(_tier, _colIndex, string.Empty){ }

		public static ColClass XS1 = new ColClass(ColTier.XS, 1);
		public static ColClass XS2 = new ColClass(ColTier.XS, 2);
		public static ColClass XS3 = new ColClass(ColTier.XS, 3);
		public static ColClass XS4 = new ColClass(ColTier.XS, 4);
		public static ColClass XS5 = new ColClass(ColTier.XS, 5);
		public static ColClass XS6 = new ColClass(ColTier.XS, 6);
		public static ColClass XS7 = new ColClass(ColTier.XS, 7);
		public static ColClass XS8 = new ColClass(ColTier.XS, 8);
		public static ColClass XS9 = new ColClass(ColTier.XS, 9);
		public static ColClass XS10 = new ColClass(ColTier.XS, 10);
		public static ColClass XS11 = new ColClass(ColTier.XS, 11);
		public static ColClass XS12 = new ColClass(ColTier.XS, 12);

		public static ColClass XSO1 = new ColClass(ColTier.XS, 1, "offset-");
		public static ColClass XSO2 = new ColClass(ColTier.XS, 2, "offset-");
		public static ColClass XSO3 = new ColClass(ColTier.XS, 3, "offset-");
		public static ColClass XSO4 = new ColClass(ColTier.XS, 4, "offset-");
		public static ColClass XSO5 = new ColClass(ColTier.XS, 5, "offset-");
		public static ColClass XSO6 = new ColClass(ColTier.XS, 6, "offset-");
		public static ColClass XSO7 = new ColClass(ColTier.XS, 7, "offset-");
		public static ColClass XSO8 = new ColClass(ColTier.XS, 8, "offset-");
		public static ColClass XSO9 = new ColClass(ColTier.XS, 9, "offset-");
		public static ColClass XSO10 = new ColClass(ColTier.XS, 10, "offset-");
		public static ColClass XSO11 = new ColClass(ColTier.XS, 11, "offset-");
		public static ColClass XSO12 = new ColClass(ColTier.XS, 12, "offset-");

		public static ColClass XSPL1 = new ColClass(ColTier.XS, 1, "pull-");
		public static ColClass XSPL2 = new ColClass(ColTier.XS, 2, "pull-");
		public static ColClass XSPL3 = new ColClass(ColTier.XS, 3, "pull-");
		public static ColClass XSPL4 = new ColClass(ColTier.XS, 4, "pull-");
		public static ColClass XSPL5 = new ColClass(ColTier.XS, 5, "pull-");
		public static ColClass XSPL6 = new ColClass(ColTier.XS, 6, "pull-");
		public static ColClass XSPL7 = new ColClass(ColTier.XS, 7, "pull-");
		public static ColClass XSPL8 = new ColClass(ColTier.XS, 8, "pull-");
		public static ColClass XSPL9 = new ColClass(ColTier.XS, 9, "pull-");
		public static ColClass XSPL10 = new ColClass(ColTier.XS, 10, "pull-");
		public static ColClass XSPL11 = new ColClass(ColTier.XS, 11, "pull-");
		public static ColClass XSPL12 = new ColClass(ColTier.XS, 12, "pull-");

		public static ColClass XSPS1 = new ColClass(ColTier.XS, 1, "push-");
		public static ColClass XSPS2 = new ColClass(ColTier.XS, 2, "push-");
		public static ColClass XSPS3 = new ColClass(ColTier.XS, 3, "push-");
		public static ColClass XSPS4 = new ColClass(ColTier.XS, 4, "push-");
		public static ColClass XSPS5 = new ColClass(ColTier.XS, 5, "push-");
		public static ColClass XSPS6 = new ColClass(ColTier.XS, 6, "push-");
		public static ColClass XSPS7 = new ColClass(ColTier.XS, 7, "push-");
		public static ColClass XSPS8 = new ColClass(ColTier.XS, 8, "push-");
		public static ColClass XSPS9 = new ColClass(ColTier.XS, 9, "push-");
		public static ColClass XSPS10 = new ColClass(ColTier.XS, 10, "push-");
		public static ColClass XSPS11 = new ColClass(ColTier.XS, 11, "push-");
		public static ColClass XSPS12 = new ColClass(ColTier.XS, 12, "push-");

		public static ColClass SM1 = new ColClass(ColTier.SM, 1);
		public static ColClass SM2 = new ColClass(ColTier.SM, 2);
		public static ColClass SM3 = new ColClass(ColTier.SM, 3);
		public static ColClass SM4 = new ColClass(ColTier.SM, 4);
		public static ColClass SM5 = new ColClass(ColTier.SM, 5);
		public static ColClass SM6 = new ColClass(ColTier.SM, 6);
		public static ColClass SM7 = new ColClass(ColTier.SM, 7);
		public static ColClass SM8 = new ColClass(ColTier.SM, 8);
		public static ColClass SM9 = new ColClass(ColTier.SM, 9);
		public static ColClass SM10 = new ColClass(ColTier.SM, 10);
		public static ColClass SM11 = new ColClass(ColTier.SM, 11);
		public static ColClass SM12 = new ColClass(ColTier.SM, 12);

		public static ColClass SMO1 = new ColClass(ColTier.SM, 1, "offset-");
		public static ColClass SMO2 = new ColClass(ColTier.SM, 2, "offset-");
		public static ColClass SMO3 = new ColClass(ColTier.SM, 3, "offset-");
		public static ColClass SMO4 = new ColClass(ColTier.SM, 4, "offset-");
		public static ColClass SMO5 = new ColClass(ColTier.SM, 5, "offset-");
		public static ColClass SMO6 = new ColClass(ColTier.SM, 6, "offset-");
		public static ColClass SMO7 = new ColClass(ColTier.SM, 7, "offset-");
		public static ColClass SMO8 = new ColClass(ColTier.SM, 8, "offset-");
		public static ColClass SMO9 = new ColClass(ColTier.SM, 9, "offset-");
		public static ColClass SMO10 = new ColClass(ColTier.SM, 10, "offset-");
		public static ColClass SMO11 = new ColClass(ColTier.SM, 11, "offset-");
		public static ColClass SMO12 = new ColClass(ColTier.SM, 12, "offset-");

		public static ColClass SMPL1 = new ColClass(ColTier.SM, 1, "pull-");
		public static ColClass SMPL2 = new ColClass(ColTier.SM, 2, "pull-");
		public static ColClass SMPL3 = new ColClass(ColTier.SM, 3, "pull-");
		public static ColClass SMPL4 = new ColClass(ColTier.SM, 4, "pull-");
		public static ColClass SMPL5 = new ColClass(ColTier.SM, 5, "pull-");
		public static ColClass SMPL6 = new ColClass(ColTier.SM, 6, "pull-");
		public static ColClass SMPL7 = new ColClass(ColTier.SM, 7, "pull-");
		public static ColClass SMPL8 = new ColClass(ColTier.SM, 8, "pull-");
		public static ColClass SMPL9 = new ColClass(ColTier.SM, 9, "pull-");
		public static ColClass SMPL10 = new ColClass(ColTier.SM, 10, "pull-");
		public static ColClass SMPL11 = new ColClass(ColTier.SM, 11, "pull-");
		public static ColClass SMPL12 = new ColClass(ColTier.SM, 12, "pull-");

		public static ColClass SMPS1 = new ColClass(ColTier.SM, 1, "push-");
		public static ColClass SMPS2 = new ColClass(ColTier.SM, 2, "push-");
		public static ColClass SMPS3 = new ColClass(ColTier.SM, 3, "push-");
		public static ColClass SMPS4 = new ColClass(ColTier.SM, 4, "push-");
		public static ColClass SMPS5 = new ColClass(ColTier.SM, 5, "push-");
		public static ColClass SMPS6 = new ColClass(ColTier.SM, 6, "push-");
		public static ColClass SMPS7 = new ColClass(ColTier.SM, 7, "push-");
		public static ColClass SMPS8 = new ColClass(ColTier.SM, 8, "push-");
		public static ColClass SMPS9 = new ColClass(ColTier.SM, 9, "push-");
		public static ColClass SMPS10 = new ColClass(ColTier.SM, 10, "push-");
		public static ColClass SMPS11 = new ColClass(ColTier.SM, 11, "push-");
		public static ColClass SMPS12 = new ColClass(ColTier.SM, 12, "push-");

		public static ColClass MD1 = new ColClass(ColTier.MD, 1);
		public static ColClass MD2 = new ColClass(ColTier.MD, 2);
		public static ColClass MD3 = new ColClass(ColTier.MD, 3);
		public static ColClass MD4 = new ColClass(ColTier.MD, 4);
		public static ColClass MD5 = new ColClass(ColTier.MD, 5);
		public static ColClass MD6 = new ColClass(ColTier.MD, 6);
		public static ColClass MD7 = new ColClass(ColTier.MD, 7);
		public static ColClass MD8 = new ColClass(ColTier.MD, 8);
		public static ColClass MD9 = new ColClass(ColTier.MD, 9);
		public static ColClass MD10 = new ColClass(ColTier.MD, 10);
		public static ColClass MD11 = new ColClass(ColTier.MD, 11);
		public static ColClass MD12 = new ColClass(ColTier.MD, 12);

		public static ColClass MDO1 = new ColClass(ColTier.MD, 1, "offset-");
		public static ColClass MDO2 = new ColClass(ColTier.MD, 2, "offset-");
		public static ColClass MDO3 = new ColClass(ColTier.MD, 3, "offset-");
		public static ColClass MDO4 = new ColClass(ColTier.MD, 4, "offset-");
		public static ColClass MDO5 = new ColClass(ColTier.MD, 5, "offset-");
		public static ColClass MDO6 = new ColClass(ColTier.MD, 6, "offset-");
		public static ColClass MDO7 = new ColClass(ColTier.MD, 7, "offset-");
		public static ColClass MDO8 = new ColClass(ColTier.MD, 8, "offset-");
		public static ColClass MDO9 = new ColClass(ColTier.MD, 9, "offset-");
		public static ColClass MDO10 = new ColClass(ColTier.MD, 10, "offset-");
		public static ColClass MDO11 = new ColClass(ColTier.MD, 11, "offset-");
		public static ColClass MDO12 = new ColClass(ColTier.MD, 12, "offset-");

		public static ColClass MDPL1 = new ColClass(ColTier.MD, 1, "pull-");
		public static ColClass MDPL2 = new ColClass(ColTier.MD, 2, "pull-");
		public static ColClass MDPL3 = new ColClass(ColTier.MD, 3, "pull-");
		public static ColClass MDPL4 = new ColClass(ColTier.MD, 4, "pull-");
		public static ColClass MDPL5 = new ColClass(ColTier.MD, 5, "pull-");
		public static ColClass MDPL6 = new ColClass(ColTier.MD, 6, "pull-");
		public static ColClass MDPL7 = new ColClass(ColTier.MD, 7, "pull-");
		public static ColClass MDPL8 = new ColClass(ColTier.MD, 8, "pull-");
		public static ColClass MDPL9 = new ColClass(ColTier.MD, 9, "pull-");
		public static ColClass MDPL10 = new ColClass(ColTier.MD, 10, "pull-");
		public static ColClass MDPL11 = new ColClass(ColTier.MD, 11, "pull-");
		public static ColClass MDPL12 = new ColClass(ColTier.MD, 12, "pull-");

		public static ColClass MDPS1 = new ColClass(ColTier.MD, 1, "push-");
		public static ColClass MDPS2 = new ColClass(ColTier.MD, 2, "push-");
		public static ColClass MDPS3 = new ColClass(ColTier.MD, 3, "push-");
		public static ColClass MDPS4 = new ColClass(ColTier.MD, 4, "push-");
		public static ColClass MDPS5 = new ColClass(ColTier.MD, 5, "push-");
		public static ColClass MDPS6 = new ColClass(ColTier.MD, 6, "push-");
		public static ColClass MDPS7 = new ColClass(ColTier.MD, 7, "push-");
		public static ColClass MDPS8 = new ColClass(ColTier.MD, 8, "push-");
		public static ColClass MDPS9 = new ColClass(ColTier.MD, 9, "push-");
		public static ColClass MDPS10 = new ColClass(ColTier.MD, 10, "push-");
		public static ColClass MDPS11 = new ColClass(ColTier.MD, 11, "push-");
		public static ColClass MDPS12 = new ColClass(ColTier.MD, 12, "push-");

		public static ColClass LG1 = new ColClass(ColTier.LG, 1);
		public static ColClass LG2 = new ColClass(ColTier.LG, 2);
		public static ColClass LG3 = new ColClass(ColTier.LG, 3);
		public static ColClass LG4 = new ColClass(ColTier.LG, 4);
		public static ColClass LG5 = new ColClass(ColTier.LG, 5);
		public static ColClass LG6 = new ColClass(ColTier.LG, 6);
		public static ColClass LG7 = new ColClass(ColTier.LG, 7);
		public static ColClass LG8 = new ColClass(ColTier.LG, 8);
		public static ColClass LG9 = new ColClass(ColTier.LG, 9);
		public static ColClass LG10 = new ColClass(ColTier.LG, 10);
		public static ColClass LG11 = new ColClass(ColTier.LG, 11);
		public static ColClass LG12 = new ColClass(ColTier.LG, 12);

		public static ColClass LGO1 = new ColClass(ColTier.LG, 1, "offset-");
		public static ColClass LGO2 = new ColClass(ColTier.LG, 2, "offset-");
		public static ColClass LGO3 = new ColClass(ColTier.LG, 3, "offset-");
		public static ColClass LGO4 = new ColClass(ColTier.LG, 4, "offset-");
		public static ColClass LGO5 = new ColClass(ColTier.LG, 5, "offset-");
		public static ColClass LGO6 = new ColClass(ColTier.LG, 6, "offset-");
		public static ColClass LGO7 = new ColClass(ColTier.LG, 7, "offset-");
		public static ColClass LGO8 = new ColClass(ColTier.LG, 8, "offset-");
		public static ColClass LGO9 = new ColClass(ColTier.LG, 9, "offset-");
		public static ColClass LGO10 = new ColClass(ColTier.LG, 10, "offset-");
		public static ColClass LGO11 = new ColClass(ColTier.LG, 11, "offset-");
		public static ColClass LGO12 = new ColClass(ColTier.LG, 12, "offset-");

		public static ColClass LGPL1 = new ColClass(ColTier.LG, 1, "pull-");
		public static ColClass LGPL2 = new ColClass(ColTier.LG, 2, "pull-");
		public static ColClass LGPL3 = new ColClass(ColTier.LG, 3, "pull-");
		public static ColClass LGPL4 = new ColClass(ColTier.LG, 4, "pull-");
		public static ColClass LGPL5 = new ColClass(ColTier.LG, 5, "pull-");
		public static ColClass LGPL6 = new ColClass(ColTier.LG, 6, "pull-");
		public static ColClass LGPL7 = new ColClass(ColTier.LG, 7, "pull-");
		public static ColClass LGPL8 = new ColClass(ColTier.LG, 8, "pull-");
		public static ColClass LGPL9 = new ColClass(ColTier.LG, 9, "pull-");
		public static ColClass LGPL10 = new ColClass(ColTier.LG, 10, "pull-");
		public static ColClass LGPL11 = new ColClass(ColTier.LG, 11, "pull-");
		public static ColClass LGPL12 = new ColClass(ColTier.LG, 12, "pull-");

		public static ColClass LGPS1 = new ColClass(ColTier.LG, 1, "push-");
		public static ColClass LGPS2 = new ColClass(ColTier.LG, 2, "push-");
		public static ColClass LGPS3 = new ColClass(ColTier.LG, 3, "push-");
		public static ColClass LGPS4 = new ColClass(ColTier.LG, 4, "push-");
		public static ColClass LGPS5 = new ColClass(ColTier.LG, 5, "push-");
		public static ColClass LGPS6 = new ColClass(ColTier.LG, 6, "push-");
		public static ColClass LGPS7 = new ColClass(ColTier.LG, 7, "push-");
		public static ColClass LGPS8 = new ColClass(ColTier.LG, 8, "push-");
		public static ColClass LGPS9 = new ColClass(ColTier.LG, 9, "push-");
		public static ColClass LGPS10 = new ColClass(ColTier.LG, 10, "push-");
		public static ColClass LGPS11 = new ColClass(ColTier.LG, 11, "push-");
		public static ColClass LGPS12 = new ColClass(ColTier.LG, 12, "push-");

	}
}
