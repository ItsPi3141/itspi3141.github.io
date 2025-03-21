"use client";
import { Scroll, ScrollControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
	return (
		<div className="bg-black w-screen h-screen">
			<Canvas>
				<ScrollControls
					pages={3}
					damping={0.25}
					style={{
						scrollbarWidth: "none",
					}}
				>
					<Scroll>
						<Text>ItsPi3141</Text>
					</Scroll>
				</ScrollControls>
			</Canvas>
		</div>
	);
}
