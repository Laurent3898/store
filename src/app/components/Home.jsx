import React from "react";

const Accueil = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-7">
      <h1>List of all items</h1>
      <div className="grid grid-cols-4">
        <article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="h-56 w-full object-cover"
          />

          <div class="p-4 sm:p-6">
            <a href="#">
              <h3 class="text-lg font-medium text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </a>

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>

            <button>Comments</button>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Accueil;
