import React from "react";
import aboutImage from "./about page.jpg";
import Header from "../../header-footer/header";

const AboutPage = () => {
  const currentDate = new Date().toLocaleDateString();

  return (<>
  <Header />
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <nav className="bg-white p-4 rounded-lg shadow-lg mb-8">
            <h1 className="text-2xl font-bold text-center">About Smart Buy</h1>
          </nav>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Smart Buy, your ultimate destination for online shopping. We are dedicated to providing a seamless and enjoyable shopping experience to our valued customers. With a wide range of top-quality products and exceptional customer service, we aim to be your preferred choice for all your shopping needs.
            </p>
            <p className="text-gray-700 mb-4">
              At Smart Buy, we believe in staying ahead of the latest trends and constantly expanding our inventory to meet diverse customer preferences. Our commitment to excellence has earned us a loyal customer base who trust us for their online shopping requirements.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              Our mission is to provide a curated selection of high-quality products that enhance our customers' lives. We strive to create a user-friendly platform that offers convenience, reliability, and personalized experiences. With a focus on customer satisfaction, secure transactions, and timely delivery, we aim to exceed your expectations at every step.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Customer-centric Approach: We prioritize our customers' needs and provide exceptional service to ensure their satisfaction.</li>
              <li>Quality Assurance: We source products from trusted brands and suppliers, ensuring high standards of quality and durability.</li>
              <li>Innovation: We embrace technological advancements to enhance the shopping experience, offering personalized recommendations and seamless navigation.</li>
              <li>Transparency: We believe in transparency, providing accurate product information, fair pricing, and transparent policies.</li>
              <li>Community Engagement: We actively engage with our customers, listen to their feedback, and continuously improve our services based on their suggestions.</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutImage}
            alt="About Smart Buy"
            className="h-full object-cover rounded-lg shadow-lg filter brightness-125"
          />
        </div>
      </div>
      <footer className="bg-gray-900 text-white text-center py-4">
        &copy; {currentDate} Smart Buy. All rights reserved.
      </footer>
    </div>
    </>
  );
};

export default AboutPage;
