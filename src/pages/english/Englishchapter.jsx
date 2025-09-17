"use client";

export default function Englishchapter() {
  return (
    <>
      <section className="max-w-6xl mx-auto my-10 px-4">
        {/* ✅ Desktop Table */}
        <div className="hidden md:block overflow-x-auto shadow-lg rounded-lg animate-fadeIn">
          <table className="w-full text-left border border-gray-200 rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3">Class</th>
                <th className="px-6 py-3">Subject</th>
                <th className="px-6 py-3">Chapter</th>
                <th className="px-6 py-3">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  cls: "11th",
                  chapter: "Chapter 1 - The Portrait of a lady ",
                  link: "/english/chapters/class-11th/ch-one",
                },
                {
                  cls: "11th",
                  chapter:
                    "Chapter 2 - We're Nof afraid to die... If we can all be Together ",
                  link: "/english/chapters/class-11th/ch-two",
                },
                {
                  cls: "11th",
                  chapter:
                    "Chapter 3 - Discovering :  Tut & The Saga Continues ",
                  link: "/english/chapters/class-11th/ch-three",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 4 - The Ailing Planet",
                  link: "/english/chapters/class-11th/ch-four",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 5 - The Adventure",
                  link: "/english/chapters/class-11th/ch-five",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 6 - Silk Route",
                  link: "/english/chapters/class-11th/ch-six",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-blue-50 transition duration-300 ease-in-out transform hover:scale-[1.01]"
                >
                  <td className="px-6 py-4 font-medium">{row.cls}</td>
                  <td className="px-6 py-4">english</td>
                  <td className="px-6 py-4">{row.chapter}</td>
                  <td className="px-6 py-4">
                    <a
                      href={row.link}
                      className="text-blue-600 font-medium hover:underline transition hover:text-blue-800"
                    >
                      View Notes →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* desktop table poem section */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6"> poem </h1>
        <div className="hidden md:block overflow-x-auto shadow-lg rounded-lg animate-fadeIn">
          <table className="w-full text-left border border-gray-200 rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3">Class</th>
                <th className="px-6 py-3">Subject</th>
                <th className="px-6 py-3">Chapter</th>
                <th className="px-6 py-3">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  cls: "11th",
                  chapter: "Chapter 1 - A Photograph ",
                  link: "/english/poem/class-11th/poem-one",
                },
                {
                  cls: "11th",
                  chapter:
                    "Chapter 2 - The Labronum Top",
                  link: "/english/poem/class-11th/poem-two",
                },
                {
                  cls: "11th",
                  chapter:
                    "Chapter 3 - Discovering :  Tut & The Saga Continues ",
                  link: "/english/poem/class-11th/poem-three",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 4 - The Ailing Planet",
                  link: "/english/poem/class-11th/poem-four",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 5 - The Adventure",
                  link: "/english/poem/class-11th/poem-five",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 6 - Silk Route",
                  link: "/english/poem/class-11th/poem-six",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-blue-50 transition duration-300 ease-in-out transform hover:scale-[1.01]"
                >
                  <td className="px-6 py-4 font-medium">{row.cls}</td>
                  <td className="px-6 py-4">english</td>
                  <td className="px-6 py-4">{row.chapter}</td>
                  <td className="px-6 py-4">
                    <a
                      href={row.link}
                      className="text-blue-600 font-medium hover:underline transition hover:text-blue-800"
                    >
                      View Notes →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>  

        {/* ✅ Mobile Cards */}
        <div className="grid grid-cols-1 gap-4 md:hidden mt-6 animate-slideUp">
          {[
            {
                  cls: "11th",
                  chapter: "Chapter 1 - The Portrait of a lady ",
                  link: "/english/chapters/class-11th/ch-one",
                },
                {
                  cls: "11th",
                  chapter:
                    "Chapter 2 - We're Nof afraid to die... If we can all be Together ",
                  link: "/english/chapters/class-11th/ch-two",
                },
                {
                  cls: "11th",
                  chapter:
                    "Chapter 3 - Discovering :  Tut & The Saga Continues ",
                  link: "/english/chapters/class-11th/ch-three",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 4 - The Ailing Planet",
                  link: "/english/chapters/class-11th/ch-four",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 5 - The Adventure",
                  link: "/english/chapters/class-11th/ch-five",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 6 - Silk Route",
                  link: "/english/chapters/class-11th/ch-six",
                },
          ].map((row, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow-md transform transition duration-500 ease-in-out hover:scale-[1.03] hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-blue-600">{row.cls}</h3>
              <p className="text-gray-700 mb-2">{row.chapter}</p>
              <a
                href={row.link}
                className="text-blue-600 font-medium hover:underline transition hover:text-blue-800"
              >
                View Notes →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Animations (Tailwind config me extend karna hoga) */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-in-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </>
  );
}
