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
}
