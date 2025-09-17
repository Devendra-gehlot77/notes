import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Poemfourth() {
  const qustans = [
    {
      qustno: "Q1",
      qust: "What according to the poem is involved in the process of growing up?",
      ans: "The process of growing up involves the loss of innocence, rationality of the mind, and thought of individuality.",
    },
    {
      qustno: "Q2",
      qust: "What is the poet's feeling towards childhood?",
      ans: "The poet wants to get back his days of childhood. He misses his lost childhood. When a child is born, he has an innocent face and thinks about the existence of God, hell, and heaven. But as he grows up, he finds the differences in people's sayings and actions.",
    },
    {
      qustno: "Q3",
      qust: 'What message does the poet want to convey through the poem "Childhood"?',
      ans: "The poet says that the golden age of a man's life is his childhood. As he grows up, he finds the world too complicated. People's sayings and actions prove false, and he finds hypocrisy in their work.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
        {/* Card with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white shadow-lg rounded-2xl max-w-3xl w-full p-6 md:p-10"
        >
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6">
            Poem 4 : Childhood
          </h1>
          {/* question answer */}
          <div>
            <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
              Question and Answer
            </p>
            {/* loop */}
            {qustans.map((v, i) => {
              return (
                <div key={i} className="mt-4">
                  <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
                    {v.qustno} {v.qust}
                  </p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="pl-6 space-y-2 text-gray-700 text-base md:text-lg mt-1"
                  >
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed me-1">
                      Ans:
                    </span>
                    {v.ans}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </>
  );
}
