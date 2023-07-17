import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 bg-white rounded-lg shadow-lg py-10">
        <h1 className="text-4xl font-bold text-center mb-8">About Our Shop</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Welcome to [Your Shop Name], your one-stop destination for all your shopping needs. At [Your Shop Name], we strive to provide a seamless online shopping experience to our valued customers. With a wide selection of products and a commitment to exceptional customer service, we aim to be your preferred choice for online shopping.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                Our mission is to connect customers with quality products that enhance their lives. We are dedicated to offering a diverse range of products, from trendy fashion pieces to cutting-edge electronics, all carefully curated for your satisfaction. Through our platform, we aim to make shopping convenient, enjoyable, and rewarding for every customer.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Transparency: We believe in fostering trust by providing accurate product information, fair pricing, and transparent policies.</li>
                <li>Customer Satisfaction: Your satisfaction is our top priority. We are committed to delivering exceptional customer service and ensuring your shopping experience exceeds expectations.</li>
                <li>Quality Assurance: We carefully select and partner with trusted brands and suppliers to offer you high-quality products that meet our strict quality standards.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
