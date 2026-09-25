import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, contactConfig } from "../../content_option";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ ...formData, loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID,
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! Thank you for your message.",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Failed to send! ${error.text}`,
            variant: "danger",
            show: true,
          });
        },
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title} | Contact</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
        {/* Page Header */}
        <div className="flex flex-col mb-12">
          <h1 className="text-6xl lg:text-7xl font-black tracking-tighter inline-block bg-neo-yellow border-4 border-black dark:border-white px-6 py-2 shadow-neo dark:shadow-neo-dark self-start transform -rotate-1 text-black">
            Contact<span className="text-neo-red">.</span>
          </h1>
          <p className="mt-6 text-xl font-bold max-w-2xl text-black dark:text-gray-300">
            Have a project in mind? Let's build something together.
          </p>
        </div>

        {/* Success/Error Alert */}
        {formData.show && (
          <div
            className={`mb-8 p-4 border-4 border-black dark:border-white shadow-neo dark:shadow-neo-dark font-bold text-lg ${
              formData.variant === "success"
                ? "bg-neo-green text-black"
                : "bg-neo-red text-white"
            }`}
          >
            <div className="flex justify-between items-center">
              <p className="m-0">{formData.alertmessage}</p>
              <button
                onClick={() => setFormdata({ ...formData, show: false })}
                className="font-black text-2xl leading-none hover:opacity-70"
              >
                ×
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT COLUMN: Contact Info */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            {/* Info Card */}
            <div className="bg-neo-blue text-white border-4 border-black dark:border-white p-6 shadow-neo dark:shadow-neo-dark">
              <h3 className="text-3xl font-black mb-6 uppercase border-b-4 border-white pb-2 inline-block">
                Get in touch
              </h3>

              <div className="flex flex-col gap-4 font-bold text-lg">
                <div>
                  <span className="block text-sm opacity-80 uppercase tracking-widest mb-1">
                    Email
                  </span>
                  <a
                    href={`mailto:${contactConfig.YOUR_EMAIL}`}
                    className="underline hover:text-neo-yellow transition-colors break-all"
                  >
                    {contactConfig.YOUR_EMAIL}
                  </a>
                </div>

                {contactConfig.hasOwnProperty("YOUR_FONE") && (
                  <div>
                    <span className="block text-sm opacity-80 uppercase tracking-widest mb-1">
                      Phone
                    </span>
                    <p>{contactConfig.YOUR_FONE}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Description Box */}
            <div className="bg-white dark:bg-neo-white-dark border-4 border-black dark:border-white p-6 shadow-neo dark:shadow-neo-dark">
              <p className="font-bold leading-relaxed text-black dark:text-gray-300">
                {contactConfig.description}
              </p>
            </div>

            {/* Decorative Squiggle */}
            <div className="flex justify-center lg:justify-start">
              <svg
                width="100"
                height="40"
                viewBox="0 0 100 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 20C15 10 25 30 35 20C45 10 55 30 65 20C75 10 85 30 95 20"
                  stroke="#FF4B4B"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="w-full lg:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-neo-white-dark border-4 border-black dark:border-white p-6 lg:p-8 shadow-neo dark:shadow-neo-dark flex flex-col gap-6"
            >
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-black uppercase text-sm text-black dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    type="text"
                    required
                    value={formData.name || ""}
                    onChange={handleChange}
                    className="w-full bg-neo-bg dark:bg-neo-bg-dark text-black dark:text-white border-4 border-black dark:border-white p-3 font-bold focus:outline-none focus:shadow-neo-sm dark:focus:shadow-neo-sm-dark transition-shadow"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-black uppercase text-sm text-black dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    type="email"
                    required
                    value={formData.email || ""}
                    onChange={handleChange}
                    className="w-full bg-neo-bg dark:bg-neo-bg-dark text-black dark:text-white border-4 border-black dark:border-white p-3 font-bold focus:outline-none focus:shadow-neo-sm dark:focus:shadow-neo-sm-dark transition-shadow"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-black uppercase text-sm text-black dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-neo-bg dark:bg-neo-bg-dark text-black dark:text-white border-4 border-black dark:border-white p-3 font-bold focus:outline-none focus:shadow-neo-sm dark:focus:shadow-neo-sm-dark transition-shadow resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formData.loading}
                className="self-start bg-neo-yellow text-black font-black text-xl border-4 border-black dark:border-white px-8 py-4 shadow-neo dark:shadow-neo-dark hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-neo-sm dark:hover:shadow-neo-sm-dark transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formData.loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};
export default ContactUs;
