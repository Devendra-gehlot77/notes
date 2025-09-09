"use client";

import Link from "next/link";

export default function ComputeHome() {
  return (
    <>
      <div className="">
        <section className="py-16 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Computer Notes – Class 11th & 12th
          </h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto shadow-md rounded-lg animate-fadeIn">
            <table className="w-full text-left border border-gray-200">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-3">Class</th>
                  <th className="px-6 py-3">Subject</th>
                  <th className="px-6 py-3">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Class 11 */}
                <tr className="hover:bg-blue-50 transition duration-300 ease-in-out transform hover:scale-[1.01]">
                  <td className="px-6 py-4 font-medium">11th</td>
                  <td className="px-6 py-4">Computer Science</td>
                  <td className="px-6 py-4">
                    <Link
                      href="/computer/chapters"
                      className="text-blue-600 font-medium hover:underline transition duration-300 hover:text-blue-800"
                    >
                      View Notes →
                    </Link>
                  </td>
                </tr>

                {/* Class 12 */}
                <tr className="bg-gray-50 hover:bg-blue-50 transition duration-300 ease-in-out transform hover:scale-[1.01]">
                  <td className="px-6 py-4 font-medium">12th</td>
                  <td className="px-6 py-4">Computer Science</td>
                  <td className="px-6 py-4">
                    <a
                      href="/notes/class12/dbms"
                      className="text-blue-600 font-medium hover:underline transition duration-300 hover:text-blue-800"
                    >
                      View Notes →
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {/* 11th Intro */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">
                Class 11 - Introduction to Computers
              </h3>
              <p className="text-gray-600">Subject: Computer Science</p>
              <Link
                href="/computer/chapters"
                className="text-blue-600 font-medium hover:underline"
              >
                View Notes →
              </Link>
            </div>

            {/* 12th DBMS */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">Class 12 - DBMS</h3>
              <p className="text-gray-600">Subject: Computer Science</p>
              <a
                href="/notes/class12/dbms"
                className="text-blue-600 font-medium hover:underline"
              >
                View Notes →
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
