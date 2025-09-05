import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Chapterten() {
  const data = [
    {
      heading: "input devices",
      inFsp:
        "A device which is used to send the data to the computer are called Input device",
      insep: "It converts teh data into digtal form (0,1)",
      inex: "Mouse Keyboard etc",
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
            Chapter 10: Tuple and Dictionary
          </h1>
          {/* tuple */}
          <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
            Tuple
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
          >
            <li>
              {" "}
              It is a order sequence of different data type and inclosed in a
              round bracket adn separated bu comma .{" "}
            </li>
            <li>
              The elements of a tuple can be(such as) int , float , string ,
              tuple , lsit also.
            </li>
            <li> Element of tuple can be access by using indexing method . </li>
            <li>
              <span> Example :</span>
              T1 = (1,2,3,4,"Ram" , "Dev" , (11,22,33) , 19)
            </li>
          </motion.ul>
          {/* Note */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Note :
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              If we are using a single element in a tuple then the element
              should be follow by comma . If we use element without comma .  It is
              treated as a int data type not tuple data type .
              <p> T1 = (20) {'->'} Tuple data type </p>
               <p> T1 = (20) {'->'} Integer data type </p>
            </motion.ul>
          </div>
          {/* input devies */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Input devices
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>It is a electronic devices.</li>
              <li>
                It takes the data from users , processing and generate the
                output on the screen .
              </li>
              <li>
                Hardware and software together is called computer system .
              </li>
            </motion.ul>
          </div>
          {/* output device  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Output Devices
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                A device which is used to recieve the data from computer is
                called output device
              </li>
              <li>It converts the digital data (0,1) into human form . </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  example :
                </span>
                Monitor , printer
              </li>
            </motion.ul>
          </div>
          {/* evolution of computer  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Evolution of computer
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  500 years ago BC =
                </span>
                Abacus
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1642 =
                </span>
                Pascaline (calculator)
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1834 =
                </span>
                Analytic Engine
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1890 =
                </span>
                Electrical Engine
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1945 =
                </span>
                EDVAC / ENTAC
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1947 =
                </span>
                Trensistors based
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1970 =
                </span>
                Integrated Circuit (IC)
              </li>
            </motion.ul>
          </div>
          {/*  computer system */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Computer System
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                It is used to store a data and instructions ( information )
              </li>
              <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                {" "}
                There are mainly two types of memory{" "}
              </p>
              <span>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1. Primary Memory
                </span>
                <li> It is a volatile (temporary) memory . </li>
              </span>
              <li>
                The data will be remain in a till the power supply is on .
              </li>
              <li>It directly works with the CPU</li>
              <span>
                {/*  secondary */}
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  2. Secondary Memory
                </span>
                <li>
                  {" "}
                  It is a non - voletile memory (permanent) it is store the data
                  for future use .{" "}
                </li>
              </span>
              <span>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  Example :
                </span>
                - Hardisk , pendrive , memory card etc
              </span>
            </motion.ul>
          </div>
          {/*  cache memory  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Cache Memory
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>It is used to speed up a operation of CPU .</li>
            </motion.ul>
          </div>
          {/*  unit of memory  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Unit of Memory
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li> 0 , 1 = Bit </li>
              <li> 4 Bit = 1 Hibble </li>
              <li> 8 Bit = 1 byte </li>
              <li> 1024 bit = 1kb </li>
              <li>1024 kb = 1Mb </li>
              <li> 1024 mb = 1Gb </li>
              <li> 1024 gb = 1Tb </li>
              <li>1024 tb = 1Pb </li>
              <li> 1024 pb = 1Eb </li>
              <li>1024 eb = 1Zb </li>
              <li> 1024 zb = 1Yb </li>
            </motion.ul>
          </div>
          {/*   Data transfeer  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Data transfer between memory and CPU
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                Data are transfered between different component (part) of
                computer system using wire is called bus .{" "}
              </li>
              <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                There are three bypes of bus
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  1. Data bus ={" "}
                </span>
                It is used to transfer data between different components .
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  2. Adress bus ={" "}
                </span>
                It is used to transfer adress between .
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  3. Control bus ={" "}
                </span>
                It is used to communited and control the signal between
                different components of computer .
              </p>
            </motion.ul>
          </div>
          {/*  Cpu / mircor processor signification */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              CPU / Microprocessor Significatoin
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  1. Word Size ={" "}
                </span>
                It is a maximum number of bites that a processor can process at
                a time.
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  2. Memory size ={" "}
                </span>
                Depending on word size of teh ram can be chagne
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  3. Clock Speed ={" "}
                </span>
                It indicate the speed at which the computer can process the
                instructions .
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  4. Cores ={" "}
                </span>
                It is a calculations (calculate) unit of CPU . It has 2,4,8
                cores.
              </p>
            </motion.ul>
          </div>
          {/*  data  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Data
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li> Everything in a computer system is called data . </li>
              <li>
                {" "}
                It can be rawfacts , number (0 to 9) , alphabets , symbols ,
                pictures , audio , radio , etc{" "}
              </li>
            </motion.ul>
          </div>
          {/* Information */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Information
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                When we user converts the raw and unorganised data into a
                meaningfull term is caled a information{" "}
              </li>
            </motion.ul>
          </div>
          {/*  types of data  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Types of Data
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  1. Structure data ={" "}
                </span>
                When data are stored in a table form and follow up specific
                (particular) rule is called structure data.
                <p className="ms-5">
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    example ={" "}
                  </span>{" "}
                  Attendence of the student
                </p>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  2. Unstructure data ={" "}
                </span>
                When data are not organised in a specific formate that is called
                unstrucuure data.
                <p className="ms-5">
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    example ={" "}
                  </span>{" "}
                  Report card , Newspaper
                </p>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  3.Semi structure data ={" "}
                </span>
                Data which have no specific formate but maintain a some rules .
                <p className="ms-5">
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    example ={" "}
                  </span>{" "}
                  E-mail , Documents
                </p>
                <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed  mt-2">
                  {" "}
                  Types of Process of Semi structure data{" "}
                </p>
                <ul>
                  <li>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      Data capturing ={" "}
                    </span>
                    A process of gather (collect) data from different sources is
                    called data capturing .
                  </li>
                  <li>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      Data storage ={" "}
                    </span>
                    A process of storing a data in a storage device (memory) is
                    called data storage .
                  </li>
                  <li>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      Data Retrival ={" "}
                    </span>
                    It involves fetching data from storage device is called data
                    retrival .
                  </li>
                  <li>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      Software ={" "}
                    </span>
                    It is a set of instruction which is return for the specific
                    purpose of task .
                  </li>
                </ul>
              </p>
            </motion.ul>
          </div>
          {/* types of software  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Types of software
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  1. System software ={" "}
                </span>
                A software that provide a basic instruction (function) to
                operate a computer .
                <p className="ms-5">
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    example ={" "}
                  </span>{" "}
                  Operating system , Device Driver
                </p>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  2. Application Software ={" "}
                </span>
                A software which is written for a specific purpose (task)
                accoding to the need of users .
                <p className="ms-5">
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    example ={" "}
                  </span>{" "}
                  M.S Office , Photoshop
                </p>
                <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed  mt-2 ms-4">
                  {" "}
                  It has Two Category of software{" "}
                </p>
                <li className="ms-9">
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2 ">
                    {" "}
                    General purpose ={" "}
                  </span>
                  They are redimed application software that can be used by
                  users as their need (requirements)
                </li>
                <li className="ms-9">
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    Customised Software ={" "}
                  </span>
                  They are customed software that are written for a specific
                  organisation or (individual) .
                </li>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  3. Utility Software ={" "}
                </span>
                A software that is used to maintain the computer system
                <p className="ms-5">
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    example ={" "}
                  </span>{" "}
                  Anitvirus software
                </p>
              </p>
            </motion.ul>
          </div>
          {/* operating system  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              Operating system
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                A software that operate computer system is called operating
                system .
              </li>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  example ={" "}
                </span>
                windows 7 , 8 , 9 ,10
              </p>
            </motion.ul>
          </div>
          {/* Function of Operating system  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Function of operating system
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  1. Process Management ={" "}
                </span>
                The main task of the operating system is to manage a various
                (many) process and get multiple task completed in minimum time
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  2. Memory Management ={" "}
                </span>
                It manage the main memory by keeping the track of every location
                with in the memory as free of occupied .
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  3. File Management ={" "}
                </span>
                It invovles the creation , updation , deletion and protection of
                the files in a secoondary memory .
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  4. Device management ={" "}
                </span>
                It manages a many input and output devices by interacting with
                their related software .
              </p>
            </motion.ul>
          </div>
          {/*  OS  user interface  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              OS users interface
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-[lower-alpha] pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>Command base interface</li>
              <li>Graphical user interface</li>
              <li>Touch based interface</li>
              <li>Voice based interface</li>
            </motion.ul>
          </div>
          {/* programing lagnuage  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              Programing Language
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              A language which are developed to written a cot (instruction)
            </motion.ul>
          </div>
          {/*  translator  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              Language Translator
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              It is used to convert the high level language to low level
              lnaguage (0,1)
            </motion.ul>
          </div>
          {/* properitary Software  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              Proprietary Software
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              A software which has to be purchased is called a proprietary
              software .
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
                  {" "}
                  Example =
                </span>
                MS Office , Windows
              </p>
            </motion.ul>
          </div>
          {/* free software  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              Free Software{" "}
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              A software which are freely available for a use is called free
              software .
            </motion.ul>
          </div>
          {/* open source software  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              Open Source Software
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              A software which are freely available with their software source
              is called a open source software .
            </motion.ul>
          </div>
          {/* FOSS */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              FOSS
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              Free and open source software
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}
