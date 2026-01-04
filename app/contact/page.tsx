// "use client";

import { Mail, MapPin, Phone, MessageCircle, Clock, Truck } from "lucide-react";

export const metadata = {
    title: "Contact Black Stone Granite & Marble — Call or WhatsApp",
    description:
        "Contact us for marble & granite prices, stock photos, transport help & quotations. Call or WhatsApp Black Stone Granite & Marble today.",
};


export default function Contact() {
    return (
        <main className="min-h-screen bg-gray-950 text-white">

            {/* HEADER */}
            <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Get In Touch
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        Contact Ujjain Marble House
                    </h1>

                    <p className="text-gray-300 mt-3 max-w-2xl">
                        Call, WhatsApp or visit our yard — we’re always happy to help you select the right marble.
                    </p>
                </div>
            </section>

            {/* CONTACT CARDS */}
            <section className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-7">

                {/* PHONE */}
                <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 shadow hover:border-yellow-400/30 hover:shadow-yellow-500/10 transition">
                    <div className="flex items-center gap-3 mb-3">
                        <Phone className="text-green-400" />
                        <h3 className="font-semibold text-lg">Call Us</h3>
                    </div>

                    <p className="text-gray-400 text-sm mb-3">
                        Speak directly with our team for pricing & availability.
                    </p>

                    <a
                        href="tel:+919950703030"
                        className="inline-block bg-gray-800 hover:bg-black border border-gray-700 hover:border-gray-500 transition text-white px-5 py-2 rounded-lg text-sm"
                    >
                        +91 9111 112 717
                    </a>
                </div>

                {/* WHATSAPP */}
                <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 shadow hover:border-green-400/30 hover:shadow-green-500/10 transition">
                    <div className="flex items-center gap-3 mb-3">
                        <MessageCircle className="text-green-400" />
                        <h3 className="font-semibold text-lg">Chat on WhatsApp</h3>
                    </div>

                    <p className="text-gray-400 text-sm mb-3">
                        Send us your requirements — we’ll respond quickly.
                    </p>

                    <a
                        href="https://wa.me/+919111112717"
                        className="inline-block bg-green-600 hover:bg-green-700 transition text-white px-5 py-2 rounded-lg text-sm shadow-lg shadow-green-900/40"
                    >
                        Start Chat
                    </a>
                </div>

                {/* EMAIL */}
                <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 shadow hover:border-blue-400/30 hover:shadow-blue-500/10 transition">
                    <div className="flex items-center gap-3 mb-3">
                        <Mail className="text-blue-400" />
                        <h3 className="font-semibold text-lg">Email Us</h3>
                    </div>

                    <p className="text-gray-400 text-sm mb-3">
                        Share project details & get the best quotation.
                    </p>

                    <p className="text-sm font-medium text-gray-200">ajaysr2003@gmail.com</p>
                </div>
            </section>

            {/* VISIT SECTION */}
            <section className="max-w-7xl mx-auto px-4 pb-10 grid md:grid-cols-2 gap-8">

                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Visit Our Yard
                    </h2>

                    <p className="text-gray-400 text-sm">
                        Explore slabs in person & choose the stone that best fits your project.
                    </p>

                    <div className="flex items-start gap-3 mt-5">
                        <MapPin className="text-red-400" />
                        <p className="text-sm text-gray-300">
                            RANKESHVAR DHAM TEMPLE, 5RR3+MJG, Ujjain Ring Rd, Ujjain, Madhya Pradesh 456001, India
                        </p>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                        <Clock className="text-yellow-400" />
                        <p className="text-sm text-gray-300">
                            Open: 9:30 AM – 7:30 PM (All Days)
                        </p>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                        <Truck className="text-gray-300" />
                        <p className="text-sm text-gray-300">
                            Delivery Support Across India
                        </p>
                    </div>
                </div>

                {/* MAP */}
                <div className="rounded-xl overflow-hidden shadow-xl border border-gray-800 bg-gray-900/50 backdrop-blur">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.21331173617457!2d75.8036733636416!3d23.19161530851455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637409767255a1%3A0x26dfc4c41493e286!2z4KS54KS_4KSu4KS-4KSC4KS24KWAIOCksOCli-CkoSDgpJXgpYfgpLDgpL_gpK_gpLAg4KSP4KSj4KWN4KShIOCkleCkruClgOCktuCkqCDgpI_gpJzgpYfgpKjgpY3gpJ8!5e0!3m2!1sen!2sin!4v1767524103901!5m2!1sen!2sin"
                        width="100%"
                        height="320"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>
                </div>
            </section>

            {/* MINI FAQ */}
            <section className="max-w-7xl mx-auto px-4 pb-10">
                <h2 className="text-xl font-semibold mb-4">Frequently Asked</h2>

                <div className="space-y-4">
                    <div className="bg-gray-900/70 p-4 rounded-lg border border-gray-800 shadow">
                        <p className="font-medium">Do you provide transport?</p>
                        <p className="text-sm text-gray-400">
                            Yes — we help arrange transport across India at competitive rates.
                        </p>
                    </div>

                    <div className="bg-gray-900/70 p-4 rounded-lg border border-gray-800 shadow">
                        <p className="font-medium">Can I visit and select slabs personally?</p>
                        <p className="text-sm text-gray-400">
                            Absolutely. We’ll help you shortlist the best options based on your need & budget.
                        </p>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <h3 className="text-xl font-semibold">
                        Ready to discuss your marble requirement?
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
