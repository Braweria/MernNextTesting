import Head from "next/head";
import styles from "../styles/Home.module.css";
import TextField from "@material-ui/core/TextField";
import TopAppBar from "../components/TopAppBar";
import Button from "@material-ui/core/Button";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopAppBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Create New Note</h1>
        <form>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="outlined"
          />
          <Button variant="contained" color="primary">
            Create
          </Button>
        </form>
      </main>
    </div>
  );
}
