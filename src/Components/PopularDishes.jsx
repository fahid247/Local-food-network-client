import React from "react";

const popularDishes = [
  {
    id: 1,
    name: "Fried Chicken Wings",
    image: "https://i.postimg.cc/cJKftdKZ/lemon-pepper-near-sauce-chicken.jpg",
    recipe:
      "Crispy, juicy wings with perfect seasoning. Served with a tangy dipping sauce for extra flavor.",
  },
  {
    id: 2,
    name: "Beef Steak with Mashed Potatoes",
    image: "https://i.postimg.cc/xdGdq704/juicy-grilled-meat-rustic-wooden-plate-generated-by-ai.jpg",
    recipe:
      "Juicy steak cooked to perfection! Paired with creamy mashed potatoes and savory gravy.",
  },
  {
    id: 3,
    name: "Cheese Burst Pizza",
    image: "https://i.postimg.cc/rmc7FZmR/imeretian-khachapuri-cheese-lemon-side-view.jpg",
    recipe:
      "Super cheesy pizza with a golden crust, topped with fresh ingredients for the perfect bite.",
  },
  {
    id: 4,
    name: "Sushi Platter",
    image: "https://i.postimg.cc/YSymtZ8d/fresh-sushi-set-table-top-view.jpg",
    recipe:
      "Fresh sushi rolls beautifully presented, made with high-quality fish and delicate flavors.",
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    image: "https://i.postimg.cc/d0njr564/delicious-dessert-plate.jpg",
    recipe:
      "Warm, gooey chocolate cake that melts in your mouth. Perfect dessert for chocolate lovers.",
  },
  {
    id: 6,
    name: "Margherita Pizza",
    image: "https://i.postimg.cc/MZYj99jC/download-4.jpg",
    recipe:
      "Classic pizza with fresh basil, mozzarella, and tomato sauce. Simple yet delicious!",
  },
];

const PopularDishes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl animate__animated animate__pulse font-bold text-gray-800 mb-12 text-center">
          Popular Dishes & Recipes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{dish.name}</h3>
                <p className="text-gray-700 mb-4">{dish.recipe}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded transition">
                  View Full Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
