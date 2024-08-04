import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/globals.css";

import { Anton } from "next/font/google";
const anton = Anton({ subsets: ["latin"], weight: ["400"] });

import { Container } from "@/lib/bootstrap";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Next.js PokèDex",
	description: "Next.js PokèDex app by Coding in Flow",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={anton.className}>
				<main>
					<Container className="py-4">{children}</Container>
				</main>
			</body>
		</html>
	);
}
