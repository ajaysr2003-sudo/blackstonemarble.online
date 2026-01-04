// "use client";

import Image from "next/image";
import { Gem, Handshake, ShieldCheck, MapPin, MessageCircle } from "lucide-react";

export const metadata = {
    title: "About Black Stone Granite & Marble — Trusted Marble Supplier",
    description:
        "Learn about Black Stone Granite & Marble — an Indian marble & granite supplier focused on genuine quality, transparent pricing & long-term customer trust.",
};



export default function About() {
    return (
        <main className="min-h-screen bg-gray-950 text-white">

            {/* HEADER */}
            <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        About Us
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        About Black Stone Granite & Marble Suppliers
                    </h1>

                    <p className="text-gray-300 mt-3 max-w-3xl">
                        At Ujjain Marble House, we specialize in providing high-quality Indian marble
                        and granite for residential and commercial projects. With years of experience
                        in the industry, we are committed to helping our customers find the perfect
                        stone that meets their aesthetic and functional needs.
                    </p>
                </div>
            </section>

            {/* STORY */}
            <section className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10">

                <div>
                    <h2 className="text-xl font-semibold mb-4">
                        Our Story
                    </h2>

                    <p className="text-gray-300 text-sm leading-relaxed">
                        Founded in Ujjain, Madhya Pradesh, Ujjain Marble House has been a trusted
                        name in the marble and granite supply industry for over a decade. Our journey
                        began with a simple mission: to provide top-quality natural stone products
                        at competitive prices while ensuring exceptional customer service. <br /> Over the
                        years, we have built strong relationships with quarries and suppliers across
                        India, allowing us to offer a diverse selection of stones to our clients. <br /> Our
                        team of experts is passionate about helping customers choose the right materials
                        for their projects, whether it's for flooring, countertops, wall cladding, or
                        outdoor applications.<br></br> At Ujjain Marble House, we believe in quality, integrity,
                        and customer satisfaction above all else.

                    </p>
                </div>

                <div className="rounded-xl overflow-hidden shadow-xl border border-gray-800 bg-gray-900/40 backdrop-blur h-72">
                    <Image
                        src="/homepage/logo2.jpeg"
                        alt="Marble Yard"
                        fill
                        sizes="(max-width:768px) 100vw, 50vw"
                        className="w-full h-full object-fit"
                        priority
                    />
                </div>

            </section>

            {/* VALUES */}
            <section className="max-w-7xl mx-auto px-4 pb-14">
                <h2 className="text-xl font-semibold mb-6">
                    What We Stand For
                </h2>

                <div className="grid md:grid-cols-3 gap-7">

                    {[
                        {
                            icon: <ShieldCheck className="text-green-400" size={28} />,
                            title: "Transparency",
                            desc: "Clear communication, genuine pricing and honest guidance at every step."
                        },
                        {
                            icon: <Gem className="text-yellow-400" size={28} />,
                            title: "Quality First",
                            desc: "We offer only selected quality material — so your project gets the best finish."
                        },
                        {
                            icon: <Handshake className="text-purple-400" size={28} />,
                            title: "Long-Term Relationships",
                            desc: "Our work doesn’t end at sale — we stay with you till your project completes."
                        }
                    ].map((v, i) => (
                        <div
                            key={i}
                            className="bg-gray-900/70 p-6 rounded-xl border border-gray-800 shadow hover:border-yellow-400/30 hover:shadow-yellow-500/10 transition"
                        >
                            <div className="mb-3">{v.icon}</div>
                            <h3 className="font-semibold text-lg">{v.title}</h3>
                            <p className="text-sm text-gray-400 mt-2">{v.desc}</p>
                        </div>
                    ))}

                </div>
            </section>

            {/* LOCATION */}
            <section className="max-w-7xl mx-auto px-4 pb-14">
                <div className="bg-gray-900/70 border border-gray-800 p-6 rounded-xl shadow flex flex-col md:flex-row gap-5 items-start md:items-center">
                    <MapPin className="text-red-400" size={28} />
                    <div>
                        <h3 className="font-semibold text-lg">
                            Based in Ujjain, Madhya Pradesh
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Serving customers across India with premium marble and granite supplies.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <h3 className="text-xl font-semibold">
                        Want help choosing the right marble?
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
