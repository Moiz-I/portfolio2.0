import Image from "next/image";
import memoji from "../public/memoji.png";

export default function Home() {
    return (
        <>
            {/* <h1>Hello world!</h1>
            <p>
                This is a starter template you can use for Web Dev for Makers
                projects.
            </p>
            <div className="m-32 bg-red-400">
                <p>hello</p>
            </div>
            <img src="/logo.png" alt="Web Dev for Makers Logo" /> */}
            <main className="flex min-h-screen flex-col items-center">
                <div className="flex h-full w-full max-w-[1728px] flex-1 flex-col items-start px-6 lg:flex-row lg:px-16">
                    <div className="flex w-full max-w-full flex-col py-10 lg:sticky lg:top-0 lg:mb-0 lg:mr-16 lg:min-h-screen lg:flex-1 lg:overflow-visible lg:py-16 xl:mr-20">
                        <div className="block1">
                            <div className="flex flex-1 flex-col ml-4">
                                <div className="flex max-w-[450px] items-start lg:-ml-2">
                                    <div className="s-[132px] lg:s-[184px]">
                                        <div className="relative styles_avatar-editor-wrapper__hgyBW h-full w-full">
                                            <div className="rounded-full border-2">
                                                <Image
                                                    src="https://creatorspace.imgix.net/users/cldivy5dg12kcq40yxw70wiub/31poA53bLNnlv8ja-memoji.jpg?w=400&h=400"
                                                    className="h-full w-full rounded-full object-cover"
                                                    width={400}
                                                    height={400}
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-2 w-full max-w-[min(500px,100%)] lg:ml-0 mt-8">
                                    <div className="text-[32px] font-bold leading-[120%] xl:text-[44px]">
                                        <div>
                                            <div>
                                                <p>Moiz</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-[#565656] lg:mt-3 lg:text-xl">
                                        <div>
                                            <div>
                                                <p>🌙 developer + designer</p>
                                                <p>👨‍💻 cs undergrad @ucl</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex mt-6 lg:mt-12 lg:text-xl">
                                        <a
                                            href="https://github.com"
                                            className="text-gray-300 hover:text-gray-900 mr-4 lg:mr-6"
                                        >
                                            <i className="fab fa-github fa-2x"></i>
                                        </a>
                                        <a
                                            href="https://linkedin.com"
                                            className="text-gray-300 hover:text-blue-300 mx-4 lg:mx-6"
                                        >
                                            <i className="fab fa-linkedin fa-2x"></i>
                                        </a>
                                        <a
                                            href="mailto:you@example.com"
                                            className="text-gray-300 hover:text-orange-300 mx-4 lg:mx-6"
                                        >
                                            <i className="fas fa-envelope fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-10 lg:min-h-screen lg:py-16 flex w-full flex-col lg:w-[550px] xl:w-[820px]">
                        <div>
                            <div>
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <div className="w-full md:w-1/2 bg-gray-300 p-4 m-4 rounded-lg drop-shadow-sm">
                                            <p>About</p>
                                        </div>
                                        <div className="w-full md:w-1/2 bg-gray-400 p-4 m-4 rounded-lg drop-shadow-sm">
                                            <p>Blog</p>
                                        </div>
                                    </div>
                                    <div className=" bg-gray-500 p-16 m-4 rounded-lg drop-shadow-sm">
                                        <p className="text-[32px] font-bold text-white">
                                            Projects
                                        </p>
                                    </div>
                                </div>
                                <div className="block2 m-4">block2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
