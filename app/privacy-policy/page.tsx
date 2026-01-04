// "use client";

import { MessageCircle } from "lucide-react";

export const metadata = {
    title: "Privacy Policy — Black Stone Granite & Marble",
    description:
        "Read the privacy policy for Black Stone Granite & Marble to understand how we collect & handle your data.",
};


export default function PrivacyPolicy() {
    const lastUpdated = "02 Jan 2026";

    return (
        <main className="min-h-screen bg-gray-950 text-gray-300">

            {/* HEADER */}
            <section className="border-b border-gray-800 bg-gray-950">
                <div className="max-w-6xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Privacy Policy
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Privacy Policy — Ujjain Marble House
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-3xl">
                        Your privacy matters to us. This page explains what information we collect and how we keep it safe.
                    </p>

                    <p className="text-xs text-gray-500 mt-3">
                        Last Updated: {lastUpdated}
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="max-w-6xl mx-auto px-4 py-12">

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8 space-y-10 shadow-xl">

                    <p className="leading-relaxed text-sm">
                        This Privacy Policy describes how information is collected, used and shared when you visit or contact us through this website.
                    </p>

                    {/* BLOCKS */}
                    {[
                        {
                            title: "Information We Collect",
                            body: (
                                <>
                                    <p>
                                        We may collect contact details you choose to share such as your name, phone number, email address or message when you contact us through phone, WhatsApp or email.
                                    </p>
                                    <p className="mt-2">
                                        We do not collect any payment or financial information on this website.
                                    </p>
                                </>
                            )
                        },
                        {
                            title: "How We Use Your Information",
                            body: (
                                <>
                                    <p>We use the information only to:</p>
                                    <ul className="list-disc ml-6 mt-2 space-y-1">
                                        <li>Respond to your enquiry</li>
                                        <li>Share pricing and product details</li>
                                        <li>Arrange delivery or related services</li>
                                    </ul>
                                    <p className="mt-2">
                                        We do not sell or trade your personal information to any third party.
                                    </p>
                                </>
                            )
                        },
                        {
                            title: "WhatsApp & Phone Communication",
                            body: (
                                <p>
                                    If you contact us via WhatsApp or phone, your communication details are handled securely as per platform policies and are used only for business communication.
                                </p>
                            )
                        },
                        {
                            title: "Cookies & Basic Analytics",
                            body: (
                                <p>
                                    This website may use basic analytics or cookies to understand visitor activity and improve user experience. No personally sensitive data is stored intentionally by us.
                                </p>
                            )
                        },
                        {
                            title: "Data Security",
                            body: (
                                <p>
                                    We take reasonable steps to protect your information. However, no method of internet communication or storage is 100% secure — so we cannot guarantee absolute security.
                                </p>
                            )
                        },
                        {
                            title: "External Links",
                            body: (
                                <p>
                                    Our website may contain links to other sites. We are not responsible for the privacy practices of those websites.
                                </p>
                            )
                        },
                        {
                            title: "Updates to This Policy",
                            body: (
                                <p>
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page.
                                </p>
                            )
                        },
                        {
                            title: "Contact Us",
                            body: (
                                <>
                                    <p>For any questions regarding this Privacy Policy, you can contact us at:</p>
                                    <p className="mt-3 text-sm">
                                        <strong>Email:</strong> info@example.com <br />
                                        <strong>Phone:</strong> +91 XXXXXXXXXX <br />
                                        <strong>Location:</strong> Ujjain, Madhya Pradesh, India
                                    </p>
                                </>
                            )
                        }
                    ].map((sec, i) => (
                        <div key={i} className="space-y-2">
                            <h2 className="font-semibold text-lg text-white">
                                {sec.title}
                            </h2>
                            <div className="text-sm text-gray-300 leading-relaxed">
                                {sec.body}
                            </div>
                            {i !== 7 && <hr className="border-gray-800 mt-4" />}
                        </div>
                    ))}
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

