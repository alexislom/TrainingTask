using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RestAPI.Models;

namespace RestAPI.Controllers
{
    /// <summary>
    /// Controller for the books REST web service.
    /// </summary>
    public class BooksController : ApiController
    {
        private static List<Book> _books = new List<Book>();

        private static int bookId = 0;

        static BooksController()
        {
            _books = new List<Book>{
                new Book() { id = 1, title = "Book1", description = "Desc1" },
                new Book() { id = 2, title = "Book2", description = "Desc2" },
                new Book() { id = 3, title = "Book3", description = "Desc3" }
            };
        }

        /// <summary>
        /// Returns the list of books.
        /// </summary>        
        [HttpGet]
        public IEnumerable<Book> GetBooks()
        {
            return _books;
        }

        /// <summary>
        /// Add book to the collection
        /// </summary>
        /// <returns>Returns the result of the operation.</returns>
        /// <remarks>
        /// If operation was succesful returns <see cref="HttpStatusCode.OK"/>, otherwise <see cref="HttpStatusCode.ExpectationFailed"/>.
        /// </remarks>
        [HttpPut]
        public HttpResponseMessage AddBook(Book book)
        {
            if (ModelState.IsValid)
            {
                book.id = bookId++;

                _books.Add(book);

                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            return new HttpResponseMessage(HttpStatusCode.ExpectationFailed);
        }

        //// POST api/values
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/values/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //public void Delete(int id)
        //{
        //}
    }
}
