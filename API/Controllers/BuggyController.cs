using API.Errors;
using InfraStructure.Data;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        public StoreContext _storeContext { get; }
        public BuggyController(StoreContext storeContext)
        {
            _storeContext = storeContext;
        }

        [HttpGet("notfound")]
        public ActionResult GetNotFoundRequest()
        {
            var thing = _storeContext.Products.Find(42);
            if(thing == null){
                return NotFound(new ApiResponse(404));            }
            return Ok();
        }

        [HttpGet("servererror")]
        public ActionResult GetServerError()
        {
            var thing = _storeContext.Products.Find(42);
            var thingToReturn = thing.ToString();
            return Ok();
        }

        [HttpGet("badrequest")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ApiResponse(400));
        }

        [HttpGet("badrequest/{id}")]
        public ActionResult GetBadRequest(int id)
        {
            return Ok();
        }
    }
}