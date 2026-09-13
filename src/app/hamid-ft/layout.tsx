import type { Metadata } from "next";
import type { ReactNode } from "react";

import { createRouteMetadata } from "../seo";
import { getRequestLocale } from "../seo-server";

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getRequestLocale();

	return createRouteMetadata({
		title: {
			en: "Hamid FT Portfolio",
			fa: "پورتفولیوی حمید فتاحی",
		},
		description: {
			en: "Cross-platform product portfolio for Hamid Fattahi, Moonlancer co-founder, covering Rust and Tauri applications for POS, payments, BNPL, kiosks, and retail operations.",
			fa: "پورتفولیوی حمید فتاحی، هم‌بنیان‌گذار Moonlancer، با تمرکز بر اپلیکیشن‌های چندسکویی Rust و Tauri برای POS، پرداخت، خرید اعتباری، کیوسک و عملیات خرده‌فروشی.",
		},
		path: "/hamid-ft",
		keywords: [
			"Hamid FT",
			"Moonlancer co-founder",
			"cross-platform developer",
			"Rust",
			"Tauri",
			"POS",
			"BNPL",
			"kiosk app",
		],
		locale,
	});
}

export default function HamidFtLayout({ children }: { children: ReactNode }) {
	return children;
}
