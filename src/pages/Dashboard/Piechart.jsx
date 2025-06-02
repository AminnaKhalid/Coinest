import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Rent & Living", value: 2100 },
  { name: "Investment", value: 525 },
  { name: "Education", value: 420 },
  { name: "Food & Drink", value: 280 },
  { name: "Entertainment", value: 175 },
];
const COLORS = ["#1E4841", "#BBF49C", "#BCBEBD", "#E5E6E6", "#ECF4E9"];
const total = data.reduce((sum, item) => sum + item.value, 0);

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Chart */}
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          height: 300,
          margin: 0,
          padding: 0,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Data Box */}
      <div
        style={{
          padding: "8px 12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        <ul
          style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: 20 }} className="flex  flex-col"
        >
          {data.map((entry, index) => {
            const percent = ((entry.value / total) * 100).toFixed(1);
            return (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 8,
                }}

                className="flex justify-between items-center"
              >
                <div className="flex justify-start items-center">
                  <span
                    style={{
                      width: 50,
                      height: 30,
                      backgroundColor: COLORS[index % COLORS.length],
                      marginRight: 8,
                      color: "black",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "4px",
                      fontWeight: 500,
                    }}
                  >
                    {percent}%
                  </span>
                  <span style={{ marginRight: 8 }} className="font-normal text-sm">{entry.name}</span>
                </div>

                <span className="ml-10 text-sm font-medium">${entry.value.toLocaleString()}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
