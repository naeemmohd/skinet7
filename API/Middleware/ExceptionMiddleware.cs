using System.Net;
using System.Text.Json;
using API.Errors;

namespace API.Middleware
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;
        private readonly IHostEnvironment _env;
        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, 
        IHostEnvironment env)
        {   
            _next = next;
            _logger = logger;
            _env = env;

        }
        public async Task InvokeAsync(HttpContext context)
        {
            try{
                await _next(context);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                context.Response.ContentType = "application/json";
                var internalServerError = (int)HttpStatusCode.InternalServerError;
                context.Response.StatusCode = internalServerError;   

                var response = _env.IsDevelopment()
                ? new ApiException(internalServerError, ex.Message, ex.StackTrace.ToString())
                : new ApiException(internalServerError);

                var options = new JsonSerializerOptions{PropertyNamingPolicy= JsonNamingPolicy.CamelCase};

                await context.Response.WriteAsync(JsonSerializer.Serialize(response, options));
            }
        }
    }
}