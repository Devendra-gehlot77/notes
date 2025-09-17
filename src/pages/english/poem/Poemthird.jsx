import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Poemthird() {
  const qustans = [
    {
      qustno: "Q1",
      qust: "There are two types of voice in the poem. Why do they belong to? Which lines indicate this?",
      ans: "There are two voices in the poem: the voice of the poet and the voice of the shower of rain.",
    },
    {
      qustno: "Q2",
      qust: 'What does the phrase "strange to tell" mean?',
      ans: 'The phrase "strange to tell" means it is difficult to explain what the showers of rain have replied.',
    },
    {
      qustno: "Q3",
      qust: "There is a parallel drawn between rain and music. Which words indicate this? Explain the similarity between the two.",
      ans: "The similarity between music and rain has been drawn. Music, after being composed, roams around the world and gives pleasure. Similarly, water vapourizes, goes towards the sky, and descends on the earth as showers of rain.",
    },
    {
      qustno: "Q4",
      qust: "Why does the rain come on the earth?",
      ans: "The rain comes to the earth to wash drought and tiny particles and layers of dust. Without rain, seeds would be hidden and unborn. It gives back life to its origin.",
    },
  ];

  const stranza = [
     {
      qustno: "Q1",
      qust: "Who is 'I' in the first line?",
      ans: "'I' refers to the voice of the rain.",
    },
    {
      qustno: "Q2",
      qust: "From where does the rain rise?",
      ans: "The rain rises from the bottomless sea and the land.",
    },
    {
      qustno: "Q3",
      qust: "What happens to the water vapour when it rises upward?",
      ans: "When water vapour rises upward, it is formed into clouds and then comes down on the land as a shower of rain.",
    },
    {
      qustno: "Q4",
      qust: "Which word means the same: uncertain, indefinite or unclear?",
      ans: 'The word is "vaguely".',
    },
    {
      qustno: "Q5",
      qust: "Why does the rain descend on the earth?",
      ans: "The rain descends on the earth to wash drought and dust layers.",
    },
    {
      qustno: "Q6",
      qust: "Without rain what will happen to the seeds?",
      ans: "Without rain, the seeds will be hidden and unsprouted.",
    },
    {
      qustno: "Q7",
      qust: "How does the rain give back life to its own origin?",
      ans: "The rain showers give life back to their own origin. It works by day and night.",
    },
  ]
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
            Poem 3 : The Voice of the Rain
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
          {/* Stranza  */}
          <div>
            <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
            Stranza
            </p>
            <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
            External I rise _ _ _ _ _ _ _ _ _ _ _ _ _ yet the same .
            </p>
            {/* loop */}
            {stranza.map((v, i) => {
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
