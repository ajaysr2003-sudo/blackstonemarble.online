"use client";

import { MessageCircle } from "lucide-react";

export const metadata = {
    title: "Terms & Conditions — Black Stone Granite & Marble",
    description:
        "Read the terms & conditions for using the Black Stone Granite & Marble website & services.",
};


export default function Terms() {
    const lastUpdated = "02 Jan 2026";

    return (
        <main className="min-h-screen bg-gray-950 text-gray-300">

            {/* HEADER */}
            <section className="bg-gray-950 text-white border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-14">

                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Terms & Conditions
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        Terms & Conditions — Ujjain Marble House
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-3xl">
                        Please read these terms carefully before using our website or services.
                    </p>

                    <span className="mt-4 inline-block text-xs bg-gray-800 border border-gray-700 text-gray-400 px-3 py-1 rounded-lg">
                        Last updated: {lastUpdated}
                    </span>
                </div>
            </section>

            {/* CONTENT */}
            <section className="max-w-6xl mx-auto px-4 py-12 space-y-7 text-sm leading-relaxed">

                <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl shadow">
                    By accessing or using this website, you agree to these Terms & Conditions.
                    If you do not agree, please do not use this website.
                </div>

                {/* SECTION BLOCKS */}
                {[
                    {
                        title: "Business Nature",
                        text: `Ujjain Marble House is a marble supply business based in India.
            All product images, descriptions and price indications shown on this website are for general information purposes only.`
                    },
                    {
                        title: "Product & Pricing Disclaimer",
                        text: `Marble is a natural product — colour, pattern, thickness and texture may slightly vary from slab to slab.
            Prices may change based on selection, quality, size, finishing and market conditions.
            Final pricing will always be confirmed during enquiry or order placement.`
                    },
                    {
                        title: "Payments & Orders",
                        text: `Orders are processed only after confirmation & mutual agreement.
            Any advance or payment terms will be clearly discussed before order finalisation.`
                    },
                    {
                        title: "Delivery & Transport",
                        text: `Delivery support may be provided through third-party transport partners.
            Transit time and delivery safety are subject to handling by the transporter.
            We always try to assist you in a smooth delivery experience.`
                    },
                    {
                        title: "Returns / Replacement",
                        text: `Since marble is a natural and heavy product, return or exchange is generally not applicable once material is cut, installed or delivered — unless mutually agreed under special circumstances.`
                    },
                    {
                        title: "Website Usage",
                        text: `You agree not to misuse or attempt to harm the website or its content in any manner.
            We reserve the right to update, modify or discontinue any part of the site at any time.`
                    },
                    {
                        title: "Limitation of Liability",
                        text: `While we try to keep information accurate and updated, we do not guarantee that all information on this website is always error-free.
            We are not responsible for any loss arising from website usage or interpretation of information shown here.`
                    },
                    {
                        title: "Changes to These Terms",
                        text: `These Terms & Conditions may be updated from time to time.
            Continued use of the website means you accept the updated terms.`
                    }
                ].map((sec, i) => (
                    <div
                        key={i}
                        className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow"
                    >
                        <h2 className="font-semibold text-lg text-white mb-2">
                            {sec.title}
                        </h2>
                        <p className="text-gray-400 whitespace-pre-line">
                            {sec.text}
                        </p>
                    </div>
                ))}

                {/* CONTACT */}
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow">
                    <h2 className="font-semibold text-lg text-white mb-2">
                        Contact Information
                    </h2>

                    <p className="text-gray-400">
                        For any questions regarding these Terms, contact us at:
                    </p>

                    <p className="mt-2 text-gray-300">
                        <strong>Email:</strong> info@example.com <br />
                        <strong>Phone:</strong> +91 XXXXXXXXXX <br />
                        <strong>Location:</strong> Ujjain, Madhya Pradesh, India
                    </p>
                </div>

            </section>
            {/* FLOATING WHATSAPP */}
            <a
                href="https://wa.me/+919111112717"
                className="fixed bottom-5 right-5 bg-green-600 hover:bg-green-700 transition text-white p-4 rounded-full shadow-xl shadow-green-900/40"
            >
                <MessageCircle />
            </a>
        </main>
    );
}
