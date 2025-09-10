import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Chapterfour() {
  const qustans = [
    {
      qustno: "Q1",
      qust: "What does the notice 'The world's most dangerous animal' at a cage in the zoo at Lusaka, Zambia, signify?",
      ans: "The notice signifies that the man himself is responsible for the destruction of the wild species.",
    },
    {
      qustno: "Q2",
      qust: "How are the earth's principal biological systems being depleted?",
      ans: "The earth's principal biological systems are being depleted because of over fishing for the hungry world. Also, cutting of forests to procure firewood and croplands are converted into barren wasteland. Grasslands have been converted into residential houses, that's why wildlife is extinct.",
    },
    {
      qustno: "Q3",
      qust: "Why does the author aver that the growth of world population is one of the strongest factors disturbing the future of human society?",
      ans: "The growth of the population has left us battling with limited resources. It has deprived the man from his basic needs. The problem of unemployment has been increased and the hope of people would die in their hungry hutments unless population control is given the top most priority.",
    },
    {
      qustno: "Q4",
      qust: "What are the earth's principal biological systems?",
      ans: "The Global Economic Prospect points out that the earth's principal biological systems are four: fisheries, forests, grasslands, and croplands. They form the foundation of the global economic system.",
    },
    {
      qustno: "Q5",
      qust: "What does Article 48A of the constitution of India provide?",
      ans: "Article 48A of the constitution of India provides that the State shall endeavour to protect and improve the environment and to safeguard the forests and wildlife of the country.",
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
            Chapter 4: The Ailing Planet
          </h1>
          {/* question ansewr */}
          <div>
            <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
              Question and Answer
            </p>
            {/* questoin answer */}
            {qustans.map((v, i) => {
              return (
                <div className="mt-4">
                  <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
                    {v.qustno} {v.qust}
                  </p>
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
                  >
                    {v.ans}
                  </motion.ul>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </>
  );
}
