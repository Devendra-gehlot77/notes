import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Chapterthree() {
  const qustans = [
    {
      qustno: "Q1",
      qust: " Why has king Tut's body been subjected to repeated scrutiny ?",
      ans: " The king Tut's body has been repeated scrutiny becuase he had died untimely .  It was a mystery to find out how he died  . How old he  when he died .",
    },
    {
      qustno: "Q2",
      qust: "Why howard Carter's investigation was resented ?",
      ans: "  Howard Carter's investigation was resented because he had demaged the mummy and revealed no thing He paid much attention on muraks and treasures and less money . ",
    },
    {
      qustno: "Q3",
      qust: " Why Carter had to chisel away the solidified resins to raise the king's remain?",
      ans: " Carter had to chisel away the solidified resine to raiee the Tut's remains becuase the  ritual resins had hardened the mummy .  The real efforts of human body could not move to coffin the ",
    },
    {
      qustno: "Q4",
      qust: " Why did the Tut's body was buried along with gilded treasure ?  ",
      ans: ' Tut was buried with gilded treasures because in his time, the "royals were wealthy". They believed in "rebirth" and thought that the "departed soul could use the things after life". ',
    },
    {
      qustno: "Q5",
      qust: " Why did the king change his name from Tutankhaten to Tutankhamun?",
      ans: 'King Tut changed his name to Tutankhamun "because he promoted the worship of a major God, Amun". His name "represented  The Living Image of Amun".',
    },
    {
      qustno: "Q6",
      qust: 'What were the deeds that led Ray Johnson to describe Akhenaten as "wacky"?',
      ans: 'Akhenaten was described as "wacky" because he "promoted the worship of Atten" and "moved his religious capital from Thebes to Amarna". He "shocked the country by attacking on major Gods Amun". He also "smashed his images and closed his temples"',
    },
    {
      qustno: "Q7",
      qust: "What were the results of the CT scan?",
      ans: "The results of the CT scan appeared clearly. 1.King Tut's head appeared as 0.62 mm. 2.The neck vertebrae, hands, and rib cage were visible. 3.The transection of skull and head shaped as scattering pixels . ",
    },
    {
      qustno: "Q8",
      qust: " ist the advances in technology that have improved forensic analysis.  ",
      ans: 'The advanced technology has improved forensic analysis because it has "created three-dimensional images of the mummy". Hundreds of "X-ray were done in cross-section".',
    },
    {
      qustno: "Q9",
      qust: ' Explain the statement, "King Tut is one of the first mummies to be scanned-in death, as in life..." .  ',
      ans: 'King Tut is one of the first mummies to be scanned, "in death, as in life, moving really ahead of his countrymen". His mummy was "scanned for the first time in the history". As a king, he was "cheating his people".',
    },
  ];

  const shortans = [
    {
      qustno: "Q1",
      qust: " Who was King Tut ?",
      ans: " King Tut was the last heir of his family. He ruled Egypt for 'over nine years ' ." ,
    },
     {
      qustno: "Q2",
      qust: " When was Tut's tomb discovered and by whom ?",
      ans: "King Tut's tomb was discovered in 1992 by Howard Carter" ,
    },
     {
      qustno: "Q3",
      qust: " What is the Egyptian mummy project ?",
      ans: 'The project started in 2003. It has "recorded 600 mummies so far and is still counting".',
    },
     {
      qustno: "Q4",
      qust: " Who invested the King Tut's tomb after Howard Carter ?",
      ans: "Zahi Hamass investigated the King Tut's tomb after Howard Carter." ,
    },
     {
      qustno: "Q5",
      qust: " Why did Howard Carter find it difficult to remove the coffin ?",
      ans: "It was difficult to remove the coffin because the 'ritual resins had hardened the mummy' ." ,
    },
     {
      qustno: "Q6",
      qust: "Which things were buried along with Tut ?",
      ans: "The 'gold treasure, seasonal fruits and flowers, artifacts, daily use things were buried along with Tut' ." ,
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
            Chapter 3: Discovering : Tut & The Saga Continues
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
          {/* short and important question ansewr */}
          <div>
            <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
              Short answer
            </p>
            {/* questoin answer */}
            {shortans.map((v, i) => {
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
