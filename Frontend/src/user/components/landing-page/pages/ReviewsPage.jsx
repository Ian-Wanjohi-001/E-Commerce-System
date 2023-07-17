import React from "react";

const SampleReviewsPage = () => {
  const reviews = [
    {
      id: 1,
      author: "John Doe",
      content: "Great product! Highly recommended.",
      rating: 5,
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "Excellent service and fast delivery.",
      rating: 4,
    },
    {
      id: 3,
      author: "Mike Johnson",
      content: "The quality exceeded my expectations.",
      rating: 4,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Customer Reviews</h1>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow-md p-6 mb-4"
          >
            <h3 className="text-lg font-semibold">{review.author}</h3>
            <p className="text-gray-700 mb-2">{review.content}</p>
            <div className="flex items-center">
              <span className="mr-2 text-yellow-500">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1.084l3.09 6.283 6.902.997-5 4.866 1.18 6.872L10 15.95l-6.172 3.164 1.18-6.872-5-4.866 6.902-.997L10 1.084z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </span>
              <span className="text-gray-600">{review.rating}/5</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SampleReviewsPage;
