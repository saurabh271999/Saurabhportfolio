import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "061ae76c-0dce-405d-9e4b-e6d9178b0423"); // Replace with your actual access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Submission failed");
    }
  };

  return (
    <div className="bg-[#0a192f] text-white py-16 px-8 md:px-24 flex justify-center items-center flex-col">
      <h2 className="text-3xl font-bold text-center mb-12 border-b-2 inline-block border-blue-500">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl">
        {/* Left Side */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <p className="mb-6 text-gray-300">
            Feel free to reach out for project collaborations, job
            opportunities, or just a friendly chat about technology!
          </p>

          <div className="space-y-4 text-sm text-gray-200">
            <div>
              <p className="font-bold">📧 Email</p>
              <p>saurabhpandat27@gmail.com</p>
            </div>
            <div>
              <p className="font-bold">📞 Phone</p>
              <p>+91-8178185401</p>
            </div>
            <div>
              <p className="font-bold">📍 Location</p>
              <p>Ghaziabad, India</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-bold text-sm">Availability</p>
            <button className="mt-2 bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Open to full-time opportunities
            </button>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Send Me A Message</h3>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="block text-sm mb-1" htmlFor="name">
                Name
              </label>
              <input
                required
                id="name"
                name="name"
                type="text"
                className="w-full p-2 rounded bg-[#112240] border border-[#233554] text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">
                Email
              </label>
              <input
                required
                id="email"
                name="email"
                type="email"
                className="w-full p-2 rounded bg-[#112240] border border-[#233554] text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                rows="5"
                className="w-full p-2 rounded bg-[#112240] border border-[#233554] text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Send Message
            </button>
          </form>
          {result && (
            <p className="mt-4 text-center text-green-400 font-semibold">
              {result}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
