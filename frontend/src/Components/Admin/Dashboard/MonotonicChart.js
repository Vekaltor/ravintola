import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { reservationsDataChart } from "../data/charts";

const MonotonicChart = ({ width, height, color, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width={width} height={height}>
        <AreaChart
          data={reservationsDataChart}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tickSize={10} tickMargin={5} />
          <YAxis tickSize={10} tickCount={10} tickMargin={5} />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke={color} fill={color} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonotonicChart;
