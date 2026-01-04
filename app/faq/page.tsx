"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";


export default function FAQ() {

    const faqs = [
        {
            q: "What is the price range of Indian marble?",
            a: "Indian marble generally starts from ₹50–₹150 per sq.ft for basic range and can go up to ₹800+ depending on quality, thickness and finish."
        },
        {
            q: "Do you provide delivery anywhere in India?",
            a: "Yes — we help arrange transport PAN-India through trusted logistic partners. Transport charges depend on distance and load size."
        },
        {
            q: "How much wastage should I consider while buying marble?",
            a: "Usually 5–10% wastage is common due to cutting and sizing. For designer layouts, wastage may increase slightly."
        },
        {
            q: "Is GST applicable on marble?",
            a: "Yes — GST of 18% is applicable on marble as per government norms."
        },
        {
            q: "Can I visit the yard and personally select slabs?",
            a: "Absolutely — we actually recommend customers to visit and hand-pick slabs as per their choice and budget."
        },
        {
            q: "Do you provide cutting & polishing services?",
            a: "Yes — cutting and polishing support is available depending on requirement and order size."
        },
        {
            q: "What thickness options are available?",
            a: "Common marble thickness includes 16mm, 18mm and 20mm. 18mm is the most widely used for flooring."
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-gray-950 text-white">

            {/* HEADER */}
            <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Frequently Asked Questions
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        FAQs — Ujjain Marble House
                    </h1>

                    <p className="text-gray-300 mt-3 max-w-3xl">
                        Clear & honest answers to common questions about marble pricing, delivery, quality and services.
                    </p>
                </div>
            </section>

            {/* FAQ LIST */}
            <section className="max-w-5xl mx-auto px-4 py-14 space-y-4">

                {faqs.map((f, i) => (
                    <div
                        key={i}
                        className="bg-gray-900/70 border border-gray-800 rounded-xl shadow hover:border-yellow-400/30 hover:shadow-yellow-500/10 transition"
                    >
                        <button
                            className="w-full flex justify-between items-center px-5 py-4 text-left"
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                            <p className="font-medium text-gray-100">{f.q}</p>

                            <ChevronDown
                                className={`transition text-gray-300 ${openIndex === i ? "rotate-180" : ""}`}
                            />
                        </button>

                        <div
                            className={`grid transition-all duration-300 ease-in-out 
                ${openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
              `}
                        >
                            <div className="overflow-hidden px-5 pb-4 text-sm text-gray-400">
                                {f.a}
                            </div>
                        </div>
                    </div>
                ))}

            </section>

            {/* CTA STRIP */}
            <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <h3 className="text-xl font-semibold">
                        Still have a question?
                    </h3>

                    <a
                        href="https://wa.me/+919111112717"
                        className="mt-5 inline-block bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-lg shadow-lg shadow-green-900/30"
                    >
                        Chat on WhatsApp
                    </a>
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
