using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;

namespace InfraStructure.Services
{
    public class OrderService : IOrderService
	{
		private readonly IGenericRepository<Order> _orderRepo;
		private readonly IGenericRepository<DeliveryMethod> _dmRepo;
		private readonly IGenericRepository<Product> _productRepo;
		private readonly IBasketRepository _basketRepo;

		public OrderService(IGenericRepository<Order> orderRepo, 
			IGenericRepository<DeliveryMethod> dmRepo,
			IGenericRepository<Product> productRepo, 
			IBasketRepository basketRepo)
		{
			_orderRepo = orderRepo;
			_dmRepo = dmRepo;
			_productRepo = productRepo;
			_basketRepo = basketRepo;
		}

		public async Task<Order> CreateOrderAsync(string buyerEmail, int delieveryMethodId, string basketId, Address shippingAddress)
		{
			// get items from basket
			var basket = await _basketRepo.GetBasketAsync(basketId);
			
			// get products from product repo
			var items = new List<OrderItem>();
			foreach (var item in basket.Items)
			{
				var productItem = await _productRepo.GetByIdAsync(item.Id);
				var itemOrdered = new ProductItemOrdered(productItem.Id, productItem.Name, productItem.PictureUrl);
				var orderItem = new OrderItem(itemOrdered, productItem.Price, item.Quantity);
				items.Add(orderItem);
			}

			// get delivery methods from repo
			var deliveryMethod = await _dmRepo.GetByIdAsync(delieveryMethodId);
			
			// calculate subtotals
			var subtotal = items.Sum(item => item.Price * item.Quantity);

			// create order
			var order = new Order(items, buyerEmail, shippingAddress, deliveryMethod, subtotal);
			
			// save in database - TODO

			// return the order
			return order;
		}

		Task<IReadOnlyList<DeliveryMethod>> IOrderService.GetDeliveryMethodsAsync()
		{
			throw new NotImplementedException();
		}

		Task<Order> IOrderService.GetOrderByIdAsync(int id, string buyerEmail)
		{
			throw new NotImplementedException();
		}

		Task<IReadOnlyList<Order>> IOrderService.GetOrdersForUserAsync(string buyerEmail)
		{
			throw new NotImplementedException();
		}
	}
}