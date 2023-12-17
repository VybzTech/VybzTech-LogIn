using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Registration : Login
    {
        public int id { get; set; }
        public string? UserName { get; set; }
        
    }
}