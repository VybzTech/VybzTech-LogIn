using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Login
    {
        public string? Password { get; set; }
        public string? Email { get; set; }
        public int isActive { get; set; }
    }
}