using Core.Entities.OrderAggregate;

namespace Core.Interfaces
{
    public interface IOrderService
    {
        public Task<Order> CreateOrderAsync(string buyerEmail, int delieveryMethodId, string basketId, Address shippingAddress);
        public Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail);
        public Task<Order> GetOrderByIdAsync(int id, string buyerEmail);
        public Task<IReadOnlyList<DeliveryMethod>> GetDeliveryMethodsAsync();
    }
}