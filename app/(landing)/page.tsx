"use client";
import { motion, scroll, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import ImageCarousel from "../Components/Carousel";
import EmblaCarousel from "../Components/EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

export default function Home() {
	const { scrollYProgress, scrollY } = useScroll();
	const OPTIONS: EmblaOptionsType = { loop: true };
	// useMotionValueEvent(scrollY, "change", (latest) => {
	// 	console.log("Page scroll: ", latest);
	// });

	return (
		<div className="flex-col text-center content-center">
			<div className="text-[75px] tracking-[20px] mt-8 font-bold text-white">
				AHAMENES
			</div>
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
				<div className="absolute bottom-0 flex gap-20">
					<Image src="/assets/smokeLeft.svg" width={440} height={440} />
					<Image src="/assets/smokeRight.svg" width={440} height={440} />
				</div>
			</div>
			<div className="h-[200px] text-2xl mt-[450px] flex-row items-center text-center justify-center text-white">
				<div className="leading-[0px] pt-36">About Ahamenes</div>
				<motion.hr
					style={{ scaleX: scrollYProgress }}
					className={`w-[10%] inline-block`}
				/>
			</div>
			<div className="px-80 text-white">
				The society aims at enhancing the much-required leadership qualities as well
				as interpersonal communication skills by encouraging students to participate
				in and organize various inter and intra college literary events.
			</div>
			<div className="flex justify-between px-[450px] mt-32 text-white">
				<div className="flex-row justify-center items-center">
					<div className="text-sm">Member</div>
					<div className="text-[50px] pl-4">24+</div>
				</div>
				<div className="flex-row justify-center items-center">
					<div className="text-sm">Awards</div>
					<div className="text-[50px] pl-4">10+</div>
				</div>
				<div className="flex-row justify-center items-center">
					<div className="text-sm">Events</div>
					<div className="text-[50px] pl-4">31+</div>
				</div>
			</div>
			<div className="text-center tracking-widest mt-36 text-white">
				WHAT’S IT LIKE WHEN WE HAVE EVENTS
			</div>
			<div className="py-14">
				<div className="text-white">
					<EmblaCarousel
						slides={[
							"/pictures/carouselPictures/event1.jpg",
							"/pictures/carouselPictures/event2.jpg",
							"/pictures/carouselPictures/event3.jpg",
							"/pictures/carouselPictures/event4.jpg",
							"/pictures/carouselPictures/event5.jpg",
						]}
						options={OPTIONS}
					/>
				</div>
			</div>
		</div>
	);
}
