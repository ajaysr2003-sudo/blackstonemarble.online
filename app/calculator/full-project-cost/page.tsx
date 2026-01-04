"use client";

import { useState } from "react";

export default function FullProjectCostCalculator() {
    const [area, setArea] = useState("");
    const [unit, setUnit] = useState<"ft" | "m">("ft");

    const [materialRate, setMaterialRate] = useState("");
    const [labourRate, setLabourRate] = useState("");
    const [polishRate, setPolishRate] = useState("");

    const [wastage, setWastage] = useState("5");
    const [gst, setGst] = useState("18");
    const [includeGst, setIncludeGst] = useState(true);

    const parse = (v: string) => (v === "" ? 0 : parseFloat(v));

    const baseArea = parse(area);
    const waste = parse(wastage);
    const matRate = parse(materialRate);
    const layRate = parse(labourRate);
    const polRate = parse(polishRate);
    const gstRate = parse(gst);

    const areaSqft = unit === "ft" ? baseArea : baseArea * 10.7639;
    const netAreaWithWastage = areaSqft * (1 + waste / 100);

    const materialCost = netAreaWithWastage * matRate;
    const labourCost = netAreaWithWastage * layRate;
    const polishingCost = netAreaWithWastage * polRate;

    const subTotal = materialCost + labourCost + polishingCost;
    const gstAmount = includeGst ? (subTotal * gstRate) / 100 : 0;
    const grandTotal = subTotal + gstAmount;

    return (
        <main className="min-h-screen bg-gray-950">

            {/* HEADER */}
            <section className="bg-gray-900 text-white border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Full Project Cost Calculator
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        Material + Labour + Polishing Estimate
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-3xl">
                        Enter your project details to get an approximate complete cost estimate for marble installation.
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
                                type="number"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                                placeholder="e.g. 1200"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Wastage (%) — typically 5–10
                            </label>
                            <input
                                type="number"
                                value={wastage}
                                onChange={(e) => setWastage(e.target.value)}
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Material Rate (₹ per sq.ft)
                            </label>
                            <input
                                type="number"
                                value={materialRate}
                                onChange={(e) => setMaterialRate(e.target.value)}
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                                placeholder="e.g. 120"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Laying Labour Rate (₹ per sq.ft)
                            </label>
                            <input
                                type="number"
                                value={labourRate}
                                onChange={(e) => setLabourRate(e.target.value)}
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                                placeholder="e.g. 25"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Polishing Rate (₹ per sq.ft) — optional
                            </label>
                            <input
                                type="number"
                                value={polishRate}
                                onChange={(e) => setPolishRate(e.target.value)}
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                                placeholder="e.g. 15"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                                GST (%)
                                <input
                                    type="checkbox"
                                    checked={includeGst}
                                    onChange={(e) => setIncludeGst(e.target.checked)}
                                />
                                Apply GST
                            </label>

                            <input
                                type="number"
                                value={gst}
                                onChange={(e) => setGst(e.target.value)}
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
                                placeholder="18"
                            />
                        </div>
                    </div>
                </div>

                {/* RESULTS */}
                <div className="bg-gray-900 border border-gray-800 text-white rounded-xl p-6 mt-4 space-y-3 shadow-lg">
                    <h3 className="font-semibold text-lg">Cost Breakdown</h3>

                    <p className="text-sm">
                        Net area incl. wastage:{" "}
                        <span className="font-semibold text-yellow-300">
                            {netAreaWithWastage.toFixed(2)} sq.ft
                        </span>
                    </p>

                    <p className="text-sm">
                        Material cost:{" "}
                        <span className="font-semibold">₹ {materialCost.toFixed(2)}</span>
                    </p>

                    <p className="text-sm">
                        Laying labour cost:{" "}
                        <span className="font-semibold">₹ {labourCost.toFixed(2)}</span>
                    </p>

                    <p className="text-sm">
                        Polishing cost:{" "}
                        <span className="font-semibold">₹ {polishingCost.toFixed(2)}</span>
                    </p>

                    <p className="text-sm">
                        Subtotal:{" "}
                        <span className="font-semibold text-blue-300">
                            ₹ {subTotal.toFixed(2)}
                        </span>
                    </p>

                    {includeGst && (
                        <p className="text-sm">
                            GST ({gstRate}%):{" "}
                            <span className="font-semibold">₹ {gstAmount.toFixed(2)}</span>
                        </p>
                    )}

                    <p className="text-sm">
                        <span className="font-semibold text-green-300">
                            Final Estimated Cost: ₹ {grandTotal.toFixed(2)}
                        </span>
                    </p>

                    <p className="text-xs text-gray-400">
                        Note: Labour & polishing rates vary by city & site condition. Use this only as rough estimate.
                    </p>
                </div>
            </section>
        </main>
    );
}
