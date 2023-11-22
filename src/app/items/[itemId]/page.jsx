import React from "react";

const fetchItemDetails = async (itemId) => {
  const res = await fetch(`http://localhost:4000/api/items/${itemId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const itemDetails = await res.json();
  return itemDetails.items;
};

const DetailsItems = async ({ params: { itemId } }) => {
  const item = await fetchItemDetails(itemId);

  return (
    <div className="mx-auto p-5 max-w-2xl">
      {/* Content */}
      <div className="bg-white shadow-md rounded-lg md:flex">
        <img
          className="h-96 w-full md:h-auto md:w-48 md:rounded-l-lg object-cover"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
          alt="Example photo"
        />

        {/* Items details */}
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium text-gray-800">
            {item.title}
          </h5>
          <p className="mb-4 text-base text-gray-600">{item.description}</p>
          <p className="text-xl font-bold text-gray-500">
            {item.price} <span>€</span>
          </p>
        </div>
      </div>

      {/* Comment section */}
      <div className="mt-5 mb-3 text-center font-bold md:text-xl text-lg text-gray-800">
        Leave your comments for this product below
      </div>

      <div className="mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          placeholder="You can write your comment here"
        ></textarea>
        <div className="buttons flex justify-end mt-1">
          <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
            Submit comment
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsItems;
