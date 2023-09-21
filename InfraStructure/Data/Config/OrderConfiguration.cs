using Core.Entities.OrderAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
	public class OrderConfiguration : IEntityTypeConfiguration<Order>
	{
		public void Configure(EntityTypeBuilder<Order> builder)
		{
			// OwnsBy - Configures a relationship where the target entity is owned by (or part of) this entit
			builder.OwnsOne(o => o.ShipToAddress, a =>
			{
				a.WithOwner();
			});
			builder.Navigation(a => a.ShipToAddress).IsRequired();
			builder.Property(s => s.Status)
				.HasConversion(
					o => o.ToString(),
					o => (OrderStatus)Enum.Parse(typeof(OrderStatus), o)
				);
			// HasMany - Configures a relationship where this entity type has a collection that contains instances of the other type in the relationship.
			builder.HasMany(o => o.OrderItems).WithOne().OnDelete(DeleteBehavior.Cascade);
		}
	}
}