import React from 'react';
import HabitItem from './HabitItem';

function RecentCompletions({ habits, onEdit, onDelete }) {
  // Sort habits by date (newest first)
  const sortedHabits = [...habits].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="recent-completions">
      <h2>Recent Habit Completions</h2>
      <div className="habits-list">
        {sortedHabits.length > 0 ? (
          sortedHabits.map(habit => (
            <HabitItem 
              key={habit.id} 
              habit={habit} 
              onEdit={onEdit} 
              onDelete={onDelete} 
            />
          ))
        ) : (
          <p className="no-progress">No Progress to show!</p>
        )}
      </div>
    </div>
  );
}



// function RecentCompletions({ habits, onEdit, onDelete }) {
//     // Sort habits by date (newest first)
//     const sortedHabits = [...habits].sort((a, b) => 
//       new Date(b.date) - new Date(a.date)
//     );
  
//     return (
//       <div className="recent-completions">
//         <h2>Recent Habit Completions</h2>
//         <div className="habits-list">
//           {sortedHabits.length > 0 ? (
//             sortedHabits.map(habit => (
//               <div key={habit.id} className="habit-item">
//                 <div className="habit-content">
//                   <p className="habit-description">{habit.description}</p>
//                   <div className="habit-tags">
//                     {habit.habits.reading && <span className="habit-tag reading">Reading</span>}
//                     {habit.habits.exercise && <span className="habit-tag exercise">Exercise</span>}
//                     {habit.habits.meditation && <span className="habit-tag meditation">Meditation</span>}
//                   </div>
//                 </div>
//                 <div className="habit-actions">
//                   <span className="habit-date">{habit.date}</span>
//                   <button 
//                     className="delete-button" 
//                     onClick={() => onDelete(habit.id)}
//                     aria-label="Delete habit"
//                   >
//                     <FaTrash />
//                   </button>
//                   <button 
//                     className="edit-button" 
//                     onClick={() => onEdit(habit.id)}
//                     aria-label="Edit habit"
//                   >
//                     <FaEdit />
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="no-progress">No Progress to show!</p>
//           )}
//         </div>
//       </div>
//     );
//   }
export default RecentCompletions;
