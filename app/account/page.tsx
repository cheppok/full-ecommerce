"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import SectionTitle from "../components/sectionTitle";
import LargeButton from "../components/largeButton";
import SectionHeading from "../components/sectionHeading";
import Card from "../components/card";
import CardLabel from "../components/cardLabel";
import CardLabel2 from "../components/cardLabel2";
import CategoryCardList from "../components/categoryCardList";
import { useState } from "react";
import Header2 from "../components/header2";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const [isClose, setIsClose] = useState(false);

	const handleToggle2 = () => {
		setIsClose(!isClose);
	};

	return (
		<div className="">
			<section>
				<div className="w-11/12">
					<Header2 />
				</div>

				<div className="flex justify-between mr-32 ml-32 ">
					<div className=" w-[217px]  top-[182px] left-[135px] gap-[16px]  flex flex-col border-r-2 border-gray-300 ">
						<Link href={""} className="pt-10">
							<Collapsible>
								<CollapsibleTrigger onClick={handleToggle}>
									<div className="flex space-x-10">
										<span> Women&#39;s fashion</span>
										{isOpen ? (
											<ChevronDown />
										) : (
											<ChevronRight />
										)}
									</div>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<ul className=" pl-10 absolute left-48 bg-gray-50 space-y-4">
										<li>Women cloth</li>
										<li>Women watch</li>
										<li>Women trousers</li>
										<li>Women jeans</li>
									</ul>
								</CollapsibleContent>
							</Collapsible>
						</Link>

						<Link href={""}>
							<Collapsible>
								<CollapsibleTrigger onClick={handleToggle2}>
									<div className="flex space-x-16">
										<span> Men&#39;s fashion</span>
										{isClose ? (
											<ChevronDown />
										) : (
											<ChevronRight />
										)}
									</div>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<ul className=" pl-10 absolute left-48 bg-gray-50 space-y-4">
										<li>men cloth</li>
										<li>men watch</li>
										<li>men trousers</li>
										<li>men jeans</li>
									</ul>
								</CollapsibleContent>
							</Collapsible>
						</Link>
						<Link href={""}>Electronics</Link>
						<Link href={""}>Home & Lifestyle</Link>
						<Link href={""}>Medicine</Link>
						<Link href={""}>sports & Outdoor</Link>
						<Link href={""}>BabyWomen&#39;s & Toys</Link>
						<Link href={""}>Groceries and Pets</Link>
						<Link href={""}>Health & Beauty</Link>
					</div>

					<div className="w-4/5 h-full top-[182px] flex bg-black text-white mt-10">
						<div className="text w-1/2 text-white flex flex-col pl-20 pt-16 space-y-2">
							<div className="flex space-x-6 items-center pb-4">
								<Image
									src={"/images/icons8-apple-60.png"}
									height={40}
									width={40}
									alt="apple"
								/>
								<span>iphone 14 series</span>
							</div>

							<p className=" text-5xl">Up to 10%</p>
							<p className=" text-5xl">off Voucher</p>
							<div className=" relative pt-8">
								<span className="border-b-[1px] border-gray-500 p-1">
									{" "}
									shopNow{" "}
								</span>

								<Image
									src={"/images/icons8-arrow-32.png"}
									height={30}
									width={30}
									alt="arrow"
									className="absolute top-8 left-24"
								/>
							</div>
						</div>

						<div className="image w-1/2 ">
							<Image
								src={"/images/camera-big.png"}
								width={2000}
								height={200}
								alt="image"
								className="pt-6"
							/>
						</div>
					</div>
				</div>
			</section>

			<SectionTitle name=" Today&#39;s" />
			<div className="flex space-x-32 items-end mr-32 relative">
				<SectionHeading title=" Flash Sales" />
				<ul className="flex">
					<li>
						<h3 className="text-[10px]"> Days</h3>
						<h2 className="text-3xl font-semibold">02 :</h2>
					</li>
					<li>
						<h3 className="text-[10px]">hours</h3>
						<h2 className="text-3xl font-semibold">03 :</h2>
					</li>
					<li>
						<h3 className="text-[10px]">minutes</h3>
						<h2 className="text-3xl font-semibold">04 :</h2>
					</li>
					<li>
						<h3 className="text-[10px]">Seconds</h3>
						<h2 className="text-3xl font-semibold">05 </h2>
					</li>
				</ul>

				<div className="flex space-x-1 absolute right-0 top-2">
					<Link
						href={""}
						className=" rounded-full bg-gray-200 h-8 w-8 flex justify-center items-center "
					>
						<Image
							src={"/images/ArrowLt.png"}
							height={10}
							width={14}
							alt="arrow"
						/>
					</Link>

					<Link
						href={""}
						className=" rounded-full bg-gray-200 h-8 w-8 flex justify-center items-center"
					>
						<Image
							src={"/images/ArrowRt.png"}
							height={10}
							width={15}
							alt="arrow"
						/>
					</Link>
				</div>
			</div>
			<section className="flex justify-between ml-32 mt-6 space-x-8 w-[83vw] overflow-hidden">
				<Card
					name="HAVIT HV-G92 GAMEPAD"
					bgClass="bg-center bg-no-repeat bg-center"
					currentPrice="$200"
					rating="(87)"
					style={{ backgroundImage: "url('/images/GAMEPAD.png')" }}
				/>
				<Card
					name="JAK-900 wired keyboard"
					bgClass="bg-fit bg-no-repeat bg-center"
					currentPrice="$200"
					rating="(87)"
					style={{ backgroundImage: "url('/images/keyboard.png')" }}
				/>
				<Card
					name="LPS LCD Gaming Monitor"
					bgClass="bg-fit bg-no-repeat bg-center"
					currentPrice="$200"
					rating="(87)"
					showNewButton
					style={{ backgroundImage: "url('/images/lcd-tv.png')" }}
				/>
				<Card
					name="5-Series Comfort Chair"
					bgClass="bg-fit bg-no-repeat bg-center"
					currentPrice="$200"
					rating="(87)"
					style={{ backgroundImage: "url('/images/chair.png')" }}
				/>
				<Card
					name="5-Series Comfort Chair"
					bgClass="bg-fit bg-no-repeat bg-center"
					currentPrice="$200"
					rating="(87)"
					style={{ backgroundImage: "url('/images/chair.png')" }}
				/>
			</section>
			<div className="flex justify-center w-full  mt-6">
				<LargeButton name="View All Products" />
			</div>

			<SectionTitle name="categories" />
			<SectionHeading title="Browse By Category" />
			<section className="ml-32 mr-32">
				<div className="flex w-full pt-4 pb-10 relative justify-end">
					<div className="flex space-x-1 absolute right-0 top-2">
						<Link
							href={""}
							className=" rounded-full bg-gray-200 h-8 w-8 flex justify-center items-center "
						>
							<Image
								src={"/images/ArrowLt.png"}
								height={10}
								width={14}
								alt="arrow"
							/>
						</Link>

						<Link
							href={""}
							className=" rounded-full bg-gray-200 h-8 w-8 flex justify-center items-center"
						>
							<Image
								src={"/images/ArrowRt.png"}
								height={10}
								width={15}
								alt="arrow"
							/>
						</Link>
					</div>
				</div>
				<CategoryCardList />
			</section>

			<SectionTitle name="This Month" />
			<SectionHeading title="Best Selling Products" />
			<div className="ml-32 mr-32 mt-4 flex justify-end">
				<LargeButton name="View All" width="w-40" />
			</div>
			<section className="flex justify-between ml-32 mt-6 space-x-8 w-[83vw] overflow-hidden">
				<Card
					name="HAVIT HV-G92 Gamepad"
					bgClass="bg-center bg-no-repeat bg-center"
					oldPrice="$200"
					newPrice="$170"
					rating="(87)"
					style={{ backgroundImage: "url('/images/cloth.png')" }}
				/>
				<Card
					name="A-900 Wired Keyboard"
					bgClass="bg-fit bg-no-repeat bg-center"
					oldPrice="$1130"
					newPrice="$970"
					rating="(87)"
					style={{ backgroundImage: "url('/images/keyboard.png')" }}
				/>
				<Card
					name="IPS LCD Gaming Monitor"
					bgClass="bg-fit bg-no-repeat bg-center"
					oldPrice="$290"
					newPrice="$160"
					rating="(87)"
					style={{ backgroundImage: "url('/images/lcd-tv.png')" }}
				/>
				<Card
					name="Small Bookshelf"
					bgClass="bg-fit bg-no-repeat bg-center"
					oldPrice="$276"
					newPrice="$240"
					rating="(87)"
					style={{
						backgroundImage: "url('/images/small-cupboard.png')",
					}}
				/>
			</section>

			<section className="flex  justify-between mt-20 bg-black mr-32 ml-32 p-16 h-[500px] relative">
				<div className="text-white">
					<p className="text-green-500 text-sm font-semibold tracking-wide">
						Categories
					</p>
					<p className="text-5xl font-semibold pt-10 tracking-wide">
						Enhance Your{" "}
					</p>
					<p className="text-5xl font-semibold pt-3 tracking-wider">
						Music Experience
					</p>
					<div className="flex text-black space-x-6 pt-10">
						<div className="bg-gray-100 rounded-full h-16 w-16 flex flex-col items-center justify-center font-semibold">
							<h2>23</h2>
							<p className="text-xs">Hours</p>
						</div>
						<div className="bg-gray-100 rounded-full h-16 w-16 flex flex-col items-center justify-center font-semibold">
							<h2>05</h2>
							<p className="text-xs">Days</p>
						</div>
						<div className="bg-gray-100 rounded-full h-16 w-16 flex flex-col items-center justify-center font-semibold">
							<h2>55</h2>
							<p className="text-xs">Minutes</p>
						</div>
						<div className="bg-gray-100 rounded-full h-16 w-16 flex flex-col items-center justify-center font-semibold">
							<h2>35</h2>
							<p className="text-xs">Seconds</p>
						</div>
					</div>
					<div className="absolute bottom-16">
						<LargeButton
							name="Buy Now"
							bgColor="bg-green-500"
							width="w-40"
						/>
					</div>
				</div>
				<div className="flex items-center">
					<Image
						src={"/images/boombox.png"}
						height={600}
						width={600}
						alt="boombox"
					/>
				</div>
			</section>

			<SectionTitle name="Our Products" />
			<SectionHeading title="Explore Our Products" />
			<section className="flex justify-between ml-32 mt-12 space-x-8 w-[83vw] overflow-hidden">
				<Card
					name="Breed Dry Dog Food"
					bgClass="bg-center bg-no-repeat bg-center"
					currentPrice="$200"
					rating="(87)"
					style={{ backgroundImage: "url('/images/puppy.png')" }}
				/>
				<Card
					name="CANON EOS DSLR Camera"
					bgClass="bg-fit bg-no-repeat bg-center"
					currentPrice="$200"
					rating="(87)"
					style={{
						backgroundImage: "url('/images/digitalcamera.png')",
					}}
				/>
				<Card
					name="ASUS FHD Gaming Laptop"
					bgClass="bg-fit bg-no-repeat bg-center"
					currentPrice="$200"
					rating="(87)"
					style={{ backgroundImage: "url('/images/laptop.png')" }}
				/>
				<Card
					name="Curology Product Set"
					bgClass="bg-fit bg-no-repeat bg-center"
					currentPrice="$200"
					rating="(87)"
					style={{ backgroundImage: "url('/images/curology.png')" }}
				/>
			</section>
			<section className="flex justify-between ml-32 mt-6 space-x-8 w-[83vw] overflow-hidden">
				<Card
					name="ids Electric car"
					bgClass="bg-center bg-no-repeat bg-center"
					currentPrice="$200"
					rating="(87)"
					showNewButton
					style={{ backgroundImage: "url('/images/redcar.png')" }}
				/>
				<Card
					name="Jr. Zoom Soccer Cleats"
					bgClass="bg-fit bg-no-repeat bg-center"
					currentPrice="$200"
					rating="(87)"
					style={{
						backgroundImage: "url('/images/soccerbooth.png')",
					}}
				/>
				<Card
					name="GT11 Shooter USB Gamepad"
					bgClass="bg-fit bg-no-repeat bg-center"
					currentPrice="$200"
					rating="(87)"
					showNewButton
					style={{
						backgroundImage: "url('/images/gamepad-black.png')",
					}}
				/>
				<Card
					name="Quilted Satin Jacet"
					bgClass="bg-fit bg-no-repeat bg-center"
					currentPrice="$200"
					rating="(87)"
					style={{ backgroundImage: "url('/images/blackjacet.png')" }}
				/>
			</section>
			<div className="flex justify-center mt-10">
				<LargeButton
					name="View All Products"
					bgColor="bg-red-500"
					width="w-48"
					height="h-12"
				/>
			</div>

			<SectionTitle name="Featured" />
			<SectionHeading title="New Arrival" />
			<section className="flex ml-32 mr-32 mt-12 justify-between ">
				<div className=" h-[600px] w-[650px] bg-black rounded-sm relative  ">
					<Image
						src={"/images/p5-playstation.png"}
						height={500}
						width={500}
						alt=""
						className="mt-[100px]"
					/>

					<CardLabel
						name="Play Station 5"
						description="Black and white version of PS5"
						moreDescription="Coming soon"
						shopNow="SHOP NOW"
					/>
				</div>

				<div>
					<div className="flex flex-col h-[600px] w-[650px] space-y-8 ml-8">
						<div className="bg-black h-72 w-full rounded-sm flex justify-end relative">
							<Image
								src={"/images/woman-cap.png"}
								height={450}
								width={450}
								alt=""
							/>
							<CardLabel
								name="Women's Collection"
								description="Featured woman collection that"
								moreDescription="give you another vibe"
								shopNow="SHOP NOW"
							/>
						</div>
						<div className="flex space-x-8 h-72 w-full">
							<div className="bg-black w-80 rounded-sm flex justify-center items-center relative">
								<Image
									src={"/images/speaker.png"}
									height={200}
									width={200}
									alt=""
								/>
								<CardLabel2
									name="Speakers"
									description="Amason wireless speakers"
									shopNow="SHOP NOW"
								/>
							</div>
							<div className="bg-black w-80 rounded-sm flex justify-center items-center relative ">
								<Image
									src={"/images/perfume.png"}
									height={200}
									width={200}
									alt=""
								/>
								<CardLabel2
									name="Play Station 5"
									description="Black and white version of PS5"
									shopNow="SHOP NOW"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
