import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// function TopHabits({ habits }) {
//   // Filter habits for the last week
//   const getLastWeekHabits = () => {
//     const oneWeekAgo = new Date();
//     oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
//     return habits.filter(habit => new Date(habit.date) >= oneWeekAgo);
//   };
  
//   // Prepare data for the bar chart
//   const prepareChartData = () => {
//     const lastWeekHabits = getLastWeekHabits();
//     const counts = { Reading: 0, Exercise: 0, Meditation: 0 };
    
//     lastWeekHabits.forEach(habit => {
//       if (habit.habits.reading) counts.Reading++;
//       if (habit.habits.exercise) counts.Exercise++;
//       if (habit.habits.meditation) counts.Meditation++;
//     });
    
//     return [
//       { name: 'Reading', value: counts.Reading },
//       { name: 'Exercise', value: counts.Exercise },
//       { name: 'Meditation', value: counts.Meditation }
//     ];
//   };
  
//   const data = prepareChartData();

//   return (
//     <div className="chart-panel">
//       <h2>Top Habits (Last Week)</h2>
//       <div className="chart-container">
//         <ResponsiveContainer width="100%" height={200}>
//           <BarChart
//             layout="vertical"
//             data={data}
//             margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis type="number" />
//             <YAxis dataKey="name" type="category" />
//             <Tooltip />
//             <Bar dataKey="value" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }


function TopHabits({ habits }) {
    // Filter habits for the last week
    const getLastWeekHabits = () => {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      
      return habits.filter(habit => new Date(habit.date) >= oneWeekAgo);
    };
    
    // Prepare data for the bar chart
    const prepareChartData = () => {
      const lastWeekHabits = getLastWeekHabits();
      const counts = { Reading: 0, Exercise: 0, Meditation: 0 };
      
      lastWeekHabits.forEach(habit => {
        if (habit.habits.reading) counts.Reading++;
        if (habit.habits.exercise) counts.Exercise++;
        if (habit.habits.meditation) counts.Meditation++;
      });
      
      return [
        { name: 'Reading', value: counts.Reading },
        { name: 'Exercise', value: counts.Exercise },
        { name: 'Meditation', value: counts.Meditation }
      ];
    };
    
    const data = prepareChartData();
  
    return (
      <div className="chart-panel">
        <h2>Top Habits (Last Week)</h2>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              layout="vertical"
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

export default TopHabits;
