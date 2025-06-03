import React from "react";
import Link from "next/link";

export default function TopHeader() {
	return (
		<div className="bg-black text-white text-sm w-full h-12 flex justify-center items-center relative overflow-hidden">
			<div className="whitespace-nowrap animate-scroll w-2/3 ">
				<span>
					Summer Sales For All Swim Suit And Free Express Delivery -
					OFF 50%!
					<Link
						href="/order"
						className="underline pl-3"
						aria-label="Shop now for summer sales"
					>
						Shop Now
					</Link>
				</span>
			</div>

			<div className="welcome font-thin text-2xl">You are welcome</div>
		</div>
	);
}

// const TopHeader = () => (
// 	<div className="bg-black text-white text-sm w-full h-12 flex justify-center items-center relative overflow-hidden">
// 		{/* Scrolling announcement */}
// 		<div className="whitespace-nowrap animate-scroll w-2/3">
// 			<span>
// 				Summer Sales For All Swim Suits and Free Express Delivery - OFF
// 				50%!
// 				<Link
// 					href="/order"
// 					className="underline pl-3"
// 					aria-label="Shop now for summer sales"
// 				>
// 					Shop Now
// 				</Link>
// 			</span>
// 		</div>
// 		{/* Flashing welcome message */}
// 		<div className="welcome">You are welcome</div>
// 	</div>
// );

// export default TopHeader;
