import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Poemsecond() {
  const qustans = [
    {
      qustno: "Q1",
      qust: "What do you notice about the beginning and the ending of the poem?",
      ans: "In the beginning and at the end of the poem, the Laburnum tree is silent.",
    },
    {
      qustno: "Q2",
      qust: "To what is the bird's movement compared? What is the basis for the comparison?",
      ans: "The bird's movement is compared to a lizard. The basis for the comparison is that the bird is sleek, alert, active, and abrupt like a lizard when it enters the thickness of the tree.",
    },
    {
      qustno: "Q3",
      qust: "Why is the image of the engine evoked by the poet?",
      ans: "The image of the engine is evoked by the poet to describe how when the goldfinch enters the tree, a 'machine of chirrupings' starts, and the whole tree trembles and thrills.",
    },
    {
      qustno: "Q4",
      qust: 'What does the phrase "Her barred face identity mask" mean?',
      ans: "The phrase 'Her barred face identity mask' means that the black stripes on the goldfinch's head and wings make her identity.",
    },
    {
      qustno: "Q5",
      qust: 'The theme of the poem "The Laburnum Top"?',
      ans: "The poem describes the 'Laburnum Top' as silent and still until a goldfinch enters its thickness. The bird feeds her family, and the tree enjoys the movement and sweet music. But when the bird flies away, the top remains empty again.",
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
            Poem 2 : The Laburnum Top
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
