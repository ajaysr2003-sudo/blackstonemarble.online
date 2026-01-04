"use client";

import { useState } from "react";

export default function MaterialCostCalculator() {
    const [area, setArea] = useState("");
    const [unit, setUnit] = useState<"ft" | "m">("ft");
    const [rate, setRate] = useState("");
    const [wastage, setWastage] = useState("5");
    const [gst, setGst] = useState("18");
    const [includeGst, setIncludeGst] = useState(true);

    const parse = (v: string) => (v === "" ? 0 : parseFloat(v));

    const baseArea = parse(area);
    const price = parse(rate);
    const waste = parse(wastage);
    const gstRate = parse(gst);

    const areaSqft = unit === "ft" ? baseArea : baseArea * 10.7639;

    const areaWithWastage = areaSqft * (1 + waste / 100);

    const materialCost = areaWithWastage * price;

    const gstAmount = includeGst ? (materialCost * gstRate) / 100 : 0;

    const finalAmount = materialCost + gstAmount;

    return (
        <main className="min-h-screen bg-gray-950">

            {/* HEADER */}
            <section className="bg-gray-900 text-white border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Material Cost Calculator
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        Estimate Marble Material Cost
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-3xl">
                        Enter area & price per sq.ft to get a rough cost estimate including optional wastage & GST.
                    </p>
                </div>
            </section>

            {/* FORM */}
            <section className="max-w-5xl mx-auto px-4 py-12">
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
                            Sq.Ft
                        </button>

                        <button
                            onClick={() => setUnit("m")}
                            className={`px-4 py-2 rounded-lg text-sm 
                                ${unit === "m"
                                    ? "bg-yellow-400 text-black font-semibold"
                                    : "bg-gray-800 text-gray-300 border border-gray-700"
                                }`}
                        >
                            Sq.M
                        </button>
                    </div>

                    {/* GRID */}
                    <div className="grid md:grid-cols-2 gap-6">

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Total Area ({unit})
                            </label>
                            <input
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                type="number"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                                placeholder="e.g. 500"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Price per Sq.Ft (₹)
                            </label>
                            <input
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
                                type="number"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                                placeholder="e.g. 120"
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

                        <div>
                            <label className="text-sm font-medium text-gray-200 flex items-center gap-3">
                                GST (%)
                                <input
                                    type="checkbox"
                                    checked={includeGst}
                                    onChange={(e) => setIncludeGst(e.target.checked)}
                                />
                                Apply GST
                            </label>

                            <input
                                value={gst}
                                onChange={(e) => setGst(e.target.value)}
                                type="number"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                            />
                        </div>
                    </div>
                </div>

                {/* RESULTS */}
                <div className="bg-gray-900 border border-gray-800 text-white rounded-xl p-6 mt-6 space-y-3 shadow-lg">
                    <h3 className="font-semibold text-lg">Cost Estimate</h3>

                    <p className="text-sm">
                        Area after wastage:{" "}
                        <span className="font-semibold text-yellow-300">
                            {areaWithWastage.toFixed(2)} sq.ft
                        </span>
                    </p>

                    <p className="text-sm">
                        Material cost:{" "}
                        <span className="font-semibold">
                            ₹ {materialCost.toFixed(2)}
                        </span>
                    </p>

                    {includeGst && (
                        <p className="text-sm">
                            GST ({gstRate}%):{" "}
                            <span className="font-semibold">
                                ₹ {gstAmount.toFixed(2)}
                            </span>
                        </p>
                    )}

                    <p className="text-sm">
                        <span className="font-semibold text-green-300">
                            Final Estimated Amount: ₹ {finalAmount.toFixed(2)}
                        </span>
                    </p>

                    <p className="text-xs text-gray-400">
                        Note: These calculations are approximate. Final price depends on slab selection & cutting.
                    </p>
                </div>
            </section>
        </main>
    );
}
