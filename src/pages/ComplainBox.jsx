import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useMutation } from "@tanstack/react-query";

const ComplainBox = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Hardcoded EmailJS credentials
  const SERVICE_ID = "service_kbvfdgx";
  const TEMPLATE_ID = "template_s7yrr36";
  const PUBLIC_KEY = "iIVkezhIoXXn7csN1";

  // TanStack mutation
  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: async () => {
      return emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        message: message,
      }, PUBLIC_KEY);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    mutate();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-20 bg-base-200 min-h-screen">
      <div className="container mx-auto px-6 max-w-xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">
          Complain Box
        </h2>
        <p className="text-center text-base-content/70 mb-10">
          Have an issue or suggestion? Write to us — we value your feedback.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-base-100 p-8 rounded-xl shadow-md space-y-5"
        >
          <div>
            <label className="label font-semibold">Your Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label font-semibold">Your Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label font-semibold">Message</label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your complaint or message..."
              className="textarea textarea-bordered w-full min-h-[120px]"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary w-full"
          >
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Send Message"
            )}
          </button>

          {isSuccess && (
            <p className="text-green-600 text-center font-medium mt-2">
              Your message has been sent successfully!
            </p>
          )}
          {isError && (
            <p className="text-red-600 text-center font-medium mt-2">
              Failed to send message. Try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ComplainBox;
