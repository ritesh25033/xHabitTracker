import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function HabitItem({ habit, onEdit, onDelete }) {
  // Create a list of completed habits
  const completedHabits = [];
  if (habit.habits.reading) completedHabits.push('Reading');
  if (habit.habits.exercise) completedHabits.push('Exercise');
  if (habit.habits.meditation) completedHabits.push('Meditation');

  return (
    <div className="habit-item">
      <div className="habit-content">
        <p className="habit-description">{habit.description}</p>
        <div className="habit-tags">
          {completedHabits.map(tag => (
            <span key={tag} className={`habit-tag ${tag.toLowerCase()}`}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="habit-actions">
        <span className="habit-date">{habit.date}</span>
        <button 
          className="delete-button" 
          onClick={() => onDelete(habit.id)}
          aria-label="Delete habit"
        >
          <FaTrash />
        </button>
        <button 
          className="edit-button" 
          onClick={() => onEdit(habit.id)}
          aria-label="Edit habit"
        >
          <FaEdit />
        </button>
      </div>
    </div>
  );
}

export default HabitItem;
