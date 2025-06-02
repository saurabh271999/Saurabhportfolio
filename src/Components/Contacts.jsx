import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#0a192f] text-white py-16 px-8 md:px-24 flex justify-center items-center flex-col">
      <h2 className="text-3xl font-bold text-center mb-12 border-b-2 inline-block border-blue-500">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <p className="mb-6 text-gray-300">
            Feel free to reach out for project collaborations, job opportunities, or just a friendly chat about technology!
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
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input type="text" className="w-full p-2 rounded bg-[#112240] border border-[#233554] text-white" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" className="w-full p-2 rounded bg-[#112240] border border-[#233554] text-white" />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea rows="5" className="w-full p-2 rounded bg-[#112240] border border-[#233554] text-white"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
