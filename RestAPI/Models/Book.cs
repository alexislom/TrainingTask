using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RestAPI.Models
{
    /// <summary>
    /// Represents book instance.
    /// </summary>
    public class Book
    {
        public int id { get; set; }

        [Required]
        public string title { get; set; }

        [Required]
        public string description { get; set; }
    }
}