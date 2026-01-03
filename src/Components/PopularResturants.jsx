import React from "react";

const popularRestaurants = [
  {
    id: 1,
    name: "Crunchy Bites",
    location: "Khulna, Bangladesh",
    rating: 4.8,
    description: "Famous for its crispy fried chicken wings and delicious dipping sauces.",
  },
  {
    id: 2,
    name: "Steak House 360",
    location: "Dhaka, Bangladesh",
    rating: 5.0,
    description: "Premium beef steaks cooked to perfection, paired with creamy mashed potatoes.",
  },
  {
    id: 3,
    name: "La Pizzeria",
    location: "Chittagong, Bangladesh",
    rating: 4.8,
    description: "Cheese burst pizzas with fresh toppings, baked to golden perfection.",
  },
  {
    id: 4,
    name: "Sakura Sushi",
    location: "Dhaka, Bangladesh",
    rating: 4.9,
    description: "Fresh sushi rolls, beautifully presented, a delight for sushi lovers.",
  },
  {
    id: 5,
    name: "Sweet Haven",
    location: "Rajshahi, Bangladesh",
    rating: 4.8,
    description: "Delectable desserts including molten chocolate lava cakes and pastries.",
  },
  {
    id: 6,
    name: "Spice Garden",
    location: "Khulna, Bangladesh",
    rating: 4.9,
    description: "Famous for creamy, flavorful curries and aromatic spices.",
  },
];

const PopularRestaurantsTable = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-base-content text-center mb-10 animate__animated animate__fadeInDown">
          Popular Restaurants
        </h2>

        {/* Table for large screens */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full bg-base-100 border border-base-300 rounded-lg shadow-sm">
            <thead className="bg-primary text-primary-content">
              <tr>
                <th className="py-3 px-6 text-left">Restaurant Name</th>
                <th className="py-3 px-6 text-left">Location</th>
                <th className="py-3 px-6 text-left">Rating</th>
                <th className="py-3 px-6 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {popularRestaurants.map((restaurant, index) => (
                <tr
                  key={restaurant.id}
                  className={`transition hover:shadow-lg hover:bg-base-100 ${
                    index % 2 === 0 ? "bg-base-200" : "bg-base-100"
                  } animate__animated animate__fadeInUp`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <td className="py-3 px-6 font-medium">{restaurant.name}</td>
                  <td className="py-3 px-6">{restaurant.location}</td>
                  <td className="py-3 px-6 text-yellow-500 font-semibold">
                    ⭐ {restaurant.rating}
                  </td>
                  <td className="py-3 px-6">{restaurant.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card layout for small screens */}
        <div className="md:hidden grid gap-6">
          {popularRestaurants.map((restaurant, index) => (
            <div
              key={restaurant.id}
              className="bg-base-100 p-4 rounded-xl shadow hover:shadow-lg transition animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-base-content mb-1">
                {restaurant.name}
              </h3>
              <p className="text-sm text-base-content/70 mb-1">
                {restaurant.location}
              </p>
              <p className="text-yellow-500 font-semibold mb-2">
                ⭐ {restaurant.rating}
              </p>
              <p className="text-base-content">{restaurant.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRestaurantsTable;
