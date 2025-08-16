"use client";

export default function About() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About Us
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
              We are passionate about creating digital experiences that inspire
              and engage audiences worldwide.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <img
              src="https://via.placeholder.com/600x400"
              alt="About us"
              className="w-full h-auto rounded-lg shadow-lg"
            />

            {/* Text */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Who We Are
              </h2>
              <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                We are a team of creative professionals dedicated to building
                beautiful, functional, and user-friendly websites. Our goal is
                to bring your ideas to life through design and technology.
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                With years of experience in the industry, we have helped
                numerous clients achieve their online goals by delivering
                exceptional solutions tailored to their needs.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                To deliver innovative and effective digital solutions that help
                businesses grow and succeed in the online space.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Our Vision
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                To be recognized as a leading provider of creative and impactful
                web solutions, known for our commitment to quality and customer
                satisfaction.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
