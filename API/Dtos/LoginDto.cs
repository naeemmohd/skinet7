using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
	public class LoginDto
	{
		[Required]
		[EmailAddress]
		public string Email { get; set; }
		[Required]
		// Reference - https://regexlib.com/RETester.aspx?regexp_id=1111
		[RegularExpression("(?=^.{6,10}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\\s).*$", 
		ErrorMessage ="Password must have 1 Uppercase, 1 lowercase, 1 number, 1 non-alphanumeric and atleast 6 character long.")]
		public string Password { get; set; }
	}
}