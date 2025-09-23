import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Chapterfirst12th() {
  const qustans = [
    {
      qustno: "Q1",
      qust: "Who is professor Gangadharpant? Why does he plan to go to Mumbai?",
      ans: "Professor Gangadharpant is a historian. He thinks that he is an expert historian. He wants to go to Mumbai to solve the riddle of history. He wants to get the facts of history.",
    },
    {
      qustno: "Q2",
      qust: "What did he notice when he reached Bombay?",
      ans: "When professor Gaitonde reached Bombay he was shocked to see the British buildings named and banks. Most of the employees were Anglo-Indian. The Union Jacks were painted on each carriage. He thought that he had reached British territory.",
    },
    {
      qustno: "Q3",
      qust: "What is the lack of determinism in Quantum Theory?",
      ans: "There is a lack of determinism in Quantum Theory. If we fire a bullet from a source in a definite direction and at a given speed, it will go in a definite direction. But if we fire an electron in a definite direction and a given speed from a source, it won't be in a definite direction. It may be here, there and anywhere. This is called lack of determinism in Quantum Theory.",
    },
    {
      qustno: "Q4",
      qust: '"You neither travelled to the past nor the future. You were in the present experiencing a different world." Explain.',
      ans: "Gangadharpant was thinking about the battle of Panipat. Actually, the Battle of Panipat was fought between the Maratha and Abdali troops in 1761. The Marathas were defeated in the battle. But the professor thought that the Marathas won the battle. Thus, he thought of the past and collision with the truck made him unconscious.",
    },
    {
      qustno: "Q5",
      qust: '"You need some interaction to cause a transition." Explain.',
      ans: "We need some interaction to cause a transition because transition goes from high energy to low energy. As an electron springs from high to low energy it makes transition.",
    },
    {
      qustno: "Q6",
      qust: "Describe the railway station of Victoria Terminus.",
      ans: "The station looked remarkably neat and clean. The staff was mostly made up of Anglo-Indians and Parsees, along with a handful of British officers.",
    },
    {
      qustno: "Q7",
      qust: "Why does professor Gangadharpant decide to go to library?",
      ans: "The professor goes to the Asiatic Library to get the facts of history and the battle of Panipat. He wanted to spend his time there. As a historian, he goes there.",
    },
    {
      qustno: "Q8",
      qust: "What happened with the professor when he goes to Azad Maidan?",
      ans: "The professor had no experience of addressing people. He wanted to deliver a speech there for the battle of Panipat. But the audience were not ready to listen to him. They showered upon him tomatoes, eggs, and other objects. They ejected him from the platform.",
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
            Chapter 5: Stack
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
