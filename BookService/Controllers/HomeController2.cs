using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BookService.Controllers
{
    public class HomeController2 : Controller
    {
        public ActionResult Index2()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
