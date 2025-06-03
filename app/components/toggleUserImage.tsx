"use client";

import React, { useState } from "react";
import Image from "next/image";

function ToggleImage() {
	const [imageSrc, setImageSrc] = useState("/images/user-black.png");

	const toggleImage = () => {
		setImageSrc((prevSrc) =>
			prevSrc === "/images/user-black.png"
				? "/images/user-white.png"
				: "/images/user-black.png"
		);
	};

	return (
		<Image
			width={25}
			height={25}
			src={imageSrc}
			alt="User"
			onClick={toggleImage}
			style={{ cursor: "pointer" }}
			className="dark:invert cursor-pointer"
		/>
	);
}

export default ToggleImage;
