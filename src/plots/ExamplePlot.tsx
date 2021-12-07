import { LineChart, Line } from "recharts";

function f(x: number) {
  return 1.0 - Math.exp(-0.707 * x);
}

function quad(x: number) {
  return 0.08 * Math.pow(x - 5, 2);
}

function cubic(x: number) {
  return 0.8 * Math.sin(16 * x) + 0.7;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const data = array.map((x) => ({
  t: x,
  f: f(x),
  quad: quad(x),
  cubic: cubic(x),
}));

function ExamplePlot() {
  return (
    <LineChart width={800} height={600} data={data}>
      <Line type="monotone" dataKey="f" stroke="#8884d8" />
      <Line type="monotone" dataKey="quad" stroke="#8884d8" />
      <Line type="monotone" dataKey="cubic" stroke="#8884d8" />
    </LineChart>
  );
}

export default ExamplePlot;
