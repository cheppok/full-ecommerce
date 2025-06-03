"use client";

import React from "react";
import Header from "../components/header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ToggleImage from "./toggleUserImage";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Header2() {
	const [bgColor, setBgColor] = useState("");

	const toggleBackground = () => {
		setBgColor((prevColor) => (prevColor === "" ? "red" : ""));
	};

	return (
		<div>
			<div className="flex items-center relative ">
				<div className="w-11/12">
					<Header />
				</div>
				<div className="flex h-6 space-x-4 absolute right-16 top-7 ">
					<Link href={""}>
						<Image
							src={"/images/notification.jpg"}
							alt=""
							height={50}
							width={25}
							className="p-0.5 dark:invert transition duration-300"
						/>
					</Link>
					<Link href={""}>
						<Image
							src={"/images/Cart1.jpg"}
							alt=""
							height={50}
							width={25}
							className="dark:invert transition duration-300"
						/>
					</Link>
					<Link href={""}>
						<Collapsible>
							<CollapsibleTrigger>
								<div
									onClick={toggleBackground}
									style={{
										backgroundColor: bgColor,
										height: "30px",
										width: "30px",
										borderRadius: "100%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<ToggleImage />
								</div>
							</CollapsibleTrigger>
							<CollapsibleContent>
								<ul className="  absolute right-0 bg-[#3e2744fb] space-y-4 w-48 text-white text-sm pt-6 pb-4">
									<li className="flex space-x-3 ml-2">
										<Image
											src={"/images/user-white.png"}
											width={20}
											height={15}
											alt="img"
											className="text-white "
										/>
										<span> Manage my account</span>
									</li>

									<li className="flex space-x-3 ml-2">
										<Image
											src={"/images/briefcase-white.png"}
											width={20}
											height={15}
											alt="img"
											className="text-white"
										/>
										<span>my order</span>
									</li>

									<li className="flex space-x-3 ml-2">
										<Image
											src={"/images/star-white.png"}
											width={20}
											height={15}
											alt="img"
											className="text-white"
										/>
										<span>Reviews</span>
									</li>

									<li className="flex space-x-3 ml-2">
										<Image
											src={"/images/cross.png"}
											width={15}
											height={15}
											alt="img"
											className="text-white"
										/>
										<span> Cancellation</span>
									</li>

									<li className="flex space-x-3 ml-2">
										<Image
											src={"/images/logout-2.png"}
											width={15}
											height={15}
											alt="img"
											className="text-white"
										/>
										<span> logout</span>
									</li>
								</ul>
							</CollapsibleContent>
						</Collapsible>
					</Link>
				</div>
			</div>
		</div>
	);
}
