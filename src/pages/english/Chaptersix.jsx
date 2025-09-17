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
      qust: "The author's experience at Hor was in stark contract to earlier accounts of the place  .",
      ans: " The author's experience at Hor was in stark contrast because he had read several accounts about the security of the place and its water . But the author did not notice any kind of sancity there . There were only hears of riddle and refuge . ",
    },
    {
      qustno: "Q4",
      qust: "The author was disappointed with Darchen ?",
      ans: " The author was disappointed with Darchen because he caught a cold. He was gasping for oxygen .  His physical condition was not good . He noticed that the town was full of rubbish , dust of ice rocks and other stuff . There was not any sancity there .",
    },
    {
      qustno: "Q5",
      qust: "The author thaught that his positive thinking strategy worked well after all . ",
      ans: " The author's positive thinking strategy worked well after all. He was thinking about a companion for his journey and he met Norbu there. He wanted to complete his pilgrimage. ",
    },
    {
      qustno: "Q6",
      qust: "The purpore of the author journey to mount kailash . ",
      ans: "The author's purpose for the journey to Mount Kailash was to complete his pilgrimage. Mount Kailash is considered a holy place in Hindu cosmology. His purpose was also to write about the journey and adventure",
    },
    {
      qustno: "Q7",
      qust: " The author's physical condition in Darchen .",
      ans: " The autor caught cold at darchen . One os is nostrils was blocked . When he lay down to sleep . He woke up abruptly . He was gasping for oxygen and his chest was heavy. His physical condition was not good at all .  ",
    },
    {
      qustno: "Q8",
      qust: "The authar meeting with norku .",
      ans: "The author's meeting with Norbu was a turning point. The author was waiting for someone and he met Norbu there, who was also a pilgrim and was writing papers about Mount Kailash.",
    },
    {
      qustno: "Q9",
      qust: "Tsetan's  support to the auother during the journey .  ",
      ans: "Tsetan was a car driver and an expert in driving on rocky and ice-layered roads. When the author caught a cold, Tsetan took him to a medical college. He was very helpful and generous.",
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
