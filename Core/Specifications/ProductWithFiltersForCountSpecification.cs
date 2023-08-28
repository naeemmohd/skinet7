using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Specifications
{
	public class ProductWithFiltersForCountSpecification : BaseSpecification<Product>
	{
		public ProductWithFiltersForCountSpecification(ProductSpecsParams productSpecsParams)
		//for filtering
		: base(x=>
			(!productSpecsParams.BrandId.HasValue || x.ProductBrandId == productSpecsParams.BrandId) &&
			(!productSpecsParams.TypeId.HasValue || x.ProductTypeId == productSpecsParams.TypeId)
		)
		{
		}
	}
}