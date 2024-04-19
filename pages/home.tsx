// import Image from "next/image";
// import memoji from "../public/memoji.png";

// export default function Home() {
//   return (
//     <>
//       <main className="flex flex-col items-center min-h-screen">
//         <div className="flex h-full w-full max-w-[1728px] flex-1 flex-col items-start px-6 lg:flex-row lg:px-16">
//           <div className="flex flex-col w-full max-w-full py-10 lg:sticky lg:top-0 lg:mb-0 lg:mr-16 lg:min-h-screen lg:flex-1 lg:overflow-visible lg:py-16 xl:mr-20">
//             <div className="block1">
//               <div className="flex flex-col flex-1 ml-4">
//                 <div className="flex max-w-[450px] items-start lg:-ml-2">
//                   <div className="s-[132px] lg:s-[184px]">
//                     <div className="relative w-full h-full styles_avatar-editor-wrapper__hgyBW">
//                       <div className="border-2 rounded-full">
//                         <Image
//                           src="https://creatorspace.imgix.net/users/cldivy5dg12kcq40yxw70wiub/31poA53bLNnlv8ja-memoji.jpg?w=400&h=400"
//                           className="object-cover w-full h-full rounded-full"
//                           width={400}
//                           height={400}
//                           priority
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="ml-2 w-full max-w-[min(500px,100%)] lg:ml-0 mt-8">
//                   <div className="text-[32px] font-bold leading-[120%] xl:text-[44px]">
//                     <div>
//                       <div>
//                         <p>Moiz</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="mt-3 text-[#565656] lg:mt-3 lg:text-xl">
//                     <div>
//                       <div>
//                         <p>🌙 developer + designer</p>
//                         <p>👨‍💻 cs undergrad @ucl</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex mt-6 lg:mt-12 lg:text-xl">
//                     <a
//                       href="https://github.com/moiz-i"
//                       className="mr-4 text-gray-300 hover:text-gray-900 lg:mr-6"
//                     >
//                       <i className="fab fa-github fa-2x"></i>
//                     </a>
//                     <a
//                       href="https://linkedin.com/in/moizimran"
//                       className="mx-4 text-gray-300 hover:text-blue-300 lg:mx-6"
//                     >
//                       <i className="fab fa-linkedin fa-2x"></i>
//                     </a>
//                     <a
//                       href="mailto:sky.moizi9@gmail.com"
//                       className="mx-4 text-gray-300 hover:text-orange-300 lg:mx-6"
//                     >
//                       <i className="fas fa-envelope fa-2x"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="pb-10 lg:min-h-screen lg:py-16 flex w-full flex-col lg:w-[550px] xl:w-[820px]">
//             <div>
//               <div>
//                 <div className="flex flex-col">
//                   <div className="flex flex-row">
//                     <div className="w-full p-4 m-4 bg-gray-300 rounded-lg md:w-1/2 drop-shadow-sm">
//                       <p>About</p>
//                     </div>
//                     <div className="w-full p-4 m-4 bg-gray-400 rounded-lg md:w-1/2 drop-shadow-sm">
//                       <p>Blog</p>
//                     </div>
//                   </div>
//                   <div className="p-16 m-4 bg-gray-500 rounded-lg drop-shadow-sm">
//                     <p className="text-[32px] font-bold text-white">Projects</p>
//                   </div>
//                 </div>
//                 <div className="m-4 block2">block2</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
import ReactCurvedText from "react-curved-text";
import Image from "next/image";
import { Velustro } from "uvcanvas";

