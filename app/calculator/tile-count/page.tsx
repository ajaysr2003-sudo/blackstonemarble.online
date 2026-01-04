"use client";

import { useState } from "react";

export default function TileCountCalculator() {
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");

    const [tileLength, setTileLength] = useState("");
    const [tileWidth, setTileWidth] = useState("");

    const [unit, setUnit] = useState<"ft" | "m">("ft");
    const [wastage, setWastage] = useState("5");

    const parse = (v: string) => (v === "" ? 0 : parseFloat(v));

    const L = parse(length);
    const W = parse(width);

    const TL = parse(tileLength);
    const TW = parse(tileWidth);

    const waste = parse(wastage);

    const roomAreaSqft =
        unit === "ft"
            ? L * W
            : L * W * 10.7639;

    const tileAreaSqft =
        unit === "ft"
            ? TL * TW
            : TL * TW * 10.7639;

    const exactTiles = tileAreaSqft > 0 ? roomAreaSqft / tileAreaSqft : 0;

    const tilesWithWastage = exactTiles * (1 + waste / 100);

    const areaSqm = roomAreaSqft / 10.7639;

    return (
        <main className="min-h-screen bg-gray-950">

            {/* HEADER */}
            <section className="bg-gray-900 text-white border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-14">
                    <p className="text-yellow-400 font-semibold tracking-wide mb-2">
                        Tile / Slab Count Calculator
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold">
                        Find How Many Tiles You Need
                    </h1>

                    <p className="text-gray-400 mt-3 max-w-3xl">
                        Enter floor size & tile size to calculate total tiles required with optional wastage.
                    </p>
                </div>
            </section>

            {/* FORM */}
            <section className="max-w-5xl mx-auto px-4 py-12 space-y-6">

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

                    {/* FLOOR INPUT GRID */}
                    <div className="grid md:grid-cols-2 gap-6">

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Floor Length ({unit})
                            </label>
                            <input
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                                type="number"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                                placeholder="e.g. 20"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Floor Width ({unit})
                            </label>
                            <input
                                value={width}
                                onChange={(e) => setWidth(e.target.value)}
                                type="number"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                                placeholder="e.g. 15"
                            />
                        </div>

                        {/* TILE SIZE */}
                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Tile Length ({unit})
                            </label>
                            <input
                                value={tileLength}
                                onChange={(e) => setTileLength(e.target.value)}
                                type="number"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                                placeholder="e.g. 2"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-200">
                                Tile Width ({unit})
                            </label>
                            <input
                                value={tileWidth}
                                onChange={(e) => setTileWidth(e.target.value)}
                                type="number"
                                className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500"
                                placeholder="e.g. 2"
                            />
                        </div>

                        {/* WASTAGE */}
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
                        Floor Area:{" "}
                        <span className="font-semibold">
                            {roomAreaSqft.toFixed(2)} sq.ft — {areaSqm.toFixed(2)} sq.m
                        </span>
                    </p>

                    <p className="text-sm">
                        Tile Area:{" "}
                        <span className="font-semibold">
                            {tileAreaSqft.toFixed(2)} sq.ft
                        </span>
                    </p>

                    <p className="text-sm">
                        Exact tiles needed:{" "}
                        <span className="font-semibold text-yellow-300">
                            {exactTiles.toFixed(2)}
                        </span>
                    </p>

                    <p className="text-sm">
                        Tiles incl. wastage:{" "}
                        <span className="font-semibold text-green-300">
                            {Math.ceil(tilesWithWastage)}
                        </span>
                    </p>

                    <p className="text-xs text-gray-400">
                        Tip: Always order full pieces — round up to nearest tile.
                    </p>
                </div>
            </section>
        </main>
    );
}
