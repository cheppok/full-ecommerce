"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export function Carousel2() {
	return (
		<div className="h-80 w-80 border-red-300 border-2 p-3">
			<Carousel slideInterval={1000}>
				<Image
					src="/images/bag.png"
					height={100}
					width={100}
					alt="..."
				/>

				<Image
					src="/images/cloth.png"
					height={300}
					width={200}
					alt="..."
				/>
				<Image
					src="/images/digitalcamera.png"
					height={300}
					width={200}
					alt="..."
				/>
				<Image
					src="/images/gamepad-black.png"
					height={300}
					width={300}
					alt="..."
				/>
			</Carousel>
		</div>
	);
}
