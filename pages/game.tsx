import Script from "next/script";
import Image from "next/image";

export default function Game() {
    return (
        <div className="flex items-center justify-center p-1 m-5 bg-green-100 rounded-md">
            <span className="flex gap-1">
                <p className="text-2xl font-instrument-serif">
                    🌱 subscribe below to know when the game releases
                </p>
                <p className="text-2xl italic font-instrument-serif">
                    (very soon)
                </p>
            </span>
            <div>
                <Script
                    src="https://moizlabs.ck.page/5ae4648a1c/index.js"
                    data-uid="5ae4648a1c"
                    strategy="lazyOnload"
                />
            </div>
            <Image src="/sprite.gif" width={50} height={50} />
        </div>
    );
}
