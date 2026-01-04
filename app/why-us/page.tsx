// "use client";

import { BadgeCheck, Handshake, ShieldCheck, Truck, Gem, HeartHandshake, MessageCircle } from "lucide-react";

export const metadata = {
    title: "Why Choose Black Stone Granite & Marble",
    description:
        "We provide honest pricing, handpicked stone quality, transparent communication & PAN-India delivery support — making your marble buying experience smooth & reliable.",
};


export default function WhyUs() {
    return (
        <main className="min-h-screen bg-gray-950 text-gray-300">

            {/* HEADER */}
            <section className="bg-gray-950 text-white border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-14">

                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Why Choose Us
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        Why Customers Trust Ujjain Marble House
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-3xl">
                        We focus on quality, transparency and service — so that your marble buying experience is smooth, honest and worry-free.
                    </p>
                </div>
            </section>

            {/* POINTS */}
            <section className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-7">

                {[
                    {
                        icon: <ShieldCheck className="text-green-400" size={28} />,
                        title: "Honest & Transparent Pricing",
                        desc: "No hidden charges. Clear communication & genuine rates you can trust."
                    },
                    {
                        icon: <Gem className="text-yellow-400" size={28} />,
                        title: "Handpicked Stone Quality",
                        desc: "Every slab is carefully selected — so you always receive the best quality."
                    },
                    {
                        icon: <Truck className="text-blue-400" size={28} />,
                        title: "Pan-India Delivery Support",
                        desc: "We help arrange safe & reliable delivery anywhere across India."
                    },
                    {
                        icon: <Handshake className="text-purple-400" size={28} />,
                        title: "Customer-First Approach",
                        desc: "We believe in building long-term relationships — not just sales."
                    },
                    {
                        icon: <BadgeCheck className="text-green-400" size={28} />,
                        title: "Direct-from-Source Supply",
                        desc: "Better pricing, better quality and full control over your selection."
                    },
                    {
                        icon: <HeartHandshake className="text-red-400" size={28} />,
                        title: "Guidance & Support",
                        desc: "Confused between options? We personally help you choose the right stone."
                    }
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-gray-900/70 border border-gray-800 backdrop-blur p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition"
                    >
                        <div className="mb-3 inline-flex p-3 rounded-xl bg-gray-800 border border-gray-700 shadow">
                            {item.icon}
                        </div>

                        <h3 className="font-semibold text-lg text-white">
                            {item.title}
                        </h3>

                        <p className="text-sm text-gray-400 mt-2">
                            {item.desc}
                        </p>
                    </div>
                ))}

            </section>

            {/* TRUST STRIP */}
            <section className="bg-gray-950 text-white border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-14 text-center">

                    <h2 className="text-2xl font-semibold">
                        We believe — trust is earned, not claimed.
                    </h2>

                    <p className="text-gray-400 mt-2 text-sm max-w-2xl mx-auto">
                        That’s why we focus on quality, fair pricing and genuine customer support — so your experience stays smooth from enquiry to delivery.
                    </p>

                    <a
                        href="https://wa.me/+919111112717"
                        className="mt-6 inline-block bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-lg shadow shadow-green-900/40"
                    >
                        Chat With Us on WhatsApp
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
