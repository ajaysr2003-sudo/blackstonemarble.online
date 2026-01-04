/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

export default function TruckHelperCalculator() {
    const [weight, setWeight] = useState("");
    const [weightUnit, setWeightUnit] = useState<"kg" | "ton">("kg");

    const [buffer, setBuffer] = useState("10");

    const [truckCapacity, setTruckCapacity] = useState("16000");
    const [customCapacity, setCustomCapacity] = useState("");

    const parse = (v: string) => (v === "" ? 0 : parseFloat(v));

    const w = parse(weight);
    const buf = parse(buffer);

    const cap = truckCapacity === "" ? parse(customCapacity) : parse(truckCapacity);

    const totalWeightKg = weightUnit === "kg" ? w : w * 1000;

    const safeCapacity = cap * (1 - buf / 100);

    const requiredTrucks = safeCapacity > 0 ? totalWeightKg / safeCapacity : 0;

    const tons = totalWeightKg / 1000;

    return (
        <main className="min-h-screen bg-gray-950">

            {/* HEADER */}
            <section className="bg-gray-900 text-white border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Truck / Transport Helper
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        Estimate Number of Trucks Required
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-3xl">
                        Enter total stone weight & select truck capacity to calculate how many trucks will be required.
                    </p>
                </div>
            </section>

            {/* FORM */}
            <section className="max-w-6xl mx-auto px-4 py-12 space-y-6">

                <div className="bg-gray-900/70 border border-gray-800 backdrop-blur p-6 rounded-xl shadow space-y-6">

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* WEIGHT */}
                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Total Stone Weight
                            </label>

                            <div className="flex gap-3 mt-1">
                                <input
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    type="number"
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
                                    placeholder="e.g. 12000"
                                />

                                <select
                                    value={weightUnit}
                                    onChange={(e) => setWeightUnit(e.target.value as any)}
                                    className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
                                >
                                    <option value="kg">KG</option>
                                    <option value="ton">TON</option>
                                </select>
                            </div>
                        </div>

                        {/* TRUCK CAPACITY */}
                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Truck Capacity (KG)
                            </label>

                            <select
                                value={truckCapacity}
                                onChange={(e) => setTruckCapacity(e.target.value)}
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
                            >
                                <option value="3000">Pickup / Small — 3 Ton</option>
                                <option value="9000">14–17 ft Truck — 9 Ton</option>
                                <option value="16000">19–22 ft Truck — 16 Ton</option>
                                <option value="22000">10-Wheel Truck — 22 Ton</option>
                                <option value="25000">12-Wheel Truck — 25 Ton</option>
                                <option value="30000">Trailer — 30 Ton</option>
                                <option value="">Custom — enter manually below</option>
                            </select>

                            {truckCapacity === "" && (
                                <input
                                    value={customCapacity}
                                    onChange={(e) => setCustomCapacity(e.target.value)}
                                    placeholder="Enter custom capacity in KG"
                                    className="w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
                                />
                            )}
                        </div>

                        {/* BUFFER */}
                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Safety Buffer / Underload (%)
                            </label>

                            <input
                                value={buffer}
                                onChange={(e) => setBuffer(e.target.value)}
                                type="number"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
                            />

                            <p className="text-xs text-gray-400 mt-1">
                                Recommended 10–15% for safe transport & uneven roads.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RESULTS */}
                <div className="bg-gray-900 border border-gray-800 text-white rounded-xl p-6 mt-4 space-y-3 shadow-lg">

                    <h3 className="font-semibold text-lg">Truck Requirement</h3>

                    <p className="text-sm">
                        Total Weight:{" "}
                        <span className="font-semibold">
                            {totalWeightKg.toFixed(2)} kg — {tons.toFixed(2)} ton
                        </span>
                    </p>

                    <p className="text-sm">
                        Usable capacity per truck (after buffer):{" "}
                        <span className="font-semibold text-yellow-300">
                            {safeCapacity.toFixed(2)} kg
                        </span>
                    </p>

                    <p className="text-sm">
                        Required Trucks:{" "}
                        <span className="font-semibold text-green-300 text-lg">
                            {safeCapacity > 0 ? Math.ceil(requiredTrucks) : 0}
                        </span>
                    </p>

                    <p className="text-xs text-gray-400">
                        Note: Always check legal load limits in your state before transport.
                    </p>
                </div>
            </section>
        </main>
    );
}
