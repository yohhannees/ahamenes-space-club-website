'use client'
import { motion, scroll, useScroll } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
	return (
		<div className="flex-col text-center items-center justify-center w-full">
			<div className="text-[75px] tracking-[20px] mt-10 font-bold">AHAMENES</div>
			<div className="text-2xl tracking-[20px] text-red-500 font-bold mb-5">
				SPACE CLUB
			</div>
			<div className="w-full flex justify-center">
				<div className="absolute bottom-0 flex gap-4 pl-1">
					<Image src="/assets/Fire.svg" width={90} height={90} />
					<Image src="/assets/Fire.svg" width={90} height={90} />
				</div>
				<div className="absolute">
					<Image src="/assets/Rocket.svg" width={200} height={200} />
				</div>
        <div
          className="absolute bottom-0 flex gap-20"
        >
					<Image src="/assets/smokeLeft.svg" width={240} height={240} />
					<Image src="/assets/smokeRight.svg" width={240} height={240} />
				</div>
			</div>
		</div>
	);
}
