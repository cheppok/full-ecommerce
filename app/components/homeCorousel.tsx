import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { CardContent, Card } from "@/components/ui/card";
import Image from "next/image";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	// CarouselNext,
	// CarouselPrevious,
} from "@/components/ui/carousel";

const carouselItems = [
	{
		title: "Original beautiful cloth",
		description: "Holiday sales",
		image: "/images/cloth.png",
	},
	{
		title: "Leather Gucci bag",
		description: "Discount on bulk purchase",
		image: "/images/bag.png",
	},
	{
		title: "Game pad",
		description: "xmas sale ",
		image: "/images/gamepad.png",
	},
	{
		title: "perfume",
		description: "long lasting perfume",
		image: "/images/perfume.png",
	},
	{
		title: "multicolor keyboard",
		description: "",
		image: "/images/keyboard.png",
	},
];

export function CarouselPlugin() {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	);

	return (
		<Carousel
			plugins={[plugin.current]}
			className="w-full"
			// onMouseEnter={plugin.current.stop}
			// onMouseLeave={plugin.current.reset}
		>
			<CarouselContent>
				{carouselItems.map((item, index) => (
					<CarouselItem key={index}>
						<div>
							<Card className="w-full  h-96 flex items-center justify-center  ">
								<CardContent className=" flex items-center justify-center  ">
									<div className="m-6">
										<div className="text-4xl text-red-700">
											{item.title}
										</div>
										<div className="text-xl text-green-800 mt-2">
											{item.description}
										</div>
									</div>

									<div className="">
										<Image
											src={item.image}
											height={300}
											width={300}
											alt={item.title}
										/>
									</div>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			{/* <CarouselPrevious /> */}
			{/* <CarouselNext /> */}
		</Carousel>
	);
}

// export function CarouselPlugin() {
// 	const plugin = React.useRef(
// 		Autoplay({ delay: 2000, stopOnInteraction: true })
// 	);

// 	return (
// 		<Carousel
// 			plugins={[plugin.current]}
// 			className="w-full max-w-xs"
// 			onMouseEnter={plugin.current.stop}
// 			onMouseLeave={plugin.current.reset}
// 		>
// 			<CarouselContent>
// 				{Array.from({ length: 5 }).map((_, index) => (
// 					<CarouselItem key={index}>
// 						<div className="p-1">
// 							<div className="image w-1/2 ">
// 								<Image
// 									src={"/images/camera-big.png"}
// 									width={2000}
// 									height={200}
// 									alt="image"
// 									className="pt-6"
// 								/>
// 							</div>
// 						</div>
// 						<div className="p-1">
// 							<div className="image w-1/2 ">
// 								<Image
// 									src={"/images/carousel/carousel-1.png"}
// 									width={2000}
// 									height={200}
// 									alt="image"
// 									className="pt-6"
// 								/>
// 							</div>
// 						</div>
// 					</CarouselItem>
// 				))}
// 			</CarouselContent>
// 			<CarouselPrevious />
// 			<CarouselNext />
// 		</Carousel>
// 	);
// }
