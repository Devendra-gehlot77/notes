"use client";

export default function ComputerChapters() {
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
                  chapter: "Chapter 1 - Computer System",
                  link: "/computer/chapters/ch-one",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 2 - Python Basics",
                  link: "/computer/chapters/ch-two",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 3 - Data Representation",
                  link: "/computer/chapters/ch-three",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 4 - Control Structures",
                  link: "/computer/chapters/ch-four",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 5 - Functions in Python",
                  link: "/computer/chapters/ch-five",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 6 - File Handling",
                 link: "/computer/chapters/ch-six",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 7 - Database Management System (DBMS)",
                  link: "/computer/chapters/ch-seven",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 8 - SQL Queries",
                link: "/computer/chapters/ch-eight",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 9 - Object-Oriented Programming (OOPs)",
                  link: "/computer/chapters/ch-nine",
                },
                {
                  cls: "11th",
                  chapter: "Chapter 10 - Networking & Internet",
                  link: "/computer/chapters/ch-ten",
                }
              ].map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-blue-50 transition duration-300 ease-in-out transform hover:scale-[1.01]"
                >
                  <td className="px-6 py-4 font-medium">{row.cls}</td>
                  <td className="px-6 py-4">Computer Science</td>
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
              chapter: "Chapter 1 - Introduction to Computers",
              link: "/computer/chapters/ch-one",
            },
            {
              cls: "11th",
              chapter: "Chapter 2 - Python Basics",
              link: "/notes/class11/ch2",
            },
            {
              cls: "11th",
              chapter: "Chapter 3 - Data Representation",
              link: "/notes/class11/ch3",
            },
            {
              cls: "11th",
              chapter: "Chapter 4 - Control Structures",
              link: "/notes/class11/ch4",
            },
            {
              cls: "11th",
              chapter: "Chapter 5 - Functions in Python",
              link: "/notes/class11/ch5",
            },
            {
              cls: "11th",
              chapter: "Chapter 6 - File Handling",
              link: "/notes/class11/ch6",
            },
            {
              cls: "12th",
              chapter: "Chapter 7 - Database Management System (DBMS)",
              link: "/notes/class12/ch7",
            },
            {
              cls: "12th",
              chapter: "Chapter 8 - SQL Queries",
              link: "/notes/class12/ch8",
            },
            {
              cls: "12th",
              chapter: "Chapter 9 - Object-Oriented Programming (OOPs)",
              link: "/notes/class12/ch9",
            },
            {
              cls: "12th",
              chapter: "Chapter 10 - Networking & Internet",
              link: "/notes/class12/ch10",
            },
            {
              cls: "12th",
              chapter: "Chapter 11 - Boolean Algebra",
              link: "/notes/class12/ch11",
            },
            {
              cls: "12th",
              chapter: "Chapter 12 - Emerging Trends in IT",
              link: "/notes/class12/ch12",
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
