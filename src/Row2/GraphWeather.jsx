import { TbChartDots } from "react-icons/tb";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function GraphWeather({ data }) {
  return (
    <div className="hidden sm:block bg-[#F9FAFB] p-6 md:p-2 rounded-2xl shadow-md border border-gray-200  w-250 mx-auto">
      <div className="flex items-center gap-3 mb-6 pl-7">
        <TbChartDots className="bg-[#F2F4F7] h-10 w-10 rounded-xl border border-gray-300 shadow-sm text-[#5d6067] p-2" />
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
          Temperature Trends
        </h2>
      </div>

      <ResponsiveContainer width="100%" height={290}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="date"
            stroke="#374151"
            tick={{ fontSize: 12 }}
            axisLine={{ stroke: "#E5E7EB" }}
          />
          <YAxis
            unit="°C"
            stroke="#09090B"
            tick={{ fontSize: 12 }}
            axisLine={{ stroke: "#E5E7EB" }}
          />
          <Tooltip
            formatter={(value) => [`${value}°C`, "Temperature"]}
            labelStyle={{ color: "#111827", fontWeight: 500 }}
            contentStyle={{
              borderRadius: "8px",
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
              fontSize: "14px",
            }}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#B5C1C7"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraphWeather;
