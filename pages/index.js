import styles from "../styles/Home.module.css";
import Form from "../components/Form";
import FormSideSection from "../components/FormSideSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={`${""}${styles.container}`}>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {
            scale: 1,
            opacity: 0.0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.1,
            },
          },
        }}>
        <div className='grid pt-20 place-items-center mb-20 lg:grid-flow-col grid-flow-row'>
          <div>
            <FormSideSection />
          </div>
          <Form />
        </div>{" "}
      </motion.div>
    </div>
  );
}
