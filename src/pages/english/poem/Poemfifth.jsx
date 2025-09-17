import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Poemfifth() {
  const qustans = [
    {
      qustno: "Q1",
      qust: "Why does the poet mean by silence surrounds us?",
      ans: "The poet says that the father and son are quite away from each other. They talk like strangers and don't share their feelings. There is no sign of understanding between them, so silence surrounds them.",
    },
    {
      qustno: "Q2",
      qust: "How is the father's helplessness brought out in the poem?",
      ans: "A father's helplessness is brought out in the poem. The father wants his son to share his feelings, but his son is not able to talk or share emotions. His wish to come back with previous love is not fulfilled.",
    },
    {
      qustno: "Q3",
      qust: "What message does the poet want to convey through the poem?",
      ans: 'The poet wants to convey a message through the poem about the problem of the "generation gap". A father and son live under the same roof but are unable to share their feelings.',
    },
  ];

  const stranza1 = [
    {
      qustno: "Q1",
      qust: "What does the word 'I know nothing of him' mean?",
      ans: "The father and his son are strangers to each other. The father can't understand him, so he knows nothing of him.",
    },
    {
      qustno: "Q2",
      qust: "Why does the father want to build up a relationship?",
      ans: "The father wants to make a relationship with his son because his son is quite away from him.",
    },
    {
      qustno: "Q3",
      qust: " Where do father and son live ?",
      ans: " Father and son live in the same house for years but how they are quite away .  ",
    },
  ];

  const stranza2 = [
    {
      qustno: "Q1",
      qust: "What does the word 'seed' signify?",
      ans: "The word 'seed' signifies the hard work of the father when he brought up his son.",
    },
    {
      qustno: "Q2",
      qust: "What does the word 'land' stand for?",
      ans: "The word 'land' stands for the mind of the son and his producing thoughts.",
    },
    {
      qustno: "Q3",
      qust: "What does the poet mean by 'build to my design'?",
      ans: "The child is a copy of his father. The traits should be copied in him. The father wants his son to be similar to him in likes and dislikes.",
    },
  ];

  const stranza3 = [
    {
      qustno: "Q1",
      qust: "What does the father wish?",
      ans: "The father wishes his son to be friendly with him and wants him to come back with previous love.",
    },
    {
      qustno: "Q2",
      qust: " What compromise is the father to make ? ",
      ans: " The father is ready to accept to all faults of his son even his profligacy .  ",
    },
    {
      qustno: "Q3",
      qust: " How can father shape a new love from sorrow ?",
      ans: " The father is ready to forgive and forget his son's short comings . By doing so he will be able to shape a new love .  ",
    },
  ];

   const stranza4 = [
    {
      qustno: "Q1",
      qust: "  there must the fathe and son live ?",
      ans: "The father and his son must live in the same house on  the same land ",
    },
    {
      qustno: "Q2",
      qust: "What can't the father understand?",
      ans: "The father can't understand why anger grows from grief.",
    },
    {
      qustno: "Q3",
      qust: "What do they long for?",
      ans: "They long for talking and meeting with each other. They want to forgive some excuses and something.",
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
            Poem 5 : Father to Son
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
          {/* stanza 1*/}
          <div>
            <p className="text-gray-700 mt-5 text-center font-bold text-base md:text-lg leading-relaxed ">
              Stranza 1
            </p>
            <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
              I do not understand _ _ _ _ _ _ _ _ _ _ _ _ _ I kill .
            </p>
            {/* loop */}
            {stranza1.map((v, i) => {
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
          {/* stanza 2*/}
          <div>
            <p className="text-gray-700 mt-5 font-bold text-base md:text-lg leading-relaxedn text-center ">
              Stranza 2
            </p>
            <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
              The seed I spent _ _ _ _ _ _ _ _ _ _ _ _ _ cannot share .
            </p>
            {/* loop */}
            {stranza2.map((v, i) => {
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
          {/* stanza 3*/}
          <div>
            <p className="text-gray-700 mt-5 font-bold text-base md:text-lg leading-relaxedn text-center ">
              Stranza 3
            </p>
            <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
              The seed I spent _ _ _ _ _ _ _ _ _ _ _ _ _ cannot share .
            </p>
            {/* loop */}
            {stranza3.map((v, i) => {
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
          {/* stanza 4*/}
          <div>
            <p className="text-gray-700 mt-5 font-bold text-base md:text-lg leading-relaxedn text-center ">
              Stranza 4
            </p>
            <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
             Father and son  _ _ _ _ _ _ _ _ _ _ _ _ _  something to forgive .
            </p>
            {/* loop */}
            {stranza4.map((v, i) => {
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
