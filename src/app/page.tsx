"use client";

import { Works } from "@/components/sections/Works";
import { Cover } from "@/components/sections/Cover";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { Socials } from "@/components/sections/Socials";

export default function App() {
	const scroller = useRef<HTMLElement>(null);
	const { scrollY } = useScroll({ target: scroller });

	useMotionValueEvent(scrollY, "change", (n) => {
		if (typeof window === "undefined") return;

		const vh = window.innerHeight;
		const hvh = vh / 2;

		const vw = window.innerWidth;

		let targetClassValue = "";
		if (n > hvh + 2 * vh) {
			if (vw < 420) {
				targetClassValue = "scrollbar-3m";
			} else {
				targetClassValue = "scrollbar-3";
			}
		} else if (n > hvh) {
			targetClassValue = "scrollbar-2";
		} else {
			targetClassValue = "scrollbar-1";
		}

		// determine if scrollbar needs a repaint
		if (
			document.getElementById("scroll-tracker")?.className === targetClassValue
		)
			return;
		document
			.getElementById("scroll-tracker")
			?.setAttribute("class", targetClassValue);

		// force repaint
		document.documentElement.style.overflow = "auto";
		setTimeout(() => {
			document.documentElement.removeAttribute("style");
		}, 0);
	});

	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	return (
		<main ref={scroller} className="bg-blue-50 w-full min-h-screen">
			<Cover />
			<Works />
			<Socials />
		</main>
	);
}
