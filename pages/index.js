import Head from "next/head";
import styles from "../styles/Home.module.css";
import SimpleCard from "../components/Card";
import TopAppBar from "../components/TopAppBar";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Card from "@material-ui/core/Card";

export default function Home({ notes }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopAppBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Wordup Test Seite 😎</h1>
        {notes.map((note) => {
          return (
            <div key={note._id}>
              <Card></Card>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/notes");
  console.log("promise...");
  const resClone = res.clone();
  const { data } = await resClone.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  console.log(data);
  return {
    props: {
      notes: data,
    },
  };
}
