using AutoMapper;
using API.Dtos;
using Core.Entities;
using Core.Identity;

namespace API.Helpers
{
	public class MappingProfiles : Profile
	{
		public MappingProfiles()
		{
			CreateMap<Product, ProductToReturnDto>()
			.ForMember(d => d.ProductBrand, o => o.MapFrom(d => d.ProductBrand.Name))
			.ForMember(d => d.ProductType, o => o.MapFrom(d => d.ProductType.Name))
			.ForMember(d => d.PictureUrl, o => o.MapFrom<ProductUrlResolver>());
			// create map for Address and AddressDto with a interchangable Reverse map functionality
			CreateMap<Address, AddressDto>().ReverseMap();
			CreateMap<CustomerBasketDto, CustomerBasket>();
			CreateMap<BaskeItemDto, BasketItem>();
		}
	}
}