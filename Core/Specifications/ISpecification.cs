using System.Linq.Expressions;

namespace Core.Specifications
{
	public interface ISpecification<T>
	{
		Expression<Func<T, bool>> Criteria { get; }
		List<Expression<Func<T, object>>> Includes { get; }

		//for sorting and filtering
		Expression<Func<T, object>> OrderBy { get; }
		Expression<Func<T, object>> OrderByDescending { get; }

		//for pagination
		int Take { get; }
		int Skip { get; }

		bool IsPagingEnabled { get; }

	}
}