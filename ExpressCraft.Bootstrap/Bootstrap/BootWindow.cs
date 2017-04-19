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
	public class BootWindow : Form
	{		
		internal const string Min_Width768 = @".dl-horizontal.windowHandleId dt.windowHandleId,.table-responsive>.table>tbody>tr>td.windowHandleId,.table-responsive>.table>tbody>tr>th.windowHandleId,.table-responsive>.table>tfoot>tr>td.windowHandleId,.table-responsive>.table>tfoot>tr>th.windowHandleId,.table-responsive>.table>thead>tr>td.windowHandleId,.table-responsive>.table>thead>tr>th.windowHandleId{white-space:nowrap}.col-sm-1.windowHandleId,.col-sm-10.windowHandleId,.col-sm-11.windowHandleId,.col-sm-12.windowHandleId,.col-sm-2.windowHandleId,.col-sm-3.windowHandleId,.col-sm-4.windowHandleId,.col-sm-5.windowHandleId,.col-sm-6.windowHandleId,.col-sm-7.windowHandleId,.col-sm-8.windowHandleId,.col-sm-9.windowHandleId,.navbar-header.windowHandleId,.navbar-nav.windowHandleId,.navbar-nav>li.windowHandleId,.navbar-text.windowHandleId{float:left}.lead.windowHandleId{font-size:21px}.dl-horizontal.windowHandleId dt.windowHandleId{float:left;width:160px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis}.dl-horizontal.windowHandleId dd.windowHandleId{margin-left:180px}.container.windowHandleId{width:750px}.col-sm-12.windowHandleId{width:100%}.col-sm-11.windowHandleId{width:91.66666667%}.col-sm-10.windowHandleId{width:83.33333333%}.col-sm-9.windowHandleId{width:75%}.col-sm-8.windowHandleId{width:66.66666667%}.col-sm-7.windowHandleId{width:58.33333333%}.col-sm-6.windowHandleId{width:50%}.col-sm-5.windowHandleId{width:41.66666667%}.col-sm-4.windowHandleId{width:33.33333333%}.col-sm-3.windowHandleId{width:25%}.col-sm-2.windowHandleId{width:16.66666667%}.col-sm-1.windowHandleId{width:8.33333333%}.col-sm-pull-12.windowHandleId{right:100%}.col-sm-pull-11.windowHandleId{right:91.66666667%}.col-sm-pull-10.windowHandleId{right:83.33333333%}.col-sm-pull-9.windowHandleId{right:75%}.col-sm-pull-8.windowHandleId{right:66.66666667%}.col-sm-pull-7.windowHandleId{right:58.33333333%}.col-sm-pull-6.windowHandleId{right:50%}.col-sm-pull-5.windowHandleId{right:41.66666667%}.col-sm-pull-4.windowHandleId{right:33.33333333%}.col-sm-pull-3.windowHandleId{right:25%}.col-sm-pull-2.windowHandleId{right:16.66666667%}.col-sm-pull-1.windowHandleId{right:8.33333333%}.col-sm-pull-0.windowHandleId{right:auto}.col-sm-push-12.windowHandleId{left:100%}.col-sm-push-11.windowHandleId{left:91.66666667%}.col-sm-push-10.windowHandleId{left:83.33333333%}.col-sm-push-9.windowHandleId{left:75%}.col-sm-push-8.windowHandleId{left:66.66666667%}.col-sm-push-7.windowHandleId{left:58.33333333%}.col-sm-push-6.windowHandleId{left:50%}.col-sm-push-5.windowHandleId{left:41.66666667%}.col-sm-push-4.windowHandleId{left:33.33333333%}.col-sm-push-3.windowHandleId{left:25%}.col-sm-push-2.windowHandleId{left:16.66666667%}.col-sm-push-1.windowHandleId{left:8.33333333%}.col-sm-push-0.windowHandleId{left:auto}.col-sm-offset-12.windowHandleId{margin-left:100%}.col-sm-offset-11.windowHandleId{margin-left:91.66666667%}.col-sm-offset-10.windowHandleId{margin-left:83.33333333%}.col-sm-offset-9.windowHandleId{margin-left:75%}.col-sm-offset-8.windowHandleId{margin-left:66.66666667%}.col-sm-offset-7.windowHandleId{margin-left:58.33333333%}.col-sm-offset-6.windowHandleId{margin-left:50%}.col-sm-offset-5.windowHandleId{margin-left:41.66666667%}.col-sm-offset-4.windowHandleId{margin-left:33.33333333%}.col-sm-offset-3.windowHandleId{margin-left:25%}.col-sm-offset-2.windowHandleId{margin-left:16.66666667%}.col-sm-offset-1.windowHandleId{margin-left:8.33333333%}.col-sm-offset-0.windowHandleId{margin-left:0}.table-responsive.windowHandleId{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.nav-justified>li.windowHandleId,.nav-tabs.nav-justified>li.windowHandleId{display:table-cell;width:1%}.table-responsive>.table.windowHandleId{margin-bottom:0}.table-responsive>.table-bordered.windowHandleId{border:0}.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>td.windowHandleId,.table-responsive>.table-bordered>tbody>tr:last-child>th.windowHandleId,.table-responsive>.table-bordered>tfoot>tr:last-child>td.windowHandleId,.table-responsive>.table-bordered>tfoot>tr:last-child>th.windowHandleId{border-bottom:0}.form-horizontal.windowHandleId .control-label.windowHandleId{padding-top:7px;margin-bottom:0;text-align:right}.form-horizontal.windowHandleId .form-group-lg.windowHandleId .control-label.windowHandleId{padding-top:11px;font-size:18px}.form-horizontal.windowHandleId .form-group-sm.windowHandleId .control-label.windowHandleId{padding-top:6px;font-size:12px}.navbar-right.windowHandleId .dropdown-menu.windowHandleId{right:0;left:auto}.navbar-right.windowHandleId .dropdown-menu-left.windowHandleId{right:auto;left:0}.nav-tabs.nav-justified>li>a.windowHandleId{margin-bottom:0;border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a.windowHandleId,.nav-tabs.nav-justified>.active>a:focus.windowHandleId,.nav-tabs.nav-justified>.active>a:hover.windowHandleId{border-bottom-color:#fff}.nav-justified>li>a.windowHandleId{margin-bottom:0}.nav-tabs-justified>li>a.windowHandleId{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a.windowHandleId,.nav-tabs-justified>.active>a:focus.windowHandleId,.nav-tabs-justified>.active>a:hover.windowHandleId{border-bottom-color:#fff}.navbar.windowHandleId{border-radius:4px}.navbar-collapse.windowHandleId{width:auto;border-top:0;-webkit-box-shadow:none;box-shadow:none}.navbar-collapse.collapse.windowHandleId{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.navbar-collapse.in.windowHandleId{overflow-y:visible}.navbar-fixed-bottom .navbar-collapse.windowHandleId,.navbar-fixed-top .navbar-collapse.windowHandleId,.navbar-static-top .navbar-collapse.windowHandleId{padding-right:0;padding-left:0}.container-fluid>.navbar-collapse.windowHandleId,.container-fluid>.navbar-header.windowHandleId,.container>.navbar-collapse.windowHandleId,.container>.navbar-header.windowHandleId{margin-right:0;margin-left:0}.navbar-fixed-bottom.windowHandleId,.navbar-fixed-top.windowHandleId,.navbar-static-top.windowHandleId{border-radius:0}.navbar>.container .navbar-brand.windowHandleId,.navbar>.container-fluid .navbar-brand.windowHandleId{margin-left:-15px}.navbar-toggle.windowHandleId{display:none}.navbar-nav.windowHandleId{margin:0}.navbar-nav>li>a.windowHandleId{padding-top:15px;padding-bottom:15px}.navbar-form.windowHandleId .form-group.windowHandleId{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form.windowHandleId .form-control.windowHandleId{display:inline-block;width:auto;vertical-align:middle}.navbar-form.windowHandleId .form-control-static.windowHandleId{display:inline-block}.navbar-form.windowHandleId .input-group.windowHandleId{display:inline-table;vertical-align:middle}.navbar-form.windowHandleId .input-group.windowHandleId .form-control.windowHandleId,.navbar-form.windowHandleId .input-group.windowHandleId .input-group-addon.windowHandleId,.navbar-form.windowHandleId .input-group.windowHandleId .input-group-btn.windowHandleId{width:auto}.navbar-form.windowHandleId .input-group>.form-control.windowHandleId{width:100%}.navbar-form.windowHandleId .control-label.windowHandleId{margin-bottom:0;vertical-align:middle}.navbar-form.windowHandleId .checkbox.windowHandleId,.navbar-form.windowHandleId .radio.windowHandleId{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form.windowHandleId .checkbox.windowHandleId label.windowHandleId,.navbar-form.windowHandleId .radio.windowHandleId label.windowHandleId{padding-left:0}.navbar-form .checkbox input[type=checkbox].windowHandleId,.navbar-form .radio input[type=radio].windowHandleId{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback.windowHandleId{top:0}.navbar-form.windowHandleId{width:auto;padding-top:0;padding-bottom:0;margin-right:0;margin-left:0;border:0;-webkit-box-shadow:none;box-shadow:none}.navbar-text.windowHandleId{margin-right:15px;margin-left:15px}.navbar-left.windowHandleId{float:left!important}.navbar-right.windowHandleId{float:right!important;margin-right:-15px}.navbar-right~.navbar-right.windowHandleId{margin-right:0}.jumbotron.windowHandleId{padding-top:48px;padding-bottom:48px}.container .jumbotron.windowHandleId,.container-fluid .jumbotron.windowHandleId{padding-right:60px;padding-left:60px}.jumbotron .h1.windowHandleId,.jumbotron h1.windowHandleId{font-size:63px}.modal-dialog.windowHandleId{width:600px;margin:30px auto}.modal-content.windowHandleId{-webkit-box-shadow:0 5px 15px rgba(0windowHandleId,0windowHandleId,0windowHandleId,.5);box-shadow:0 5px 15px rgba(0windowHandleId,0windowHandleId,0windowHandleId,.5)}.modal-sm.windowHandleId{width:300px}.carousel-control.windowHandleId .glyphicon-chevron-left.windowHandleId,.carousel-control.windowHandleId .glyphicon-chevron-right.windowHandleId,.carousel-control.windowHandleId .icon-next.windowHandleId,.carousel-control.windowHandleId .icon-prev.windowHandleId{width:30px;height:30px;margin-top:-10px;font-size:30px}.carousel-control.windowHandleId .glyphicon-chevron-left.windowHandleId,.carousel-control.windowHandleId .icon-prev.windowHandleId{margin-left:-10px}.carousel-control.windowHandleId .glyphicon-chevron-right.windowHandleId,.carousel-control.windowHandleId .icon-next.windowHandleId{margin-right:-10px}.carousel-caption.windowHandleId{right:20%;left:20%;padding-bottom:30px}.carousel-indicators.windowHandleId{bottom:20px}";
		internal const string Min_Width992 = @".container.windowHandleId{width:970px}.col-md-1.windowHandleId,.col-md-10.windowHandleId,.col-md-11.windowHandleId,.col-md-12.windowHandleId,.col-md-2.windowHandleId,.col-md-3.windowHandleId,.col-md-4.windowHandleId,.col-md-5.windowHandleId,.col-md-6.windowHandleId,.col-md-7.windowHandleId,.col-md-8.windowHandleId,.col-md-9.windowHandleId{float:left}.col-md-12.windowHandleId{width:100%}.col-md-11.windowHandleId{width:91.66666667%}.col-md-10.windowHandleId{width:83.33333333%}.col-md-9.windowHandleId{width:75%}.col-md-8.windowHandleId{width:66.66666667%}.col-md-7.windowHandleId{width:58.33333333%}.col-md-6.windowHandleId{width:50%}.col-md-5.windowHandleId{width:41.66666667%}.col-md-4.windowHandleId{width:33.33333333%}.col-md-3.windowHandleId{width:25%}.col-md-2.windowHandleId{width:16.66666667%}.col-md-1.windowHandleId{width:8.33333333%}.col-md-pull-12.windowHandleId{right:100%}.col-md-pull-11.windowHandleId{right:91.66666667%}.col-md-pull-10.windowHandleId{right:83.33333333%}.col-md-pull-9.windowHandleId{right:75%}.col-md-pull-8.windowHandleId{right:66.66666667%}.col-md-pull-7.windowHandleId{right:58.33333333%}.col-md-pull-6.windowHandleId{right:50%}.col-md-pull-5.windowHandleId{right:41.66666667%}.col-md-pull-4.windowHandleId{right:33.33333333%}.col-md-pull-3.windowHandleId{right:25%}.col-md-pull-2.windowHandleId{right:16.66666667%}.col-md-pull-1.windowHandleId{right:8.33333333%}.col-md-pull-0.windowHandleId{right:auto}.col-md-push-12.windowHandleId{left:100%}.col-md-push-11.windowHandleId{left:91.66666667%}.col-md-push-10.windowHandleId{left:83.33333333%}.col-md-push-9.windowHandleId{left:75%}.col-md-push-8.windowHandleId{left:66.66666667%}.col-md-push-7.windowHandleId{left:58.33333333%}.col-md-push-6.windowHandleId{left:50%}.col-md-push-5.windowHandleId{left:41.66666667%}.col-md-push-4.windowHandleId{left:33.33333333%}.col-md-push-3.windowHandleId{left:25%}.col-md-push-2.windowHandleId{left:16.66666667%}.col-md-push-1.windowHandleId{left:8.33333333%}.col-md-push-0.windowHandleId{left:auto}.col-md-offset-12.windowHandleId{margin-left:100%}.col-md-offset-11.windowHandleId{margin-left:91.66666667%}.col-md-offset-10.windowHandleId{margin-left:83.33333333%}.col-md-offset-9.windowHandleId{margin-left:75%}.col-md-offset-8.windowHandleId{margin-left:66.66666667%}.col-md-offset-7.windowHandleId{margin-left:58.33333333%}.col-md-offset-6.windowHandleId{margin-left:50%}.col-md-offset-5.windowHandleId{margin-left:41.66666667%}.col-md-offset-4.windowHandleId{margin-left:33.33333333%}.col-md-offset-3.windowHandleId{margin-left:25%}.col-md-offset-2.windowHandleId{margin-left:16.66666667%}.col-md-offset-1.windowHandleId{margin-left:8.33333333%}.col-md-offset-0.windowHandleId{margin-left:0}.modal-lg.windowHandleId{width:900px}";
		internal const string Min_Width1200 = @".container.windowHandleId{width:1170px}.col-lg-1.windowHandleId,.col-lg-10.windowHandleId,.col-lg-11.windowHandleId,.col-lg-12.windowHandleId,.col-lg-2.windowHandleId,.col-lg-3.windowHandleId,.col-lg-4.windowHandleId,.col-lg-5.windowHandleId,.col-lg-6.windowHandleId,.col-lg-7.windowHandleId,.col-lg-8.windowHandleId,.col-lg-9.windowHandleId{float:left}.col-lg-12.windowHandleId{width:100%}.col-lg-11.windowHandleId{width:91.66666667%}.col-lg-10.windowHandleId{width:83.33333333%}.col-lg-9.windowHandleId{width:75%}.col-lg-8.windowHandleId{width:66.66666667%}.col-lg-7.windowHandleId{width:58.33333333%}.col-lg-6.windowHandleId{width:50%}.col-lg-5.windowHandleId{width:41.66666667%}.col-lg-4.windowHandleId{width:33.33333333%}.col-lg-3.windowHandleId{width:25%}.col-lg-2.windowHandleId{width:16.66666667%}.col-lg-1.windowHandleId{width:8.33333333%}.col-lg-pull-12.windowHandleId{right:100%}.col-lg-pull-11.windowHandleId{right:91.66666667%}.col-lg-pull-10.windowHandleId{right:83.33333333%}.col-lg-pull-9.windowHandleId{right:75%}.col-lg-pull-8.windowHandleId{right:66.66666667%}.col-lg-pull-7.windowHandleId{right:58.33333333%}.col-lg-pull-6.windowHandleId{right:50%}.col-lg-pull-5.windowHandleId{right:41.66666667%}.col-lg-pull-4.windowHandleId{right:33.33333333%}.col-lg-pull-3.windowHandleId{right:25%}.col-lg-pull-2.windowHandleId{right:16.66666667%}.col-lg-pull-1.windowHandleId{right:8.33333333%}.col-lg-pull-0.windowHandleId{right:auto}.col-lg-push-12.windowHandleId{left:100%}.col-lg-push-11.windowHandleId{left:91.66666667%}.col-lg-push-10.windowHandleId{left:83.33333333%}.col-lg-push-9.windowHandleId{left:75%}.col-lg-push-8.windowHandleId{left:66.66666667%}.col-lg-push-7.windowHandleId{left:58.33333333%}.col-lg-push-6.windowHandleId{left:50%}.col-lg-push-5.windowHandleId{left:41.66666667%}.col-lg-push-4.windowHandleId{left:33.33333333%}.col-lg-push-3.windowHandleId{left:25%}.col-lg-push-2.windowHandleId{left:16.66666667%}.col-lg-push-1.windowHandleId{left:8.33333333%}.col-lg-push-0.windowHandleId{left:auto}.col-lg-offset-12.windowHandleId{margin-left:100%}.col-lg-offset-11.windowHandleId{margin-left:91.66666667%}.col-lg-offset-10.windowHandleId{margin-left:83.33333333%}.col-lg-offset-9.windowHandleId{margin-left:75%}.col-lg-offset-8.windowHandleId{margin-left:66.66666667%}.col-lg-offset-7.windowHandleId{margin-left:58.33333333%}.col-lg-offset-6.windowHandleId{margin-left:50%}.col-lg-offset-5.windowHandleId{margin-left:41.66666667%}.col-lg-offset-4.windowHandleId{margin-left:33.33333333%}.col-lg-offset-3.windowHandleId{margin-left:25%}.col-lg-offset-2.windowHandleId{margin-left:16.66666667%}.col-lg-offset-1.windowHandleId{margin-left:8.33333333%}.col-lg-offset-0.windowHandleId{margin-left:0}.visible-lg.windowHandleId{display:block!important}table.visible-lg.windowHandleId{display:table!important}tr.visible-lg.windowHandleId{display:table-row!important}td.visible-lg,th.visible-lg.windowHandleId{display:table-cell!important}.visible-lg-block.windowHandleId{display:block!important}.visible-lg-inline.windowHandleId{display:inline!important}.visible-lg-inline-block.windowHandleId{display:inline-block!important}.hidden-lg.windowHandleId{display:none!important}";
		internal const string Min_Width480AndLandscape = ".navbar-fixed-bottom.windowHandleId .navbar-collapse.windowHandleId,.navbar-fixed-top.windowHandleId .navbar-collapse.windowHandleId{max-height:200px}";
		internal const string Max_Width767 = @".navbar-nav .open .dropdown-menu.windowHandleId{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;-webkit-box-shadow:none;box-shadow:none}.navbar-nav .open .dropdown-menu .dropdown-header,.navbar-nav .open .dropdown-menu>li>a.windowHandleId{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a.windowHandleId{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:focus,.navbar-nav .open .dropdown-menu>li>a:hover.windowHandleId{background-image:none}.navbar-form .form-group.windowHandleId{margin-bottom:5px}.navbar-form .form-group:last-child.windowHandleId{margin-bottom:0}.navbar-default .navbar-nav .open .dropdown-menu>li>a.windowHandleId{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover.windowHandleId{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover.windowHandleId{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover.windowHandleId{color:#ccc;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header.windowHandleId{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider.windowHandleId{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a.windowHandleId{color:#9d9d9d}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover.windowHandleId{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover.windowHandleId{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover.windowHandleId{color:#444;background-color:transparent}.visible-xs.windowHandleId{display:block!important}table.visible-xs.windowHandleId{display:table!important}tr.visible-xs.windowHandleId{display:table-row!important}td.visible-xs,th.visible-xs.windowHandleId{display:table-cell!important}.visible-xs-block.windowHandleId{display:block!important}.visible-xs-inline.windowHandleId{display:inline!important}.visible-xs-inline-block.windowHandleId{display:inline-block!important}.hidden-xs.windowHandleId{display:none!important}";
		internal const string Min_Width768AndMax_Width991 = @".visible-sm.windowHandleId{display:block!important}table.visible-sm.windowHandleId{display:table!important}tr.visible-sm.windowHandleId{display:table-row!important}td.visible-sm,th.visible-sm.windowHandleId{display:table-cell!important}.visible-sm-block.windowHandleId{display:block!important}.visible-sm-inline.windowHandleId{display:inline!important}.visible-sm-inline-block.windowHandleId{display:inline-block!important}.visible-md.windowHandleId{display:block!important}table.visible-md.windowHandleId{display:table!important}tr.visible-md.windowHandleId{display:table-row!important}td.visible-md,th.visible-md.windowHandleId{display:table-cell!important}.visible-md-block.windowHandleId{display:block!important}.visible-md-inline.windowHandleId{display:inline!important}.visible-md-inline-block.windowHandleId{display:inline-block!important}.hidden-md,.hidden-sm.windowHandleId{display:none!important}";

		private static bool hasSetupMetaTags = false;
		private HTMLStyleElement privateSyle;
		private StyleStates PreviouStates = new StyleStates();
		private HTMLDivElement prevBody = null;		

		protected static int bootWindowHandles = 0;
		protected string assignedBootWindow = string.Empty;
		private string responsiveClass;

		public string GetBootHandle()
		{
			return assignedBootWindow;
		}

		public static void SetupMetaTags()
		{
			if(hasSetupMetaTags)
				return;

			hasSetupMetaTags = true;
			Document.Head.AppendChild(new HTMLMetaElement() { Name = "viewport", Content = "width=device-width, initial-scale=1" });			
		}

		public static int CreateWindowHandle()
		{
			return (bootWindowHandles++);
		}

		public BootWindow(int handle, params Union<string, Control, HTMLElement>[] typos) : this(typos)
		{			
			assignedBootWindow = handle.ToString();			
		}

		public bool Fluid
		{
			get { return GetClassTrue("container-fluid"); }
			set
			{
				SetClassTrue("container", !value);
				SetClassTrue("container-fluid", value);
			}
		}

		public bool GetClassTrue(string classStr)
		{
			return Body.ClassList.Contains(classStr);
		}
		public void SetClassTrue(string classStr, bool value)
		{
			if(value == GetClassTrue(classStr))
			{
				return;
			}
			if(value)
				Body.ClassList.Add(classStr);
			else
				Body.ClassList.Remove(classStr);
		}

		private void makeChangesForNav(Navbar bar)
		{
			if(bar == null)
				return;
			switch(bar.NavbarLocation)
			{				
				//case NavBarLocation.Fixed_Top:
				//	this.BodyStyle.PaddingTop = "70px";
				//	break;
				//case NavBarLocation.Fixed_Bottom:
				//	this.BodyStyle.PaddingBottom = "70px";
				//	break;
				case NavBarLocation.Static_Top:
					bar.Style.Top = "0";
					bar.Style.Left = "0";

					var div = new BootWidget();
					div.Style.Position = Position.Absolute;
					div.Style.OverflowY = Overflow.Auto;					
					div.Size = new Vector2("100%", "calc(100% - 50px)");
					div.Location = new Vector2(0, 50);
					
					this.prevBody.InsertBefore(div, this.Body);

					div.Content.AppendChild(this.Body);

					this.prevBody.InsertBefore(bar, div);
					
					return;									
			}
			this.prevBody.InsertBefore(bar, this.Body);
		}

		public BootWindow(params Union<string, Control, HTMLElement>[] typos) : base("")
		{			
			if(assignedBootWindow == string.Empty)
				assignedBootWindow = CreateWindowHandle().ToString();

			responsiveClass = GetResponsiveClass();
			
			privateSyle = new HTMLStyleElement();
			this.Body.AppendChild(privateSyle);

			var container = (new BootStyleWidget("container"));          // fluid

			this.BackColor = Color.White;
			this.Body.AppendChild(container.Content);
			this.BodyStyle.OverflowY = Overflow.Auto;
			prevBody = this.Body;

			this.Body = (HTMLDivElement)container.Content;
			this.BodyStyle.Padding = "0";

			SetCalcSize();

			if(typos != null)
			{
				int length = typos.Length;
				for(int i = 0; i < length; i++)
				{
					if(typos[i].Is<string>())
						this.Body.AppendChild(Document.CreateTextNode((string)typos[i]));
					else if(typos[i].Is<Control>())
					{
						if(typos[i].Is<Navbar>())
						{							
							makeChangesForNav((Navbar)typos[i]);
						}
						else
						{
							this.Body.AppendChild((Control)typos[i]);
						}						
					}
					else if(typos[i].Is<HTMLElement>())
					{
						if(((HTMLElement)typos[i]).TagName.ToUpper() == "NAV")
						{							
							makeChangesForNav(BootWidget.CastElement<Navbar>((HTMLElement)typos[i]));
						}
						else
						{
							this.Body.AppendChild((HTMLElement)typos[i]);
						}
					}
						
				}
			}		
		}

		protected void SetCalcSize()
		{
		//	this.Body.SetSize("calc(100% - 28px)", this.Body.Style.Height);
		}

		public static void HideNavigation()
		{
			var x = new Anchor();
			x.SetAttribute("data-toggle", "collapse");
			x.SetAttribute("data-target", ".navbar-collapse.in");
			Document.Body.AppendChild(x);
			x.Content.Click();
			Document.Body.RemoveChild(x);
		}

		protected override void OnGotFocus()
		{
			HideNavigation();
			base.OnGotFocus();
			CalcSizeOnChange();			
		}

		private Action<Event> backButtonEvent = null;

		protected override void OnShowing()
		{
			base.OnShowing();

			AssignHandles();

			if(Browser.IsPhone || Browser.IsTablet)
			{
				this.Windowstate = WindowState.Maximized;
				this.ShowMaximize = false;
				this.ShowMinimize = false;
				this.AllowSizeChange = false;
				this.AllowMoveChange = false;
				if(Browser.IsAndroid)
				{
					backButtonEvent = (ev) =>
					{
						this.Close();
						Document.RemoveEventListener("backbutton", backButtonEvent);
					};

					Document.AddEventListener("backbutton", backButtonEvent);
				}				
			}
		}		

		

		/// <summary>
		/// Multi Form Responsive
		/// </summary>
		/// <returns></returns>
		public BootWindow AssignHandles()
		{
			AssignHandles(Content, Content.ChildElementCount);
			return this;
		}

		/// <summary>
		/// Multi Form Responsive
		/// </summary>
		/// <param name="parent"></param>
		/// <param name="length"></param>
		public void AssignHandles(HTMLElement parent, int length, bool IncludeSelf = false)
		{			
			if(IncludeSelf)
			{				
				assignWindowHandle(parent);
			}

			for(int i = 0; i < length; i++)
			{
				var child = parent.Children[i];
				var l = child.ChildElementCount;
				if(l > 0)
				{
					AssignHandles(child, l, true);
				}else
				{
					assignWindowHandle(child);					
				}
			}			
		}

		private void assignWindowHandle(HTMLElement element)
		{
			var x = element.GetAttribute("bsh");
			if(x != assignedBootWindow)
			{				
				element.SetAttribute("bsh", assignedBootWindow);

				if(!element.ClassList.Contains(responsiveClass))
					element.ClassList.Add(responsiveClass);

				var uq = element.GetAttribute("ua");
				if(!string.IsNullOrWhiteSpace(uq))
				{
					uq = uq.Trim();
					var uqItem = uq.Split(",");
					var length = uqItem.Length;
					for(int i = 0; i < length; i++)
					{
						if(!string.IsNullOrWhiteSpace(uqItem[i]))
						{
							element.SetAttribute(uqItem[i], element.GetAttribute(uqItem[i]) + "-w" + assignedBootWindow);
						}
					}					
				}
			}
		}

		private class StyleStates
		{
			public bool Width480Landscape = false;
			public bool WidthLess767 = false;
			public bool WidthGreater768Less991 = false;
			public bool WidthGreater768 = false;
			public bool WidthGreater992 = false;
			public bool WidthGreater1200 = false;

			public bool Equals(StyleStates state)
			{
				return (Width480Landscape == state.Width480Landscape &&
					WidthLess767 && state.WidthLess767 &&
					WidthGreater768Less991 && state.WidthGreater768Less991 &&
					WidthGreater768 && state.WidthGreater768 &&
					WidthGreater992 && state.WidthGreater992 &&
					WidthGreater1200 && state.WidthGreater1200);
			}
		}

		private void CalcSizeOnChange()
		{
			var states = new StyleStates();

			var styleBuilder = new StringBuilder();
			var clientRect = this.prevBody.GetBoundingClientRect();

			if(clientRect.Width >= 480 && Window.InnerWidth > Window.InnerHeight)
			{
				styleBuilder.Append(Min_Width480AndLandscape);
				states.Width480Landscape = true;
			}
			if(clientRect.Width <= 767)
			{
				styleBuilder.Append(Max_Width767);
				states.WidthLess767 = true;
			}
			if(clientRect.Width >= 768 && clientRect.Width <= 991)
			{
				styleBuilder.Append(Min_Width768AndMax_Width991);
				states.WidthGreater768Less991 = true;
			}
			if(clientRect.Width >= 768)
			{
				styleBuilder.Append(Min_Width768);				
				states.WidthGreater768 = true;
			}
			if(clientRect.Width >= 992)
			{
				styleBuilder.Append(Min_Width992);				
				states.WidthGreater992 = true;
			}
			if(clientRect.Width >= 1200)
			{
				styleBuilder.Append(Min_Width1200);				
				states.WidthGreater1200 = true;
			}
			
			if(!states.Equals(PreviouStates))
			{				
				privateSyle.InnerHTML = styleBuilder.ToString().Replace("windowHandleId", responsiveClass);
				PreviouStates = states;

				HideNavigation();
			}
		}

		public string GetResponsiveClass()
		{
			return "whi" + assignedBootWindow;
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
