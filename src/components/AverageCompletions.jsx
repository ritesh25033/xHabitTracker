import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// function AverageCompletions({ habits }) {
//   // Calculate the total counts for each habit type
//   const calculateData = () => {
//     const counts = { reading: 0, exercise: 0, meditation: 0 };
    
//     habits.forEach(habit => {
//       if (habit.habits.reading) counts.reading++;
//       if (habit.habits.exercise) counts.exercise++;
//       if (habit.habits.meditation) counts.meditation++;
//     });
    
//     const total = counts.reading + counts.exercise + counts.meditation;
//     if (total === 0) return [];
    
//     return [
//       { name: 'Reading', value: counts.reading, percentage: Math.round((counts.reading / total) * 100) },
//       { name: 'Exercise', value: counts.exercise, percentage: Math.round((counts.exercise / total) * 100) },
//       { name: 'Meditation', value: counts.meditation, percentage: Math.round((counts.meditation / total) * 100) }
//     ].filter(item => item.value > 0);
//   };

//   const data = calculateData();
//   const COLORS = ['#8884d8', '#FF8042', '#FFBB28'];
  
//   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
//     const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
    
//     return (
//       <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
//         {`${(percent * 100).toFixed(0)}%`}
//       </text>
//     );
//   };

//   return (
//     <div className="chart-panel">
//       <h2>Average Completions</h2>
//       <div className="chart-container">
//         {data.length > 0 ? (
//           <ResponsiveContainer width="100%" height={200}>
//             <PieChart>
//               <Pie
//                 data={data}
//                 cx="50%"
//                 cy="50%"
//                 labelLine={false}
//                 label={renderCustomizedLabel}
//                 outerRadius={80}
//                 fill="#8884d8"
//                 dataKey="value"
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         ) : (
//           <div className="no-data">No data to display</div>
//         )}
//       </div>
//       <div className="chart-legend">
//         <span className="legend-item reading">Reading</span>
//         <span className="legend-item exercise">Exercise</span>
//         <span className="legend-item meditation">Meditation</span>
//       </div>
//     </div>
//   );
// }


function AverageCompletions({ habits }) {
    // Calculate the total counts for each habit type
    const calculateData = () => {
      const counts = { reading: 0, exercise: 0, meditation: 0 };
      
      habits.forEach(habit => {
        if (habit.habits.reading) counts.reading++;
        if (habit.habits.exercise) counts.exercise++;
        if (habit.habits.meditation) counts.meditation++;
      });
      
      const total = counts.reading + counts.exercise + counts.meditation;
      if (total === 0) return [];
      
      return [
        { name: 'Reading', value: counts.reading, percentage: Math.round((counts.reading / total) * 100) },
        { name: 'Exercise', value: counts.exercise, percentage: Math.round((counts.exercise / total) * 100) },
        { name: 'Meditation', value: counts.meditation, percentage: Math.round((counts.meditation / total) * 100) }
      ].filter(item => item.value > 0);
    };
  
    const data = calculateData();
    const COLORS = ['#8884d8', '#FF8042', '#FFBB28'];
    
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
      const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
      
      return (
        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
  
    return (
      <div className="chart-panel">
        <h2>Average Completions</h2>
        <div className="chart-container">
          {data.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="no-data">No data to display</div>
          )}
        </div>
        <div className="chart-legend">
          <span className="legend-item reading">Reading</span>
          <span className="legend-item exercise">Exercise</span>
          <span className="legend-item meditation">Meditation</span>
        </div>
      </div>
    );
  }
  

export default AverageCompletions;
