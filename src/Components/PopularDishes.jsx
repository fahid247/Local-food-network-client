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
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-orange-600">
            Popular Dishes
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Discover the most loved dishes from our food community.
          </p>
        </div>

        {/* Review-style Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {popularDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden
                         hover:-translate-y-2 hover:shadow-md
                         transition-all duration-300 ease-out
                         flex flex-col"
            >
              {/* Image (same as review cards) */}
              <div className="h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover
                             hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {dish.name}
                </h3>

                <p className="text-sm text-gray-600 grow">
                  {dish.recipe}
                </p>

                {/* Footer Button (aligned like review cards) */}
                <div className="mt-5 pt-4 ">
                  <button
                    className="btn btn-outline btn-primary btn-sm w-full mt-auto"
                  >
                    View Full Recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
