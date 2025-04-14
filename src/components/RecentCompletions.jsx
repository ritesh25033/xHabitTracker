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

export default RecentCompletions;
