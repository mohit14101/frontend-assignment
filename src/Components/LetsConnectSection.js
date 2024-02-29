
import React, { useState } from 'react';

const LetsConnectSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className=" bg-gray-100 pb-12 flex items-center flex-wrap px-12">
    <div className="mx-auto text-center ">
      <h2 className="text-4xl font-bold">LET'S CONNECT</h2>
      <div>Contact our support team or make an appointment with our experts.</div>
    </div>
    <form className="max-w-fit mx-auto p-4 md:p-6 bg-gray-100 rounded-md shadow-lg" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full md:w-96 border rounded-md p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full md:w-96 border rounded-md p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contactNumber" className="block text-gray-700 font-bold mb-2">Contact Number</label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          className="w-full md:w-96 border rounded-md p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
        <select
        id="subject"
        name="subject"
        value={formData.subject}
        className="w-full md:w-96 border rounded-md p-2"
        required
        onChange={handleChange}>
          <option value="remote_developers">Remote Developers</option>
          <option value="product_development">Product Development</option>
          <option value="digital_transformation">Digital Transformation</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full md:w-96 border rounded-md p-2"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Submit Form
      </button>
    </form>
    </div>
  );
};

export default LetsConnectSection;
