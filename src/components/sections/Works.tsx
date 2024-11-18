"use client";

import {
	easeIn,
	motion,
	type MotionValue,
	useScroll,
	useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const isClient = () => typeof window !== "undefined";

export function Works() {
	const containerRef = useRef<HTMLElement>(null);

	const hvh = isClient() ? window.innerHeight / 2 : 0;
	const vh = isClient() ? window.innerHeight : 0;

	const { scrollY } = useScroll({ target: containerRef });

	const [blur_state_title, setTitleBlur] = useState(0);
	const blur_title = useTransform(scrollY, [0, vh, vh + 400], [0, 0, 20], {
		ease: easeIn,
	});
	const opacity_title = useTransform(
		scrollY,
		[0, hvh - 100, hvh + 100, vh, vh + 400],
		[0, 0, 1, 1, 0],
		{
			ease: easeIn,
		},
	);
	blur_title.on("change", (value) => setTitleBlur(value));

	return (
		<section
			ref={containerRef}
			className="z-10 flex flex-col justify-between gap-24 bg-stone-800 px-4 sm:px-8 w-full h-[calc(200vh+32px)] text-amber-50 overflow-hidden"
		>
			<motion.h1
				style={{
					filter: `blur(${blur_state_title}px)`,
					opacity: opacity_title,
					pointerEvents: opacity_title.get() === 0 ? "none" : "auto",
				}}
				className="top-1/2 right-0 left-0 fixed mx-auto font-light font-outfit text-6xl text-amber-100 text-center"
			>
				Works
			</motion.h1>

			<Card
				scrollY={scrollY}
				cardNum={1}
				imageUrl="/discord_fake_avatar_decorations.png"
				title="Discord Fake Avatar Decorations"
				url="https://discord-decorations.vercel.app"
			/>
			<Card
				scrollY={scrollY}
				cardNum={2}
				imageUrl="/alpaca_electron.png"
				title="Alpaca Electron"
				url="https://github.com/ItsPi3141/alpaca-electron"
			/>
		</section>
	);
}

function Card({
	scrollY,
	cardNum,
	imageUrl,
	title,
	url,
}: {
	scrollY: MotionValue<number>;
	cardNum: number;
	imageUrl: string;
	title: string;
	url: string;
}) {
	const vh = isClient() ? window.innerHeight : 0;
	const qvh = vh / 4;
	const hvh = vh / 2;
	const offset = hvh + cardNum * hvh;

	const stops = [
		offset,
		offset + hvh - qvh,
		offset + hvh - qvh + 1,
		offset + hvh + qvh,
		offset + hvh + qvh + 1,
		offset * 2,
	];

	const display = useTransform(scrollY, [0, 1], ["none", ""]);
	const pointerEvents = useTransform(scrollY, stops, [
		"none",
		"none",
		"",
		"",
		"none",
		"none",
	]);
	const opacity = useTransform(scrollY, stops, [0, 0, 1, 1, 0, 0]);
	const scale = useTransform(scrollY, stops, [1.1, 1.1, 1, 1, 1.1, 1.1]);
	const ytext = useTransform(scrollY, stops, [
		hvh,
		hvh,
		0,
		0,
		hvh * -1,
		hvh * -1,
	]);
	const yimg = useTransform(scrollY, stops, [
		qvh,
		qvh,
		0,
		0,
		qvh * -1,
		qvh * -1,
	]);

	return (
		<motion.a
			style={{
				opacity,
				display,
				transitionProperty: "opacity",
				pointerEvents,
			}}
			href={url}
			target="_blank"
			rel="noreferrer"
			className="top-1/2 left-1/2 fixed opacity-0 w-[90vw] max-w-[960px] origin-center -translate-x-1/2 -translate-y-1/2 duration-500"
		>
			<motion.p
				style={{
					y: ytext,
					transitionProperty: "transform",
				}}
				className="-right-[calc(10vw-32px)] sm:-right-8 -bottom-3 z-50 absolute bg-amber-100/10 backdrop-blur-lg p-2 sm:p-4 rounded-lg font-outfit text-amber-100 text-lg sm:text-3xl md:text-4xl duration-500"
			>
				{title}
			</motion.p>
			<motion.img
				style={{
					scale,
					y: yimg,
					transitionProperty: "filter, transform",
				}}
				// force GPU acceleration
				transformTemplate={({ y, scale }) =>
					`translate3d(0px, ${y}, 0px) scale3d(${scale}, ${scale}, 1)`
				}
				className="shadow-xl rounded-xl duration-500"
				src={imageUrl}
				alt={title}
				width={1000}
				height={1000}
			/>
		</motion.a>
	);
}
