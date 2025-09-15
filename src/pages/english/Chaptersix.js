import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Chaptersix() {
  const qustans = [
    {
      qustno: "Q1",
      qust: "Why has the article been titled Silk road?",
      ans: "The article has been titled 'Silk Road' because it is an ancient trade route between India and China. The main item of trade on this route is silk.",
    },
    {
      qustno: "Q2",
      qust: " Tibetan mastiffs were popular in China's imperial court ?",
      ans: "  Tibetan mastiffs were popular in China's imperial court because they were ferocious . They were  hunting dogs. They had massive jaws . They were tamed for security purposes .",
    },
    {
      qustno: "Q3",
      qust: "The author's experience at Hor was in stark contrast to earlier accounts of the place .",
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
            Chapter 6: Silk Road
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
