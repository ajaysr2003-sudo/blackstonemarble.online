"use client";

import { useState } from "react";

export default function StaircaseCalculator() {
    const [steps, setSteps] = useState("15");
    const [treadDepth, setTreadDepth] = useState("");
    const [stepWidth, setStepWidth] = useState("");
    const [riserHeight, setRiserHeight] = useState("");

    const [includeRiser, setIncludeRiser] = useState(false);
    const [unit, setUnit] = useState<"ft" | "m">("ft");
    const [wastage, setWastage] = useState("5");

    const parse = (v: string) => (v === "" ? 0 : parseFloat(v));

    const nSteps = parse(steps);
    const depth = parse(treadDepth);
    const width = parse(stepWidth);
    const riser = parse(riserHeight);
    const waste = parse(wastage);

    const treadAreaPerStepSqft =
        unit === "ft"
            ? depth * width
            : depth * width * 10.7639;

    const totalTreadArea = treadAreaPerStepSqft * nSteps;

    const riserAreaPerStepSqft =
        includeRiser
            ? (unit === "ft"
                ? riser * width
                : riser * width * 10.7639)
            : 0;

    const totalRiserArea = riserAreaPerStepSqft * nSteps;

    const totalArea = totalTreadArea + totalRiserArea;

    const totalWithWastage = totalArea * (1 + waste / 100);

    return (
        <main className="min-h-screen bg-gray-950">

            {/* HEADER */}
            <section className="bg-gray-900 text-white border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Staircase Marble Calculator
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        Calculate Marble Required for Stairs
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-3xl">
                        Enter step dimensions to estimate tread & optional riser marble requirement.
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
                                Number of Steps
                            </label>
                            <input
                                value={steps}
                                onChange={(e) => setSteps(e.target.value)}
                                type="number"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Step Depth / Tread ({unit})
                            </label>
                            <input
                                value={treadDepth}
                                onChange={(e) => setTreadDepth(e.target.value)}
                                type="number"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                                placeholder="e.g. 1.0"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Step Width ({unit})
                            </label>
                            <input
                                value={stepWidth}
                                onChange={(e) => setStepWidth(e.target.value)}
                                type="number"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                                placeholder="e.g. 3.0"
                            />
                        </div>

                        {/* RISER TOGGLE */}
                        <div className="flex items-center gap-2 mt-6">
                            <input
                                type="checkbox"
                                checked={includeRiser}
                                onChange={(e) => setIncludeRiser(e.target.checked)}
                            />
                            <span className="text-sm font-medium text-gray-200">
                                Include Riser Height
                            </span>
                        </div>

                        {includeRiser && (
                            <div>
                                <label className="text-sm font-medium text-gray-200">
                                    Riser Height ({unit})
                                </label>
                                <input
                                    value={riserHeight}
                                    onChange={(e) => setRiserHeight(e.target.value)}
                                    type="number"
                                    className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                                    placeholder="e.g. 0.5"
                                />
                            </div>
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
                        Tread area total:{" "}
                        <span className="font-semibold">
                            {totalTreadArea.toFixed(2)} sq.ft
                        </span>
                    </p>

                    {includeRiser && (
                        <p className="text-sm">
                            Riser area total:{" "}
                            <span className="font-semibold">
                                {totalRiserArea.toFixed(2)} sq.ft
                            </span>
                        </p>
                    )}

                    <p className="text-sm">
                        Combined area:{" "}
                        <span className="font-semibold text-yellow-300">
                            {totalArea.toFixed(2)} sq.ft — {(totalArea / 10.7639).toFixed(2)} sq.m
                        </span>
                    </p>

                    <p className="text-sm">
                        Area incl. wastage:{" "}
                        <span className="font-semibold text-green-300">
                            {totalWithWastage.toFixed(2)} sq.ft — {(totalWithWastage / 10.7639).toFixed(2)} sq.m
                        </span>
                    </p>

                    <p className="text-xs text-gray-400">
                        Tip: Wastage is usually higher on stairs because of cutting.
                    </p>
                </div>
            </section>
        </main>
    );
}
