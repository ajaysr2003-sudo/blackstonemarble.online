"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Products() {
    const products = [
        { name: "Makrana White Marble Slab", img: "/products/product1.jpeg", tag: "Premium White Slab" },
        { name: "Premium White Marble Temple", img: "/products/product8.jpeg", tag: "Best Seller Temple" },
        { name: "Makrana Pure White Slab", img: "/products/product7.jpeg", tag: "High Gloss Finish" },
        { name: "White Marble Home Temple", img: "/products/product9.jpeg", tag: "Elegant Temple" },
        { name: "Superior White Slab", img: "/products/product6.jpeg", tag: "Top Quality Slab" },
        { name: "Designer Marble Temple", img: "/products/product10.jpeg", tag: "Crafted Temple" },
        { name: "Makrana Premium Slab", img: "/products/product5.jpeg", tag: "Luxury Grade" },
        { name: "Carved White Marble Temple", img: "/products/product11.jpeg", tag: "Handcrafted Temple" },
        { name: "White Polished Slab", img: "/products/product4.jpeg", tag: "Gloss Finish" },
        { name: "Premium Temple Design", img: "/products/product12.jpeg", tag: "Premium Temple" },
        { name: "Classic White Marble Slab", img: "/products/product3.jpeg", tag: "Classic Finish" },
        { name: "Designer White Temple", img: "/products/product13.jpeg", tag: "Designer Temple" },

        { name: "Makrana White Marble", img: "/products/marble-1.jpg", tag: "Premium Quality" },
        { name: "Green Marble", img: "/products/marble-2.jpg", tag: "Popular Stone" },
        { name: "Katni Marble", img: "/products/marble-3.jpg", tag: "Elegant Look" },
        { name: "Rajasthan White Marble", img: "/products/marble-4.jpg", tag: "High Demand" },
        { name: "Agaria White Marble", img: "/products/marble-5.jpg", tag: "Top Grade" },
        { name: "Brown Marble", img: "/products/marble-6.jpg", tag: "Durable & Stylish" },

        { name: "Black Galaxy Granite", img: "/products/granite-1.jpeg", tag: "Luxury Granite" },
        { name: "Absolute Black Granite", img: "/products/granite-2.jpeg", tag: "Premium Finish" },
        { name: "Kashmir White Granite", img: "/products/granite-3.jpeg", tag: "Elegant Surface" },
        { name: "Ubatuba Granite", img: "/products/granite-4.jpeg", tag: "High Polish" },
        { name: "Tan Brown Granite", img: "/products/granite-5.jpeg", tag: "Rich Texture" },
        { name: "Colonial White Granite", img: "/products/granite-6.jpeg", tag: "Trending Choice" }
    ];

    const PER_PAGE = 18;
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(products.length / PER_PAGE);
    const pageProducts = products.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    return (
        <main className="min-h-screen bg-gray-950 text-gray-300">

            {/* HEADER — Keep this above the fold light */}
            <section className="border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Our Collection
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Explore Premium Indian Marble & Granite Stones
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-2xl">
                        Handpicked stones with the finest finish, honest pricing and quality you can trust.
                    </p>
                </div>
            </section>

            {/* GRID */}
            <section className="max-w-7xl mx-auto px-4 py-14">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">

                    {pageProducts.map((p, i) => (
                        <article
                            key={i}
                            className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow hover:shadow-yellow-500/5 hover:-translate-y-0.5 transition"
                        >

                            {/* FIXED RATIO BOX — NO CLS */}
                            <div className="relative w-full pb-[70%]">
                                <Image
                                    src={p.img}
                                    alt={`${p.name} — ${p.tag}`}
                                    fill
                                    loading="lazy"
                                    quality={75}
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         33vw"
                                />

                                <span className="absolute top-3 left-3 text-xs bg-yellow-300/90 text-black px-2 py-1 rounded-md font-medium">
                                    {p.tag}
                                </span>
                            </div>

                            <div className="p-5">
                                <h3 className="font-semibold text-lg text-white">
                                    {p.name}
                                </h3>

                                <p className="text-sm text-gray-400 mt-1">
                                    Available in multiple sizes & finishes.
                                </p>

                                <a
                                    aria-label={`Get best price for ${p.name} on WhatsApp`}
                                    href="https://wa.me/919111112717"
                                    className="mt-4 inline-block text-sm bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded-lg"
                                >
                                    Get Best Price
                                </a>
                            </div>
                        </article>
                    ))}

                </div>

                {/* PAGINATION */}
                <div className="flex justify-center gap-2 mt-10 flex-wrap">

                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className="px-3 py-1 rounded bg-gray-800 border border-gray-700 disabled:opacity-40"
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`px-3 py-1 rounded border 
              ${page === i + 1
                                    ? "bg-yellow-500 text-black border-yellow-500"
                                    : "bg-gray-800 border-gray-700"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                        className="px-3 py-1 rounded bg-gray-800 border border-gray-700 disabled:opacity-40"
                    >
                        Next
                    </button>

                </div>
            </section>

            {/* FLOATING WHATSAPP */}
            <a
                aria-label="Chat with Black Stone Granite & Marble on WhatsApp"
                href="https://wa.me/919111112717"
                className="fixed bottom-5 right-5 bg-green-600 hover:bg-green-700 transition text-white p-4 rounded-full shadow-lg"
                rel="noopener noreferrer"
            >
                <MessageCircle />
            </a>

        </main>
    );
}
