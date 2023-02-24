import Image from "next/image";
import memoji from "../public/memoji.png";
import { useState, CSSProperties } from "react";
import { NextProgressbarSpinner } from "nextjs-progressbar-spinner";

import Home from "./home";

export default function Index() {
    return (
        <>
            <NextProgressbarSpinner />
            <Home />
        </>
    );
}
