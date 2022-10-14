import styles from "../styles/Home.module.css";
import Form from "../components/Form";
import FormSideSection from "../components/FormSideSection";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className='grid place-items-center mb-20 lg:grid-flow-col grid-flow-row'>
        <div>
          <FormSideSection />
        </div>
        <Form />
      </div>{" "}
    </div>
  );
}
