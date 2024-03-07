import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const monserat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// " bg-main-background-image bg-cover bg-fixed h-screen ";
	return (
		<html lang="en">
			<body className={[monserat.className, " bg-black no-scrollbar"].join("")}>
				{/* <div className="h-full bg-black bg-opacity-70"> */}
				<div className="h-full bg-main-background-image bg-cover bg-fixed ">
					<div className="h-full bg-black bg-opacity-70">
						<Navbar />
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
