import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>ResultRise</title>
            </Head>
            <main>
                <div className={styles.container}>
                    <div className={styles.main}>
                        <h1 className={styles.title} >ResultRise</h1>
                        <p className="text-center">
                            A platform for students to get their results
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
