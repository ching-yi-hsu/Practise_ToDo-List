﻿using System.Web;
using System.Web.Mvc;

namespace Practise_ToDo_List
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
