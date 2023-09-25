using Core.Entities;
using Core.Specifications;

namespace Core.Interfaces
{
	public interface IGenericRepository<T> where T : BaseEntity
	{
		Task<T> GetByIdAsync(int id);
		Task<IReadOnlyList<T>> ListAllAsync();

		Task<T> GetEntityWithSpec(ISpecification<T> spec);

		Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);
		Task<int> CountAsync(ISpecification<T> spec);
		
		// Add, Update and Delete non-Async methods for use by UnitOfWork
		void Add(T entity);
		void Update(T entity);
		void Delete(T entity);
		
	}
}