export default function Test() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
            <div className="flex justify-center">
                <ReactCurvedText
                    width={300}
                    height={300}
                    cx={150}
                    cy={150}
                    rx={100}
                    ry={100}
                    startOffset={0}
                    reversed={false}
                    text="Moiz Imran 2023  ✦  Moiz Imran 2023 ✦ "
                    textProps={{ style: { fontSize: "33" } }}
                    textPathProps={{}}
                    tspanProps={{ dy: "12" }}
                    ellipseProps={{}}
                    svgProps={{ className: "rotating-curved-text" }}
                />
                {/* <div className="flex max-w-[450px] items-start  lg:-ml-2">
            <div className="s-[132px] lg:s-[184px]">
              <div className="relative w-full h-full styles_avatar-editor-wrapper__hgyBW">
                <div className="border-2 rounded-full">
                  <Image
                    src="https://creatorspace.imgix.net/users/cldivy5dg12kcq40yxw70wiub/31poA53bLNnlv8ja-memoji.jpg?w=400&h=400"
                    className="object-cover w-full h-full rounded-full"
                    width={400}
                    height={400}
                    priority
                  />
                </div>
              </div>
            </div>
          </div> */}
            </div>
            <main className="flex flex-col items-center justify-center gap-2 lg:pt-[200px] md:pt-[100px] pt-[50px]">
                {/* <span className="flex gap-1 text-6xl font-instrument-serif">
          <div className="italic">Hi,</div>
          <div>I'm</div>
          <div className="">Moiz👋</div>
        </span> */}
                <div>
                    <Velustro />
                </div>
                <div className="py-3 text-5xl lg:text-6xl font-instrument-serif">
                    Hi, I'm Moiz👋
                </div>
                <span className="flex gap-1 text-xl lg:text-3xl">
                    {/* <div className="underline decoration-slate-200 decoration-2 underline-offset-[3px] hover:no-underline hover:bg-squiggle">
            Hover over me
          </div> */}
                    <div className="font-instrument-serif">I make</div>
                    <div
                        className="text-red-200 font-instrument-serif underline decoration-blue-700 decoration-2 underline-offset-[3px] hover:no-underline hover:bg-squiggle"
                        style={{
                            WebkitFilter:
                                "brightness(0) saturate(100%) invert(19%) sepia(96%) saturate(7357%) hue-rotate(2deg) brightness(90%) contrast(89%)",
                            filter: "brightness(0) saturate(100%) invert(99%) sepia(96%) saturate(3357%) hue-rotate(3deg) brightness(70%) contrast(89%)",
                        }}
                    >
                        <a href="/projects">things</a>
                    </div>
                    <div className="italic font-instrument-serif">
                        , mostly with code.
                    </div>
                </span>
                <div className="flex gap-1 text-xl lg:text-3xl font-instrument-serif">
                    I'm a full-stack developer,{" "}
                    <div
                        className="italic text-red-200 font-instrument-serif underline decoration-blue-700 decoration-2 underline-offset-[3px] hover:no-underline hover:bg-squiggle"
                        style={{
                            WebkitFilter:
                                "brightness(0) saturate(100%) invert(19%) sepia(96%) saturate(7357%) hue-rotate(2deg) brightness(90%) contrast(89%)",
                            filter: "brightness(0) saturate(100%) invert(69%) sepia(96%) saturate(3357%) hue-rotate(3deg) brightness(70%) contrast(89%)",
                        }}
                    >
                        <a href="/concepts">designer</a>
                    </div>
                    , and student.
                </div>
                <span className="flex gap-1 text-xl lg:text-3xl font-instrument-serif">
                    I also{" "}
                    <div className="relative after:absolute text-violet-700 after:bg-violet-400 after:bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-30">
                        <a href="/blog">write</a>
                    </div>{" "}
                    stuff
                </span>
            </main>
            <div className="flex justify-center gap-1 mt-12 font-instrument-serif">
                <a
                    href="https://www.linkedin.com/in/moizimran"
                    className="hover:text-blue-500"
                >
                    linkedin
                </a>{" "}
                |{" "}
                <a
                    href="https://github.com/Moiz-I"
                    className="hover:text-slate-500"
                >
                    github
                </a>
                |{" "}
                <a
                    href="https://read.cv/moizi"
                    className="hover:text-orange-500"
                >
                    cv{" "}
                </a>{" "}
            </div>
        </div>
    );
}
