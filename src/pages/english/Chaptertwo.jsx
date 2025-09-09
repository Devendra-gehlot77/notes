import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Chaptertwo() {
  const intro = [
    {
      ques: "Name of the ship ",
      ans: "Wavewalker",
    },
    {
      ques: "Tourney started from ",
      ans: " Playmouth England",
    },
    {
      ques: "ppleasand Tourney ",
      ans: " 1,05.00 km. from South Africa to cape town",
    },
    {
      ques: "They were going to sail ",
      ans: "  Southrern Indian ocean",
    },
    {
      ques: " Name of Island that they found ",
      ans: "   ILE Amaterdam ",
    },
    {
      ques: " Name of crewman ",
      ans: "   American, Larey. Vigil Swiss. Herb Seigler.  ",
    },
    {
      ques: " Author's Wife ",
      ans: "   Maruy  ",
    },
    {
      ques: " Daughter ",
      ans: "   Suzame  ",
    },
    {
      ques: " Son ",
      ans: "   Jonathan  ",
    },
  ];

  const qustans = [
    {
      qustno: "Q1",
      qust: " To protect the ship when rough weather began",
      ans: "  When the rough weather began. He slowed down the ship . He dropped the storm jib and tied everything double . He started life raft drills and wore lifellne jackets .",
    },
    {
      qustno: "Q2",
      qust: " To Check the flooding of the water in the ship ? ",
      ans: " To check the flooding of the water in the ship, he secured the gaping holes . He spread a canvas against it and paced water that was come in .",
    },
    {
      qustno: "Q3",
      qust: "    Desceike the mental condition of the voyagers are 4 and 5 Janrary.",
      ans: ` On 4th January they were pumping continuous but reached only few centimetres . They had to keep pace with water . They took  their first meal after 2 days .
      On 5th january , their situation was desperate . The weaher was very bad . The sea was rolling towards them . Black cloudds began to build  up from which they could not see .  `,
    },
    {
      qustno: "Q4",
      qust: "    Describe the shifts in the narration of the shifts events as indicated ",
      ans: " The lesson has an adventure of the captain and his family . He sailed the ship in stormy clouds . His experience and bold action saved them. The family was supporting him. They did not make him worry .",
    },
    {
      qustno: "Q5",
      qust: "what was the purpore of the author's voyage ?",
      ans: "  The purpose of the author's voyage was to repeat the round world voyage made my captain james cook . ",
    },
    {
      qustno: "Q6",
      qust: " Who were voyagers  ? ",
      ans: " The voyagers were the author  his wife marry ,  his son ,  his daughter and two crewmen. ",
    },
    {
      qustno: "Q7",
      qust: "  'We are not Afraid to Die.. If we can all be together . who said it' ? ",
      ans: "  His Son Jonathan said it. ",
    },
    {
      qustno: "Q8",
      qust: "   'Daddy,are me going to die' who said it ? ",
      ans: " His Son Jonathan said it. ",
    },
    {
      qustno: "Q9",
      qust: "    ' Because you are the Best daddy in the whole word and the best captain 'who sard it ",
      ans: " His Son Jonathan said it.  ",
    },
    {
      qustno: "Q9",
      qust: "  'I didn't want to worry you when you are treying to save all' whe said it ",
      ans: " His Daughter she  said it.  ",
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
            Chapter 2: We're Nof afraid to die... If we can all be Together
          </h1>
          {/* introduction */}
          <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
            Introduction
          </p>
          {intro.map((v, i) => {
            return (
              <ul className="list-disc">
                <li>
                  <span className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
                    {" "}
                    {v.ques} =
                  </span>
                  {v.ans}
                </li>
              </ul>
            );
          })}

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
