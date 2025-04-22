import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter an email.");
      return;
    }
    console.log("Subscribed with:", email);
    // You can add API call or toast here
    setEmail("");
  };

  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Get the latest updates on offers and promotions.
      </p>
      <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
        <div className="flex gap-2">
          <label htmlFor="newsletter-email" className="sr-only">
            Email Address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 p-2 border rounded-md text-black dark:text-white dark:bg-gray-700"
            aria-label="Email for newsletter"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterSection;
