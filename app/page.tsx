// "use client";

export const metadata = {
  title:
    "Indian Marble & Granite Supplier in India | Black Stone Granite & Marble",
  description:
    "Premium Makrana marble, white marble slabs & granite supplied across India with honest pricing & PAN-India delivery.",
  alternates: {
    canonical: "https://blackstonemarble.online",
  },
};


import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <p className="text-yellow-400 font-semibold tracking-wide mb-2">
              Black Stone Marble & Granite
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Premium Indian Marble & Granite <br /> Direct From Source
            </h1>

            <p className="mt-4 text-gray-300">
              Honest pricing • Premium quality • Pan-India delivery support
            </p>

            <div className="flex gap-3 mt-7">
              <a
                href="https://wa.me/+919111112717"
                className="bg-green-600 hover:bg-green-700 transition text-white px-5 py-3 rounded-lg flex items-center gap-2 text-sm shadow-lg shadow-green-900/30"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>

              <a
                href="tel:+919111112717"
                className="border border-gray-500 hover:border-yellow-400 transition px-5 py-3 rounded-lg flex items-center gap-2 text-sm"
              >
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-800 bg-gray-900/40 backdrop-blur relative h-80">
            <Image
              src="/homepage/blackStoneMarble.jpeg"
              alt="Marble Yard"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>


      {/* PRODUCT HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Marble Categories
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {[
            {
              name: "Makrana White",
              img: "/homepage/makrana-white.jpeg",
            },
            {
              name: "Green Marble",
              img: "/homepage/green-marble.jpeg",
            },
            {
              name: "Katni Marble",
              img: "/homepage/katni-marble.jpeg",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-gray-900/70 border border-gray-800 rounded-xl shadow hover:shadow-yellow-500/10 hover:border-yellow-400/30 transition p-4"
            >
              {/* IMAGE BOX */}
              <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-width:768px) 100vw, 
                   (max-width:1024px) 50vw, 
                   33vw"
                  className="object-cover transition duration-300 hover:scale-105"
                  priority={item.name === "Makrana White"} // improves LCP for 1st card
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>

              {/* TEXT */}
              <p className="font-medium text-white">{item.name}</p>

              <p className="text-sm text-gray-400 mt-1">
                Starting at best market prices
              </p>
            </div>
          ))}

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-7">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Granite Categories
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {[
            {
              name: "Black Galaxy",
              img: "/products/granite-1.jpeg",
            },
            {
              name: "Blue Pearl",
              img: "/homepage/graniteBluePearl.jpeg",
            },
            {
              name: "Tan Brown",
              img: "/products/granite-5.jpeg",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-gray-900/70 border border-gray-800 rounded-xl shadow hover:shadow-yellow-500/10 hover:border-yellow-400/30 transition p-4"
            >
              {/* IMAGE BOX */}
              <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-width:768px) 100vw, 
                   (max-width:1024px) 50vw, 
                   33vw"
                  className="object-cover transition duration-300 hover:scale-105"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>

              {/* TEXT */}
              <p className="font-medium text-white">{item.name}</p>

              <p className="text-sm text-gray-400 mt-1">
                Starting at best market prices
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-14">

          <h2 className="text-2xl font-semibold mb-8">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Direct Factory Pricing",
              "Handpicked Stone Quality",
              "Pan-India Delivery Support",
            ].map((t) => (
              <div
                key={t}
                className="bg-gray-900/70 border border-gray-800 p-5 rounded-lg text-gray-200 hover:border-yellow-400/30 transition"
              >
                {t}
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Gallery
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">

          {[
            "/homepage/marble-1.jpg",
            "/homepage/marble-2.jpg",
            "/homepage/marble-3.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="relative h-44 md:h-52 rounded-xl overflow-hidden border border-gray-800 bg-gray-900 shadow hover:shadow-yellow-500/10 hover:border-yellow-400/30 transition group"
            >
              <Image
                src={src}
                alt={"Marble Slab"}
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}

        </div>
      </section>


      {/* CTA */}
      <section className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">

          <h2 className="text-2xl font-semibold">
            Looking for Genuine Quality Marble?
          </h2>

          <p className="text-gray-400 mt-2">
            Message us now for the best quotation
          </p>

          <a
            href="https://wa.me/+919111112717"
            className="mt-6 inline-block bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-lg shadow-lg shadow-green-900/30"
          >
            WhatsApp Now
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
