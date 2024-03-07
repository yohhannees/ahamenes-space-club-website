"use client";
import React, { useState } from "react";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";

function ImageCarousel({ caroselImages }: { caroselImages: string[] }) {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap());

		api.on("select", () => {
			console.log("current");
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<div className="text-white px-32 flex-col items-center justify-center">
            <Carousel setApi={setApi} opts={{
                loop: true,
                duration: 50,
                dragFree: false,
                startIndex: 1,
                
            }} className="w-[100%] flex-col">
				<CarouselContent className="-ml-4 items-center">
					{caroselImages.map((url, index) => {
						return (
							<CarouselItem
								key={url}
								className={cn("pl-4 md:basis-1/2", [
									current == index
										? "w-[800px] h-[400px] lg:basis-1.5/3"
										: "opacity-60 w-[400px] h-[200px] lg:basis-1/3",
								])}
							>
								{current == index ? (
									<Image src={url} alt="event image" width={800} height={400} />
								) : (
									<Image src={url} alt="event image" width={400} height={200} />
								)}
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<div>
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
			<div className="py-2 text-center text-sm text-muted-foreground">
				Slide {current} of {count}
			</div>
		</div>
	);
}

export default ImageCarousel;
