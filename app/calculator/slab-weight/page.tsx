"use client";

import { useState } from "react";

export default function SlabWeightCalculator() {
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [thickness, setThickness] = useState("");

    const [thicknessUnit, setThicknessUnit] = useState<"mm" | "inch">("mm");
    const [unit, setUnit] = useState<"ft" | "m">("ft");
    const [slabs, setSlabs] = useState("1");

    const parse = (v: string) => (v === "" ? 0 : parseFloat(v));

    const L = parse(length);
    const W = parse(width);
    const T = parse(thickness);
    const S = parse(slabs);

    const lengthM = unit === "m" ? L : L * 0.3048;
    const widthM = unit === "m" ? W : W * 0.3048;

    const thicknessM =
        thicknessUnit === "mm"
            ? T / 1000
            : T * 0.0254;

    const volume = lengthM * widthM * thicknessM;

    const density = 2700;

    const weightKg = volume * density;
    const totalWeight = weightKg * S;

    const areaSqm = lengthM * widthM;
    const areaSqft = areaSqm * 10.7639;

    return (
        <main className="min-h-screen bg-gray-950">

            {/* HEADER */}
            <section className="bg-gray-900 text-white border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Slab Weight Calculator
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        Estimate Weight of Marble / Granite Slabs
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-3xl">
                        Enter slab dimensions & thickness to calculate approximate stone weight.
                    </p>
                </div>
            </section>

            {/* FORM */}
            <section className="max-w-6xl mx-auto px-4 py-12 space-y-6">

                <div className="bg-gray-900/70 backdrop-blur border border-gray-800 p-6 rounded-xl shadow space-y-6">

                    {/* UNIT TOGGLES */}
                    <div className="flex gap-6 flex-wrap">
                        <div className="flex gap-3 items-center">
                            <span className="text-sm font-medium text-gray-200">Dimension Unit:</span>

                            <button
                                onClick={() => setUnit("ft")}
                                className={`px-4 py-2 rounded-lg text-sm 
                                    ${unit === "ft"
                                        ? "bg-yellow-400 text-black font-semibold"
                                        : "bg-gray-800 text-gray-300 border border-gray-700"
                                    }`}
                            >
                                Feet (ft)
                            </button>

                            <button
                                onClick={() => setUnit("m")}
                                className={`px-4 py-2 rounded-lg text-sm 
                                    ${unit === "m"
                                        ? "bg-yellow-400 text-black font-semibold"
                                        : "bg-gray-800 text-gray-300 border border-gray-700"
                                    }`}
                            >
                                Meter (m)
                            </button>
                        </div>

                        <div className="flex gap-3 items-center">
                            <span className="text-sm font-medium text-gray-200">Thickness Unit:</span>

                            <button
                                onClick={() => setThicknessUnit("mm")}
                                className={`px-4 py-2 rounded-lg text-sm 
                                    ${thicknessUnit === "mm"
                                        ? "bg-yellow-400 text-black font-semibold"
                                        : "bg-gray-800 text-gray-300 border border-gray-700"
                                    }`}
                            >
                                mm
                            </button>

                            <button
                                onClick={() => setThicknessUnit("inch")}
                                className={`px-4 py-2 rounded-lg text-sm 
                                    ${thicknessUnit === "inch"
                                        ? "bg-yellow-400 text-black font-semibold"
                                        : "bg-gray-800 text-gray-300 border border-gray-700"
                                    }`}
                            >
                                inch
                            </button>
                        </div>
                    </div>

                    {/* GRID */}
                    <div className="grid md:grid-cols-2 gap-6">

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Slab Length ({unit})
                            </label>
                            <input
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                                type="number"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                                placeholder={`e.g. ${unit === "ft" ? "8" : "2.4"}`}
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Slab Width ({unit})
                            </label>
                            <input
                                value={width}
                                onChange={(e) => setWidth(e.target.value)}
                                type="number"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                                placeholder={`e.g. ${unit === "ft" ? "3" : "0.9"}`}
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Thickness ({thicknessUnit})
                            </label>
                            <input
                                value={thickness}
                                onChange={(e) => setThickness(e.target.value)}
                                type="number"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                                placeholder="e.g. 18"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Number of Slabs
                            </label>
                            <input
                                value={slabs}
                                onChange={(e) => setSlabs(e.target.value)}
                                type="number"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                            />
                        </div>
                    </div>
                </div>

                {/* RESULTS */}
                <div className="bg-gray-900 border border-gray-800 text-white rounded-xl p-6 mt-4 space-y-3 shadow-lg">

                    <h3 className="font-semibold text-lg">Results</h3>

                    <p className="text-sm">
                        Area per slab:{" "}
                        <span className="font-semibold">
                            {areaSqft.toFixed(2)} sq.ft — {areaSqm.toFixed(2)} sq.m
                        </span>
                    </p>

                    <p className="text-sm">
                        Weight per slab:{" "}
                        <span className="font-semibold text-yellow-300">
                            {weightKg.toFixed(2)} kg
                        </span>
                    </p>

                    <p className="text-sm">
                        Total weight:{" "}
                        <span className="font-semibold text-green-300">
                            {totalWeight.toFixed(2)} kg
                        </span>
                    </p>

                    <p className="text-xs text-gray-400">
                        Note: Actual weight varies slightly depending on stone density (±3–5%).
                    </p>
                </div>
            </section>
        </main>
    );
}
