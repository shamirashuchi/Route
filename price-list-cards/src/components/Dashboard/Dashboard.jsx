import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Dashboard = () => {
    const studentMarks = [
        { id: 1, name: "Alice", math: 80, physics: 90, chemistry: 75 },
        { id: 2, name: "Bob", math: 70, physics: 85, chemistry: 80 },
        { id: 3, name: "Charlie", math: 90, physics: 95, chemistry: 85 },
        { id: 4, name: "David", math: 75, physics: 80, chemistry: 70 },
        { id: 5, name: "Emma", math: 85, physics: 90, chemistry: 95 },
        { id: 6, name: "Frank", math: 60, physics: 70, chemistry: 75 },
        { id: 7, name: "Grace", math: 90, physics: 95, chemistry: 80 },
        { id: 8, name: "Henry", math: 80, physics: 85, chemistry: 90 },
        { id: 9, name: "Isabella", math: 95, physics: 90, chemistry: 85 },
        { id: 10, name: "Jack", math: 70, physics: 75, chemistry: 80 },
        { id: 11, name: "Katie", math: 85, physics: 85, chemistry: 80 },
        { id: 12, name: "Leo", math: 95, physics: 95, chemistry: 90 },
      ];
      
    return (
        <div>
            <LineChart
            width={1000}
            height={500}
            data={studentMarks}>
                <Line dataKey="physics"></Line>
                <Line stroke="#82ca9d" dataKey="math"></Line>
                <Line stroke="#8884d8" dataKey="chemistry"></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;