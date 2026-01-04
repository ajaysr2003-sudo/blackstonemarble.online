"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/why-us", label: "Why Us" },
        { href: "/about", label: "About Us" },
        { href: "/calculator", label: "Calculator" },
        { href: "/gallery", label: "Gallery" },
        { href: "/faq", label: "FAQ" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <>
            <nav className="bg-gray-950/95 backdrop-blur border-b border-gray-800 text-white sticky top-0 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                    {/* LOGO */}
                    <Link
                        href="/"
                        className="text-lg md:text-xl font-bold tracking-wide"
                    >
                        <span className="text-yellow-400">Black Stone </span> Granite & Marble
                    </Link>

                    {/* DESKTOP LINKS */}
                    <div className="hidden min-[1055px]:flex gap-6 text-sm">
                        {links.map((l) => {
                            const active = pathname === l.href;

                            return (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className={`
                    relative transition 
                    ${active ? "text-yellow-400" : "text-gray-300 hover:text-yellow-300"}
                  `}
                                >
                                    {l.label}

                                    {/* underline */}
                                    <span
                                        className={`
                      absolute left-0 -bottom-1 h-[2px] rounded-full transition-all
                      ${active ? "w-full bg-yellow-400" : "w-0 bg-yellow-400 group-hover:w-full"}
                    `}
                                    />
                                </Link>
                            );
                        })}
                    </div>

                    {/* DESKTOP CTA */}
                    <a
                        href="https://wa.me/+919111112717"
                        className="hidden min-[1055px]:block bg-green-600 hover:bg-green-700 transition text-sm px-4 py-2 rounded-lg shadow shadow-green-900/30"
                    >
                        WhatsApp
                    </a>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="min-[1055px]:hidden border border-gray-700 px-3 py-2 rounded-lg hover:bg-gray-800 transition"
                        onClick={() => setOpen(true)}
                    >
                        <Menu size={20} />
                    </button>
                </div>
            </nav>

            {/* BACKDROP */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* MOBILE SLIDE MENU */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-gray-900 text-white z-50 shadow-2xl border-l border-gray-800 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
                    <p className="font-semibold">Menu</p>
                    <button onClick={() => setOpen(false)}>
                        <X />
                    </button>
                </div>

                <div className="flex flex-col px-5 py-4 gap-4 text-sm">
                    {links.map((l) => {
                        const active = pathname === l.href;

                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className={`
                  px-2 py-1 rounded 
                  ${active ? "bg-yellow-400 text-black font-semibold" : "hover:bg-gray-800"}
                `}
                            >
                                {l.label}
                            </Link>
                        );
                    })}

                    <a
                        href="https://wa.me/+919111112717"
                        className="mt-4 bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow shadow-green-900/30"
                        onClick={() => setOpen(false)}
                    >
                        <MessageCircle size={18} /> WhatsApp Us
                    </a>
                </div>
            </div>
        </>
    );
}
