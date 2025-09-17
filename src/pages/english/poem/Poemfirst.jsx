import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Poemfirst() {
  const qustans = [
    {
      qustno: "Q1",
      qust: "What does the word 'cardboard' denote the poem? Why has this word been used?",
      ans: "The word 'cardboard' denotes a photograph. It is used because the photograph is mounted on a cardboard backing to hold it and keep it intact.",
    },
    {
      qustno: "Q2",
      qust: "What has the camera captured?",
      ans: "The camera has captured the poet's mother and her two cousins standing on a sea beach. They are holding the poet's mother's hand.",
    },
    {
      qustno: "Q3",
      qust: "What has not changed over the years? Does this suggest something to you?",
      ans: "The sea has changed less over the years. It suggests that nature is permanent, while human life is transient. The lives of the poet's mother and herself have changed a lot.",
    },
    {
      qustno: "Q4",
      qust: "The poet's mother laughed at the snapshot. What did this laugh indicate?",
      ans: "The poet's mother laughed at the snapshot to see how they were dressed up. They were very happy and excited. This laugh later became her past.",
    },
    {
      qustno: "Q5",
      qust: 'What is the meaning of this line "Both wry with the laboured ease of loss"?',
      ans: "The poetess is very upset to lose her mother. She misses her and her laughter. The sea holiday and the cardboard are her past.",
    },
    {
      qustno: "Q6",
      qust: "What does the word 'cardboard' stand for?",
      ans: "The word 'cardboard' stands for a photograph.",
    },
    {
      qustno: "Q7",
      qust: "How many girls are there in the photograph?",
      ans: "There are three girls in the photograph: the poet's mother and her two cousins.",
    },
    {
      qustno: "Q8",
      qust: "What are the girls doing?",
      ans: "The girls are walking on the sea beach with bare feet.",
    },
    {
      qustno: "Q9",
      qust: "What has changed less? Why?",
      ans: "The sea has changed less. Nature takes a long time to change while human life changes a lot.",
    },
    {
      qustno: "Q10",
      qust: "Who laughed at the snapshot?",
      ans: "The poet's mother laughed at the snapshot.",
    },
    {
      qustno: "Q11",
      qust: "What was their past?",
      ans: "The sea holiday was her mother's past, and the mother's laughter was the poet's past.",
    },
    {
      qustno: "Q12",
      qust: "How many years have passed since photographed?",
      ans: "Some twenty or thirty years have passed since the photograph was taken.",
    },
    {
      qustno: "Q13",
      qust: "When did her mother die?",
      ans: "Her mother died when the poetess was twelve years old.",
    },
    {
      qustno: "Q14",
      qust: "Why does silence surround her?",
      ans: "Silence surrounds her because there is nobody to whom she can talk. She is left alone, and her mother's death has silenced her.",
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
            Poem 1 : A Photograph
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
                    className="pl-6 space-y-2 text-gray-700 text-base md:text-lg"
                  >
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed me-1" >  Ans :  </span> {v.ans}
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
