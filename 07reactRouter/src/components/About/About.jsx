import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                        React is a popular open-source JavaScript library used for building modern and interactive user interfaces. It allows developers to create fast and dynamic web applications, especially single-page applications, where content updates without reloading the entire page.
                      </p>
                      <p className="mt-4 text-gray-600">
                        One of the key strengths of React is its component-based architecture. This means developers can break the UI into small, reusable pieces called components, making code more organized, maintainable, and easier to scale. React also uses a virtual DOM, which improves performance by updating only the parts of the page that actually change.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}