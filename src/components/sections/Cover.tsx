"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const isClient = () => typeof window !== "undefined";

const coverAnimation = {
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 1.5,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export function Cover() {
	const { scrollYProgress } = useScroll();
	const y = useTransform(
		scrollYProgress,
		[0, 1],
		[0, isClient() ? window.innerHeight : 0],
	);

	return (
		<div className="relative z-0 bg-blue-50 bg-dots w-full h-screen overflow-hidden">
			<motion.section
				style={{ y }}
				// force GPU acceleration
				transformTemplate={({ y }) => `translate3d(0px, ${y}, 0px)`}
				className="relative flex flex-col justify-center items-center gap-2 w-full h-full"
				variants={coverAnimation}
				initial="hidden"
				animate="visible"
			>
				<Title />
			</motion.section>
		</div>
	);
}

const titleAnimation = {
	visible: {
		pathLength: 1,
		transition: {
			delayChildren: 0,
			staggerChildren: 0.1,
		},
	},
};
const titleLetterAnimation = {
	hidden: {
		pathLength: 0,
		opacity: 0,
		fillOpacity: -3,
	},
	visible: {
		pathLength: 1.1,
		opacity: 1,
		fillOpacity: 1,
		transition: {
			duration: 1.5,
			ease: "easeOut",
		},
	},
};

function Title() {
	return (
		<motion.svg
			className="z-0 w-[60vw] max-w-[24rem] text-gray-800"
			viewBox="-1 -1 258 53"
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={1}
			//
			variants={titleAnimation}
		>
			<title>ItsPi3141</title>
			<motion.rect
				variants={titleLetterAnimation}
				width="8.3"
				height="50.3"
				strokeDashoffset={10}
			/>
			<motion.polygon
				variants={titleLetterAnimation}
				points="31.2,1.4 23.3,1.4 23.3,15.8 15.1,15.8 15.1,23 23.3,23 23.3,50.3 31.2,50.3 31.2,23 39.5,23 39.5,15.8 31.2,15.8"
			/>
			<motion.path
				variants={titleLetterAnimation}
				d="M52.3,23c0.9-0.5,2.1-0.7,3.7-0.7c1.7,0,3.2,0.3,4.5,0.9c1.3,0.6,2.4,1.6,3.4,2.8l5-5c-1.4-2-3.2-3.4-5.4-4.4
c-2.1-1-4.6-1.5-7.4-1.5c-2.6,0-4.9,0.4-6.8,1.3C47.5,17.2,46,18.5,45,20c-1,1.6-1.5,3.5-1.5,5.7c0,2.1,0.4,3.7,1.3,5
c0.9,1.3,2,2.3,3.3,3.1c1.4,0.7,2.8,1.3,4.3,1.8c1.5,0.4,2.9,0.9,4.3,1.3c1.4,0.4,2.5,0.9,3.3,1.5c0.9,0.6,1.3,1.4,1.3,2.4
c0,1-0.5,1.8-1.4,2.3c-0.9,0.5-2.3,0.8-4,0.8c-2,0-3.7-0.3-5.3-1c-1.6-0.7-2.9-1.7-4.1-3.1l-5,5c1.1,1.3,2.4,2.5,3.9,3.4
c1.5,0.9,3.1,1.7,4.9,2.2c1.8,0.5,3.6,0.8,5.5,0.8c4,0,7.2-1,9.6-2.9c2.3-2,3.5-4.6,3.5-8c0-2.1-0.4-3.8-1.3-5.1
c-0.9-1.3-2-2.4-3.3-3.2c-1.4-0.8-2.8-1.4-4.3-1.9c-1.5-0.5-2.9-0.9-4.3-1.3c-1.4-0.4-2.5-0.8-3.3-1.4C51.4,26.8,51,26,51,25.1
C51,24.2,51.4,23.5,52.3,23z"
			/>
			<motion.path
				variants={titleLetterAnimation}
				d="M103.7,1.9C101.2,0.6,98.3,0,95.2,0H84.8h-2.6h-5.7v50.3h8.3v-19h10.4c3.2,0,6-0.6,8.5-1.9c2.5-1.3,4.5-3.1,6-5.5
c1.5-2.3,2.2-5.1,2.2-8.3s-0.7-5.9-2.2-8.3C108.2,5.1,106.2,3.2,103.7,1.9z M102.4,20.1c-0.8,1.3-1.8,2.3-3.1,2.9
c-1.3,0.7-2.8,1-4.6,1h-10v-17h10c1.7,0,3.2,0.3,4.6,1c1.3,0.7,2.4,1.7,3.1,2.9c0.8,1.3,1.1,2.8,1.1,4.5S103.2,18.9,102.4,20.1z"
			/>
			<motion.path
				variants={titleLetterAnimation}
				d="M122.8,0c-1.3,0-2.5,0.5-3.3,1.4c-0.9,0.9-1.3,2-1.3,3.4c0,1.3,0.4,2.5,1.3,3.4c0.9,0.9,2,1.4,3.3,1.4
c1.4,0,2.5-0.5,3.4-1.4c0.9-0.9,1.3-2,1.3-3.4c0-1.3-0.4-2.5-1.3-3.4C125.3,0.5,124.2,0,122.8,0z"
			/>
			<motion.rect
				variants={titleLetterAnimation}
				x="118.9"
				y="15.8"
				width="7.9"
				height="34.5"
			/>
			<motion.path
				variants={titleLetterAnimation}
				d="M160.4,21.4c-2-1.2-4.1-1.8-6.6-1.9l12.8-14.7V0h-31.1v7.4h19.2l-11.5,13.4v4.9c0.7-0.2,1.5-0.4,2.4-0.5
c0.9-0.1,1.8-0.2,2.7-0.2c2.2,0,4.1,0.4,5.6,1.1c1.6,0.7,2.8,1.8,3.6,3.1c0.8,1.3,1.3,3,1.3,4.9c0,1.8-0.4,3.4-1.3,4.8
c-0.8,1.4-2,2.5-3.5,3.2c-1.5,0.8-3.3,1.1-5.3,1.1c-2.2,0-4.1-0.5-6-1.4c-1.8-0.9-3.2-2.1-4.2-3.7l-5.6,5.6
c1.9,2.3,4.2,4.1,6.9,5.4c2.7,1.2,5.7,1.8,9.1,1.8c3.6,0,6.8-0.7,9.6-2.1c2.7-1.4,4.9-3.3,6.4-5.8c1.5-2.5,2.3-5.4,2.3-8.6
c0-3-0.6-5.6-1.8-7.9S162.4,22.7,160.4,21.4z"
			/>
			<motion.polygon
				variants={titleLetterAnimation}
				points="181.9,0 171.9,0 171.9,7.4 181.9,7.4 181.9,50.3 190.1,50.3 190.1,0 189.3,0 	"
			/>
			<motion.polygon
				variants={titleLetterAnimation}
				points="229.5,17.4 221.4,17.4 221.4,30 207.8,30 224.8,0 215.4,0 197.5,32.3 197.5,37.4 221.4,37.4 221.4,50.3 
229.5,50.3 229.5,37.4 236.5,37.4 236.5,30 229.5,30 	"
			/>
			<motion.polygon
				variants={titleLetterAnimation}
				points="255.3,0 247.9,0 237.8,0 237.8,7.4 247.9,7.4 247.9,50.3 256,50.3 256,0 	"
			/>
		</motion.svg>
	);
}
