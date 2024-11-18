import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "ItsPi3141",
	description: "a website",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href={`https://fonts.googleapis.com/css2?${[
						"family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900",
						"family=Outfit:wght@100..900",
						"family=Martian+Mono:wght@100..800",
					].join("&")}&display=swap`}
					rel="stylesheet"
				/>
			</head>
			<body>
				<span id="scroll-tracker" className="scrollbar-1" />
				{children}
			</body>
		</html>
	);
}
