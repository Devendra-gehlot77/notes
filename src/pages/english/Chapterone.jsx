import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Chapterone() {
  const qustans = [
    {
      qustno: "Q1",
      qust: " Why did the author's grandmother not like the music lesson ?",
      ans: "   According to the author's grandmother , music has lend associations . It is the menopoly of harlots and beggars . It is not meant for gentle folk .",
    },
    {
      qustno: "Q2",
      qust: "  Why did the grandmother not like the english lessons ? // or Three rearons why the author's grandmother was disturbed when he started going to the city school",
      ans: " The grandmother was   disturbed when the author went to the city school because there was no teacting of God and scriptures . She did not believe in things that they taught him in school.",
    },
    {
      qustno: "Q3",
      qust: "   How did grandmother spend her time in city house ? // or Three ways in which the author grandmother spent her days after he graw up?",
      ans: " Tn city house the grandmother spend her most of time with spinning wheel and reciting prayer . She would feed  the sparrow in the backyard for half an hour in the Afternoon.",
    },
    {
      qustno: "Q4",
      qust: "   The old way in which the author's grandmother behaved just before she died. ",
      ans: " The grandmother got an old drum . She collcted the women of her nighbourhood and sang the song of home. Coming warriors . She did not pray.",
    },
    {
      qustno: "Q5",
      qust: "    The way in which the sparrows expressed their sorrow when the author's grandmother died . ",
      ans: "  When the author's grandmother died, thousand of sparrows sat scattered on the floor.That day there was no chirrupings . They did not take notice of bread bits which were thrown to them. When her corpse was carried off They flew amay ",
    },
    {
      qustno: "Q6",
      qust: "     How did the author' grandfather look like ? ",
      ans: "  His grandfather wore a big turban and loose fitting clothes .He had big white beard that cowered the best part of his Chest. He losked as if the was hundred years old and had lots and lots of grandchild . ",
    },
    {
      qustno: "Q7",
      qust: "  How did the qrandmother look like ? ",
      ans: "  His grandmother was short fat and slightly bent . Her face had a criss-cross of wrinkled . Her silver locks scattered on her pale face . Her lips constantly moved in inaudible prayer . She Hobbled the house resting one hand on her waist and other telling the beads of her roasary ",
    },
    {
      qustno: "Q8",
      qust: "   The three phase of the author's relationchip with his grandmother before he left the country to study .  ",
      ans: "  when the author went to abroad for study he thought  that his granny would be upset  all sentimental but that was not so .she did not show any emotion. She went to leave him station . She kissed him but she had till no time to talk. ",
    },
     {
      qustno: "Q9",
      qust: "    How did grandmother help the author in his Childhood ?  ",
      ans: " She would wake him up get him ready for school the bathed him and dressed him while reciting prayer. She would plaster his wodder slate with yellow chalks. She tied his state Inkpot and red pen in a bundle . she would go school with him .  ",
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
            Chapter 1: The Portrait of a lady
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
