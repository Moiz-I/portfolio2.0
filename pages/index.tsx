import Image from "next/image";
import memoji from "../public/memoji.png";
import Head from "next/head";

import Home from "./home";

export default function Index() {
    return (
        <>
            <Head>
                <title>Moiz Imran</title>
                <link rel="shortcut icon" href="/grad1.svg" sizes="32x32" />
            </Head>
            <Home />
        </>
    );
}
