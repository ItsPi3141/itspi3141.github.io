import "./globals.css";

export const metadata = {
	title: "ItsPi3141",
	description: "a website",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }) {
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
					href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className={"antialiased"}>{children}</body>
		</html>
	);
}
