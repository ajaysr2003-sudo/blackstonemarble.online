
import Link from "next/link";
import { Calculator, Ruler, Layers, Home, Package, Weight, Truck, MessageCircle } from "lucide-react";

export const metadata = {
    title: "Marble & Granite Project Calculators | Black Stone Granite & Marble",
    description:
        "Use our free online calculators to estimate flooring marble needed, slab count, truck load capacity, project cost & more for marble & granite work.",
};


export default function CalculatorHome() {

    const tools = [
        {
            title: "Flooring Area Calculator",
            desc: "Enter room size to calculate total marble required.",
            href: "/calculator/flooring",
            icon: <Home className="text-yellow-400" size={28} />
        },
        {
            title: "Tile / Slab Count Calculator",
            desc: "Find out how many tiles/slabs you’ll need.",
            href: "/calculator/tile-count",
            icon: <Layers className="text-blue-400" size={28} />
        },
        {
            title: "Staircase Marble Calculator",
            desc: "Calculate area required for steps.",
            href: "/calculator/staircase",
            icon: <Ruler className="text-green-400" size={28} />
        },
        {
            title: "Kitchen Platform Calculator",
            desc: "Countertop marble area estimation.",
            href: "/calculator/kitchen",
            icon: <Calculator className="text-purple-400" size={28} />
        },
        {
            title: "Material Cost Calculator",
            desc: "Area × rate — GST & wastage support.",
            href: "/calculator/material-cost",
            icon: <Package className="text-pink-400" size={28} />
        },
        {
            title: "Full Project Cost Calculator",
            desc: "Material + labour + polishing estimate.",
            href: "/calculator/full-project-cost",
            icon: <Calculator className="text-orange-400" size={28} />
        },
        {
            title: "Slab Weight Calculator",
            desc: "Weight based on size & thickness.",
            href: "/calculator/slab-weight",
            icon: <Weight className="text-red-400" size={28} />
        },
        {
            title: "Truck / Transport Helper",
            desc: "Estimate truck requirement.",
            href: "/calculator/truck-helper",
            icon: <Truck className="text-lime-400" size={28} />
        }
    ];

    return (
        <main className="min-h-screen bg-gray-950">

            {/* HEADER */}
            <section className="bg-gray-900 text-white border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Marble Calculators
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        Choose a Calculator
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-3xl">
                        Select the type of calculation you want to perform. All tools are designed
                        specially for marble and stone industry use.
                    </p>
                </div>
            </section>

            {/* TOOLS GRID */}
            <section className="max-w-7xl mx-auto px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {tools.map((t, i) => (
                    <Link
                        key={i}
                        href={t.href}
                        className="bg-gray-900/70 border border-gray-800 hover:border-yellow-400/40 
                                   hover:shadow-xl hover:shadow-yellow-400/5 
                                   rounded-xl p-6 transition group"
                    >
                        <div className="flex items-center gap-3">
                            {t.icon}
                            <h3 className="font-semibold text-lg text-white">
                                {t.title}
                            </h3>
                        </div>

                        <p className="text-sm text-gray-400 mt-2">
                            {t.desc}
                        </p>

                        <p className="text-yellow-400 text-sm mt-4 font-medium group-hover:translate-x-1 transition">
                            Open →
                        </p>
                    </Link>
                ))}

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
