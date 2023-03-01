import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from "../assets/project-1.png"
import project2 from "../assets/project-2.png"
import project3 from "../assets/project-3.png"
import project4 from "../assets/project-4.png"
import project5 from "../assets/project-5.png"
import project6 from "../assets/project-6.png"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, projectTitle, subtitle, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-neutral-900 z-30 flex flex-col justify-center items-center text-center p-16 text-white border-8`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <a href={link}>
        <p className="text-2xl font-playfair">{projectTitle}</p>
        <p className="mt-4">
          {subtitle}
        </p>
        </a>
      </div>
      <img src={title} alt={title} className="w-400 max-h-400 object-cover aspect-video border-8 border-deep-blue"/>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        In developing these applications, I've been involved in every stage of the process, from planning and design to implementation and testing. 
        I've also worked with databases and APIs to integrate external data into my applications.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 w-400 h-400"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          
          <Project link="https://github.com/Jeyceedee/Generating-Shakespearean-Poetry-using-Markov-Chain-and-LSTM" title={project1} projectTitle="Shakespearean Poetry Generator" subtitle="It is a web application that uses a combination of Markov chain and Long Short-Term Memory 
          (LSTM) models to generate text that mimics the style and structure of Shakespeare's writing." />
          <Project link="https://github.com/Jeyceedee/Sixth-Sense" title={project2} projectTitle="Sixth Sense" subtitle="it is a web application that utilized an Xception model, Data Augmentation, and Image Processing for the classification of 4 tumors:
          meningioma, pituitary, glioma, or no tumor."/>

          {/* ROW 2 */}
          <Project link="" title={project3} projectTitle="Twitter Sentiment Analysis" subtitle="This project is about Twitter Sentiment Analysis towards candidates in the 2022 Philippine Election using VADER"/>
          <Project link="https://github.com/Jeyceedee/TUPOpenstat" title={project4} projectTitle="TUPOpenStat" subtitle="It is a web application project that aims to solve the problem of TUP students and staff by creating a platform where they can gather data and interpret the collected data to have information that will serve as a decision-making tool.
"/>
          <Project link="https://cloud.anylogic.com/model/e3ad123b-dd36-4b4e-86bb-d35bfdc741c4?mode=SETTINGS&tab=GENERAL" title={project5} projectTitle="COVID-19 Simulation" subtitle="A hybrid simulation model using AnyLogic that visualized a drive-through mass vaccination site using agent-based and discrete-event techniques."/>

          {/* ROW 3 */}
          <Project link="https://github.com/DevRSC/rc-iskonijuan" title={project6} projectTitle="Isko ni Juan" subtitle="It is a mobile application that aims to create a mobile application where students can make themselves known and be given a chance to be a scholar and for small-scale philanthropists to be able to help students in need in any way that they can."/>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
