import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useSnackbar } from 'notistack';

function HabitForm({ isOpen, onClose, onSubmit, editingHabit }) {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    habits: {
      reading: false,
      exercise: false,
      meditation: false
    },
    description: ''
  });

  // Reset form when opening or when editingHabit changes
  useEffect(() => {
    if (isOpen) {
      if (editingHabit) {
        setFormData({
          id: editingHabit.id,
          date: editingHabit.date,
          habits: { ...editingHabit.habits },
          description: editingHabit.description
        });
      } else {
        setFormData({
          date: new Date().toISOString().split('T')[0],
          habits: {
            reading: false,
            exercise: false,
            meditation: false
          },
          description: ''
        });
      }
    }
  }, [isOpen, editingHabit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        habits: {
          ...formData.habits,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate that at least one habit is selected
    if (!formData.habits.reading && !formData.habits.exercise && !formData.habits.meditation) {
      enqueueSnackbar('Please select at least one habit', { variant: 'error' });
      return;
    }
    
    onSubmit(formData);
    enqueueSnackbar(editingHabit ? 'Habit updated successfully' : 'Habit added successfully', { 
      variant: 'success' 
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={editingHabit ? "Edit Habit" : "Update Today's Progress"}
      className="habit-modal"
      overlayClassName="habit-modal-overlay"
    >
      <h2>{editingHabit ? "Edit Habit" : "What Did You Do Today?"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group checkbox-group">
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="reading"
              name="reading"
              checked={formData.habits.reading}
              onChange={handleChange}
            />
            <label htmlFor="reading">Reading</label>
          </div>
          
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="exercise"
              name="exercise"
              checked={formData.habits.exercise}
              onChange={handleChange}
            />
            <label htmlFor="exercise">Exercise</label>
          </div>
          
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="meditation"
              name="meditation"
              checked={formData.habits.meditation}
              onChange={handleChange}
            />
            <label htmlFor="meditation">Meditation</label>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Short Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Enter a short description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            {editingHabit ? "Update" : "Submit"}
          </button>
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default HabitForm;
