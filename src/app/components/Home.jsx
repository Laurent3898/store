import Link from "next/link";
import React, { useState, useEffect } from "react";

const Accueil = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items); // Utilisez data.items au lieu de data car c'est de l'objet
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        setError(error.message || "An error occurred while fetching data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const collection = items.map((item) => (
    <div className="w-full lg:max-w-lg px-4 lg:px-0" key={item.id}>
      <div className="p-3 bg-white rounded shadow-md">
        <h2 className="mr-auto text-lg cursor-pointer hover:text-gray-900 text-red-600">
          {item.title}
        </h2>
        <div className="mt-1 text-xl font-semibold">
          {item.price} <span>€</span>
        </div>
        <div className="mt-1 font-semibold">
          {item.description.length > 80
            ? `${item.description.slice(0, 50)}...`
            : item.description}
        </div>
        <button
          type="button"
          className="text-white text-xs bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Link href={`/items/${item.id}`}>Détails</Link>
        </button>
      </div>
    </div>
  ));

  return (
    <main className="flex min-h-screen flex-col p-5">
      <div className="lg:2/6 xl:w-2/4 mt-10 lg:mt-5 lg:ml-6 text-left">
        <div className="text-6xl font-semibold text-gray-900 leading-none">
          Project for Online products
        </div>
        <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          perferendis officiis doloremque officia hic quis consectetur ad earum
          laborum at, saepe, ducimus qui distinctio culpa eius in asperiores
          ullam perspiciatis.
        </div>
      </div>
      <br />

      <h1 className="text-xl text-gray-700 font-bold p-4 mb-2">
        List of all items
      </h1>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
        {collection}
      </div>
    </main>
  );
};

export default Accueil;
