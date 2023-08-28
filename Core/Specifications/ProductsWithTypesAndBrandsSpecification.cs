using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications
{
	public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>
	{
		public ProductsWithTypesAndBrandsSpecification(ProductSpecsParams productSpecsParams)
		
		//for filtering
		: base(x=>
			(string.IsNullOrEmpty(productSpecsParams.Search) || x.Name.ToLower().Contains(productSpecsParams.Search)) &&
			(!productSpecsParams.BrandId.HasValue || x.ProductBrandId == productSpecsParams.BrandId) &&
			(!productSpecsParams.TypeId.HasValue || x.ProductTypeId == productSpecsParams.TypeId)
		)
		{
			AddInclude(x => x.ProductType);
			AddInclude(x => x.ProductBrand);
			
			//for default sort 
			AddOrderBy(x => x.Name);
			
			// for pagination 
			ApplyPaging(productSpecsParams.PageSize * (productSpecsParams.PageIndex - 1), productSpecsParams.PageSize);
			
			//for conditional sorting
			if(!string.IsNullOrEmpty(productSpecsParams.Sort))
			{
				switch(productSpecsParams.Sort)
				{
					case "priceAsc":
						AddOrderBy(p => p.Price);
						break;
					case "priceDesc":
						AddOrderByDescending(p => p.Price);
						break;
					default:
						AddOrderBy(n => n.Name);
						break;
				}
			}
		}

		public ProductsWithTypesAndBrandsSpecification(int id ) : base(x => x.Id == id)
		{
			AddInclude(x => x.ProductType);
			AddInclude(x => x.ProductBrand);
		}
	}
}