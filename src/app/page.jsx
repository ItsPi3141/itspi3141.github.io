"use client";
import { Scroll, ScrollControls, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { outfitJson } from "./threejs/fonts/outfit";

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
						<Text3D font={outfitJson}>ItsPi3141</Text3D>
					</Scroll>
				</ScrollControls>
			</Canvas>
		</div>
	);
}
