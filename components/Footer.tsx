import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">

                {/* BRAND */}
                <div>
                    <h3 className="text-lg font-semibold text-white">
                        <span className="text-yellow-400">Black Stone </span> Granite & Marble
                    </h3>

                    <p className="text-sm mt-3 text-gray-400 leading-relaxed">
                        Your trusted source for premium granite and marble solutions.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <p className="font-medium text-white mb-3">Quick Links</p>

                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href="/about"
                                className="hover:text-yellow-400 transition"
                            >
                                About Us
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/faq"
                                className="hover:text-yellow-400 transition"
                            >
                                FAQ
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/privacy-policy"
                                className="hover:text-yellow-400 transition"
                            >
                                Privacy Policy
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/terms"
                                className="hover:text-yellow-400 transition"
                            >
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <p className="font-medium text-white mb-3">Contact</p>

                    <p className="text-sm">RANKESHVAR DHAM TEMPLE, 5RR3+MJG, Ujjain Ring Rd, Ujjain,Madhya Pradesh 456001,India</p>

                    <p className="text-sm mt-1">
                        📞+91 9111112717 and +91 9950703030
                    </p>

                    <p className="text-sm mt-1">
                        📩 ajaysr2003@gmail.com
                    </p>
                </div>
            </div>

            {/* STRIP */}
            <div className="text-center text-xs py-4 border-t border-gray-800 text-gray-500">
                © {new Date().getFullYear()} Black Stone Granite & Marble. All rights reserved.
            </div>
        </footer>
    );
}
