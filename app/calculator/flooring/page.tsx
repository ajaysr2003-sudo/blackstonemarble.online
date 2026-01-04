"use client";

import { useState } from "react";

export default function FlooringCalculator() {
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [rooms, setRooms] = useState("1");
    const [unit, setUnit] = useState<"ft" | "m">("ft");
    const [wastage, setWastage] = useState("5");

    const parse = (v: string) => (v === "" ? 0 : parseFloat(v));

    const len = parse(length);
    const wid = parse(width);
    const roomCount = parse(rooms);
    const waste = parse(wastage);

    let area = 0;
    let areaSqft = 0;

    if (unit === "ft") {
        area = len * wid * roomCount;
        areaSqft = area;
    } else {
        area = len * wid * roomCount;
        areaSqft = area * 10.7639;
    }

    const areaWithWastage = areaSqft * (1 + waste / 100);
    const areaSqm = areaSqft / 10.7639;

    return (
        <main className="min-h-screen bg-gray-950">

            {/* HEADER */}
            <section className="bg-gray-900 text-white border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Flooring Area Calculator
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        Calculate Total Marble Required
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-3xl">
                        Enter room dimensions below to estimate how much marble you’ll need.
                    </p>
                </div>
            </section>

            {/* FORM */}
            <section className="max-w-5xl mx-auto px-4 py-12">

                <div className="bg-gray-900/70 backdrop-blur border border-gray-800 p-6 rounded-xl shadow space-y-5">

                    {/* UNIT TOGGLE */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => setUnit("ft")}
                            className={`px-4 py-2 rounded-lg text-sm 
                            ${unit === "ft"
                                    ? "bg-yellow-400 text-black font-semibold"
                                    : "bg-gray-800 text-gray-300 border border-gray-700"
                                }`}
                        >
                            Feet
                        </button>

                        <button
                            onClick={() => setUnit("m")}
                            className={`px-4 py-2 rounded-lg text-sm 
                            ${unit === "m"
                                    ? "bg-yellow-400 text-black font-semibold"
                                    : "bg-gray-800 text-gray-300 border border-gray-700"
                                }`}
                        >
                            Meter
                        </button>
                    </div>

                    {/* INPUTS */}
                    <div className="grid md:grid-cols-2 gap-6">

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Room Length ({unit})
                            </label>
                            <input
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                                type="number"
                                placeholder="e.g. 15"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Room Width ({unit})
                            </label>
                            <input
                                value={width}
                                onChange={(e) => setWidth(e.target.value)}
                                type="number"
                                placeholder="e.g. 12"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Number of Rooms
                            </label>
                            <input
                                value={rooms}
                                onChange={(e) => setRooms(e.target.value)}
                                type="number"
                                min="1"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Wastage (%) — Optional
                            </label>
                            <input
                                value={wastage}
                                onChange={(e) => setWastage(e.target.value)}
                                type="number"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                            />
                        </div>
                    </div>
                </div>

                {/* RESULTS */}
                <div className="bg-gray-900 border border-gray-800 text-white rounded-xl p-6 mt-6 space-y-3 shadow-lg">
                    <h3 className="font-semibold text-lg">Results</h3>

                    <p className="text-sm text-gray-200">
                        Total Area (without wastage):{" "}
                        <span className="font-semibold text-white">
                            {areaSqft.toFixed(2)} sq.ft — {areaSqm.toFixed(2)} sq.m
                        </span>
                    </p>

                    <p className="text-sm">
                        Area including wastage:{" "}
                        <span className="font-semibold text-yellow-300">
                            {areaWithWastage.toFixed(2)} sq.ft — {(areaWithWastage / 10.7639).toFixed(2)} sq.m
                        </span>
                    </p>

                    <p className="text-xs text-gray-400">
                        Note: Wastage typically ranges from 5–10% depending on room layout.
                    </p>
                </div>
            </section>
        </main>
    );
}
