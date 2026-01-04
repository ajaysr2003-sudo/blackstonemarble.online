"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

export default function Gallery() {
    const images = [
        "/gallery/img1.jpeg",
        "/gallery/gallery1.jpeg",
        "/gallery/gallery3.jpeg",
        "/gallery/img3.jpeg",
        "/gallery/gallery5.jpeg",
        "/gallery/img5.jpeg",
        "/gallery/gallery7.jpeg",
        "/gallery/img7.jpeg",
        "/gallery/gallery9.jpeg",
        "/gallery/img9.jpeg",
        "/gallery/gallery11.jpeg",
        "/gallery/img11.jpeg",
        "/gallery/gallery13.jpeg",
        "/gallery/img2.jpeg",
        "/gallery/img13.jpeg",
        "/gallery/gallery2.jpeg",
        "/gallery/img4.jpeg",
        "/gallery/gallery4.jpeg",
        "/gallery/img6.jpeg",
        "/gallery/gallery6.jpeg",
        "/gallery/img8.jpeg",
        "/gallery/gallery8.jpeg",
        "/gallery/img10.jpeg",
        "/gallery/gallery10.jpeg",
        "/gallery/img12.jpeg",
        "/gallery/gallery12.jpeg",
        "/gallery/img14.jpeg",
        "/gallery/img15.jpeg",
    ];

    const [index, setIndex] = useState<number | null>(null);
    const [page, setPage] = useState(1);

    const PER_PAGE = 12;
    const totalPages = Math.ceil(images.length / PER_PAGE);
    const pageImages = images.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    // disable scroll when lightbox open
    useEffect(() => {
        document.body.style.overflow = index !== null ? "hidden" : "auto";
    }, [index]);

    // keyboard support
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIndex(null);
            if (e.key === "ArrowRight" && index !== null && index < images.length - 1)
                setIndex(index + 1);
            if (e.key === "ArrowLeft" && index !== null && index > 0)
                setIndex(index - 1);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [index]);

    return (
        <main className="min-h-screen bg-gray-950 text-white">
            {/* HEADER */}
            <section className="border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Gallery
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        Our Marble Collection
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-2xl">
                        Real photos — premium Indian marble direct from source.
                    </p>
                </div>
            </section>

            {/* GRID */}
            <section className="max-w-7xl mx-auto px-4 py-10 md:py-14">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {pageImages.map((src, i) => (
                        <button
                            key={i}
                            aria-label="Open image preview"
                            className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900 shadow hover:shadow-yellow-500/10 hover:border-yellow-500/30 transition group"
                            onClick={() => setIndex((page - 1) * PER_PAGE + i)}
                        >
                            <div className="relative w-full pb-[75%]">
                                <Image
                                    src={src}
                                    alt="Marble slab"
                                    fill
                                    loading="lazy"
                                    className="object-cover group-hover:scale-105 transition duration-300"
                                    sizes="(max-width:768px) 50vw, (max-width:1200px) 33vw, 25vw"
                                />
                            </div>
                        </button>
                    ))}
                </div>

                {/* PAGINATION */}
                <div className="flex justify-center gap-2 mt-10 flex-wrap">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        aria-label="Previous page"
                        className="px-4 py-2 rounded bg-gray-800 border border-gray-700 disabled:opacity-40"
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Go to page ${i + 1}`}
                            onClick={() => setPage(i + 1)}
                            className={`px-4 py-2 rounded border 
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
                        aria-label="Next page"
                        className="px-4 py-2 rounded bg-gray-800 border border-gray-700 disabled:opacity-40"
                    >
                        Next
                    </button>
                </div>
            </section>

            {/* LIGHTBOX */}
            {index !== null && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center">
                    {/* CLOSE */}
                    <button
                        aria-label="Close preview"
                        onClick={() => setIndex(null)}
                        className="fixed top-4 right-4 md:top-6 md:right-6 
              z-[10050] bg-white/15 hover:bg-white/25 
              text-white p-3 md:p-3.5 rounded-full"
                    >
                        <X size={22} />
                    </button>

                    {/* LEFT */}
                    {index > 0 && (
                        <button
                            aria-label="Previous image"
                            onClick={() => setIndex(index - 1)}
                            className="fixed left-3 md:left-6 top-1/2 -translate-y-1/2
                z-[10050] bg-white/15 hover:bg-white/25 
                p-3 md:p-4 rounded-full text-white"
                        >
                            <ChevronLeft size={26} />
                        </button>
                    )}

                    {/* RIGHT */}
                    {index < images.length - 1 && (
                        <button
                            aria-label="Next image"
                            onClick={() => setIndex(index + 1)}
                            className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2
                z-[10050] bg-white/15 hover:bg-white/25 
                p-3 md:p-4 rounded-full text-white"
                        >
                            <ChevronRight size={26} />
                        </button>
                    )}

                    {/* IMAGE */}
                    <div className="relative w-[94vw] md:w-[90vw] max-w-5xl h-[80vh] z-[10000]">
                        <Image
                            src={images[index]}
                            alt="Zoom view"
                            fill
                            className="object-contain rounded-xl border border-gray-800 shadow-2xl"
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
            )}

            {/* FLOATING WHATSAPP */}
            <a
                href="https://wa.me/+919111112717"
                aria-label="Chat on WhatsApp"
                className="fixed bottom-5 right-5 bg-green-600 hover:bg-green-700 transition text-white p-4 rounded-full shadow-xl shadow-green-900/40"
            >
                <MessageCircle />
            </a>
        </main>
    );
}
