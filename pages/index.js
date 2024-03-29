import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ManualHeader from "../components/ManualHeader";

export default function Home() {
    return (
        <>
            <Head>
                <title>Raffle Smart Contract</title>
                <meta name="description" content="Our raffle smart contract" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ManualHeader />
            Haizy!
        </>
    );
}
