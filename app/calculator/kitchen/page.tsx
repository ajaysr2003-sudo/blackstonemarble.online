"use client";

import { useState } from "react";

export default function KitchenCounterCalculator() {
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");

    const [backsplashHeight, setBacksplashHeight] = useState("");
    const [includeBacksplash, setIncludeBacksplash] = useState(false);

    const [cutoutLength, setCutoutLength] = useState("");
    const [cutoutWidth, setCutoutWidth] = useState("");
    const [includeCutout, setIncludeCutout] = useState(false);

    const [unit, setUnit] = useState<"ft" | "m">("ft");
    const [wastage, setWastage] = useState("5");

    const parse = (v: string) => (v === "" ? 0 : parseFloat(v));

    const L = parse(length);
    const W = parse(width);
    const B = parse(backsplashHeight);
    const CL = parse(cutoutLength);
    const CW = parse(cutoutWidth);
    const waste = parse(wastage);

    const counterArea =
        unit === "ft"
            ? L * W
            : L * W * 10.7639;

    let backsplashArea = 0;
    if (includeBacksplash) {
        backsplashArea =
            unit === "ft"
                ? L * B
                : L * B * 10.7639;
    }

    let cutoutArea = 0;
    if (includeCutout) {
        cutoutArea =
            unit === "ft"
                ? CL * CW
                : CL * CW * 10.7639;
    }

    const totalArea = counterArea + backsplashArea - cutoutArea;

    const finalArea = totalArea * (1 + waste / 100);

    return (
        <main className="min-h-screen bg-gray-950">

            {/* HEADER */}
            <section className="bg-gray-900 text-white border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Kitchen Countertop Calculator
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        Estimate Marble / Granite for Kitchen Platform
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-3xl">
                        Enter platform & optional backsplash size to estimate total stone required.
                    </p>
                </div>
            </section>

            {/* FORM */}
            <section className="max-w-6xl mx-auto px-4 py-12 space-y-6">

                <div className="bg-gray-900/70 backdrop-blur border border-gray-800 p-6 rounded-xl shadow space-y-6">

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

                    {/* GRID */}
                    <div className="grid md:grid-cols-2 gap-6">

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Platform Length ({unit})
                            </label>
                            <input
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                                type="number"
                                placeholder="e.g. 10"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Platform Width ({unit})
                            </label>
                            <input
                                value={width}
                                onChange={(e) => setWidth(e.target.value)}
                                type="number"
                                placeholder="e.g. 2"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                            />
                        </div>

                        {/* BACKSPLASH */}
                        <div className="flex items-center gap-2 mt-4">
                            <input
                                type="checkbox"
                                checked={includeBacksplash}
                                onChange={(e) => setIncludeBacksplash(e.target.checked)}
                            />
                            <span className="text-sm font-medium text-gray-200">
                                Include Backsplash / Dado
                            </span>
                        </div>

                        {includeBacksplash && (
                            <div>
                                <label className="text-sm font-medium text-gray-200">
                                    Backsplash Height ({unit})
                                </label>
                                <input
                                    value={backsplashHeight}
                                    onChange={(e) => setBacksplashHeight(e.target.value)}
                                    type="number"
                                    placeholder="e.g. 1.5"
                                    className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                                />
                            </div>
                        )}

                        {/* CUTOUT */}
                        <div className="flex items-center gap-2 mt-4">
                            <input
                                type="checkbox"
                                checked={includeCutout}
                                onChange={(e) => setIncludeCutout(e.target.checked)}
                            />
                            <span className="text-sm font-medium text-gray-200">
                                Deduct Sink / Hob Cutout
                            </span>
                        </div>

                        {includeCutout && (
                            <>
                                <div>
                                    <label className="text-sm font-medium text-gray-200">
                                        Cutout Length ({unit})
                                    </label>
                                    <input
                                        value={cutoutLength}
                                        onChange={(e) => setCutoutLength(e.target.value)}
                                        type="number"
                                        placeholder="e.g. 2"
                                        className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-200">
                                        Cutout Width ({unit})
                                    </label>
                                    <input
                                        value={cutoutWidth}
                                        onChange={(e) => setCutoutWidth(e.target.value)}
                                        type="number"
                                        placeholder="e.g. 1.5"
                                        className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                                    />
                                </div>
                            </>
                        )}

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
                <div className="bg-gray-900 border border-gray-800 text-white rounded-xl p-6 mt-4 space-y-3 shadow-lg">

                    <h3 className="font-semibold text-lg">Results</h3>

                    <p className="text-sm">
                        Countertop area:{" "}
                        <span className="font-semibold">
                            {counterArea.toFixed(2)} sq.ft
                        </span>
                    </p>

                    {includeBacksplash && (
                        <p className="text-sm">
                            Backsplash area:{" "}
                            <span className="font-semibold">
                                {backsplashArea.toFixed(2)} sq.ft
                            </span>
                        </p>
                    )}

                    {includeCutout && (
                        <p className="text-sm">
                            Cutout deduction:{" "}
                            <span className="font-semibold">
                                -{cutoutArea.toFixed(2)} sq.ft
                            </span>
                        </p>
                    )}

                    <p className="text-sm">
                        Net total area:{" "}
                        <span className="font-semibold text-yellow-300">
                            {totalArea.toFixed(2)} sq.ft — {(totalArea / 10.7639).toFixed(2)} sq.m
                        </span>
                    </p>

                    <p className="text-sm">
                        Incl. wastage:{" "}
                        <span className="font-semibold text-green-300">
                            {finalArea.toFixed(2)} sq.ft — {(finalArea / 10.7639).toFixed(2)} sq.m
                        </span>
                    </p>

                    <p className="text-xs text-gray-400">
                        Note: Wastage varies depending on cutouts and slab layout.
                    </p>
                </div>
            </section>
        </main>
    );
}
