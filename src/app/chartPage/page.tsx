import { useState } from "react";
import data_libre from "../../assets/partie_libre.json";
import data_rules from "../../assets/partie_rules.json";
import StackedAreaChart from "../../components/StackedAreaChart";



export default function ChartPage() {
    const [data, setData] = useState(data_libre);

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-10 bg-white">
            <div>
                <h3 className="text-2xl font-bold">Objectif : Atteindre 100$ pour gagner 🎉</h3>
            </div>
            <div>
                <select onChange={(e) => setData(e.target.value === "data_libre" ? data_libre : data_rules)} className="bg-white text-gray-500 p-2">
                    <option value="data_libre">Partie Libre (Sans règles)</option>
                    <option value="data_rules">Partie Rules (Avec règles)</option>
                </select>
            </div>
            <div className="items-center justify-center bg-white w-[60%] mx-auto">
                <StackedAreaChart data={data} />
            </div>
        </div>
    );
};