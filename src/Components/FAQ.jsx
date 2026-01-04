import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is Foodie Network?",
    answer:
      "Foodie Network is a community-driven platform where food lovers can share reviews, discover top restaurants, and explore recipes from across Bangladesh.",
  },
  {
    question: "How can I submit a review?",
    answer:
      "You need to create an account first. Once logged in, navigate to a restaurant or dish and click 'Add Review'. Fill in your feedback and submit.",
  },
  {
    question: "Can I edit or delete my review?",
    answer:
      "Yes! You can edit or delete any review you’ve submitted from your profile page.",
  },
  {
    question: "Do I need an account to submit complaints or feedback?",
    answer:
      "No, our Complain Box allows anyone to submit feedback or report issues without an account.",
  },
  {
    question: "How are top-rated dishes determined?",
    answer:
      "Top-rated dishes are calculated based on the average rating submitted by users. Popularity is updated in real-time.",
  },
  {
    question: "Can I share my own recipes?",
    answer:
      "Yes! Registered users can share recipes which can be viewed by the community and added to favorites.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-base-200 py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 animate__animated animate__fadeInDown">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-base-100 rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-primary" />
                ) : (
                  <FaChevronDown className="text-primary" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-base-300 text-base-content/80">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
