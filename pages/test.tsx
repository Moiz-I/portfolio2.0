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
          textPathProps={null}
          tspanProps={{ dy: "12" }}
          ellipseProps={null}
          svgProps={{ className: "rotating-curved-text" }}
        />
        {/* <div className="flex max-w-[450px] items-start lg:-ml-2">
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
              filter:
                "brightness(0) saturate(100%) invert(99%) sepia(96%) saturate(3357%) hue-rotate(3deg) brightness(70%) contrast(89%)",
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
              filter:
                "brightness(0) saturate(100%) invert(69%) sepia(96%) saturate(3357%) hue-rotate(3deg) brightness(70%) contrast(89%)",
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
        <a href="https://github.com/Moiz-I" className="hover:text-slate-500">
          github
        </a>
        |{" "}
        <a href="https://read.cv/moizi" className="hover:text-orange-500">
          cv{" "}
        </a>{" "}
      </div>
    </div>
  );
}
