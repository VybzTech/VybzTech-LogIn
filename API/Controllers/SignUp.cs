using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Mvc;
//using System.Data.SqlClient;

namespace API.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class SignUp : ControllerBase
    {
        private readonly IConfiguration _config;

        public SignUp(IConfiguration configuration)
        {
            _config = configuration;
        }

        [HttpPost]
        [Route("")]
        public string signUp(Registration registration)
        {
            SqlConnection con = new SqlConnection(_config.GetConnectionString("VybzTech_LogIn")?.ToString());
            SqlCommand cmd = new SqlCommand("INSERT INTO SignUpDB(UserName,Password,Email,isActive) VALUES('" + registration.UserName + "','" + registration.Password + "','" + registration.Email + "','" + registration.isActive + "' )", con);
            if (con.State == ConnectionState.Closed) con.Open();

            int? i = cmd?.ExecuteNonQuery();
            con.Close();
            return i > 0 ? "Data Inserted" : "Error";
        }

        [HttpPost]
        [Route("login")]
        public string logIn(Registration registration)
        {
            SqlConnection con = new SqlConnection(_config.GetConnectionString("VybzTech_LogIn")?.ToString());
            SqlDataAdapter adapter = new SqlDataAdapter("SELECT * FROM SignUpDB WHERE Email = '" + registration.Email + "' AND Password = '" + registration.Password + "' AND IsActive = 1", con);
            DataTable data = new DataTable();
            adapter.Fill(data);
            if (data.Rows.Count > 0) { return "Successful: Valid User"; } else { return "Error: Invalid User"; }
        }
    }
}