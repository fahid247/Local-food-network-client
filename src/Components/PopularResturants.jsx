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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl animate__animated animate__pulse font-bold text-gray-800 mb-8 text-center">
          Popular Restaurants
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-orange-500 text-white">
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
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="py-3 px-6">{restaurant.name}</td>
                  <td className="py-3 px-6">{restaurant.location}</td>
                  <td className="py-3 px-6">⭐ {restaurant.rating}</td>
                  <td className="py-3 px-6">{restaurant.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PopularRestaurantsTable;
