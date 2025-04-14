// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import { SnackbarProvider } from 'notistack';
// import Dashboard from './components/Dashboard';
// import HabitForm from './components/HabitForm';
// import RecentCompletions from './components/RecentCompletions';
// import './App.css';

// // Set app element for accessibility
// Modal.setAppElement('#root');

// function App() {
//   const [habits, setHabits] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingHabit, setEditingHabit] = useState(null);
  
//   // Load habits from localStorage on component mount
//   useEffect(() => {
//     const savedHabits = localStorage.getItem('habits');
//     if (savedHabits) {
//       setHabits(JSON.parse(savedHabits));
//     }
//   }, []);

//   // Save habits to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem('habits', JSON.stringify(habits));
//   }, [habits]);

//   const openModal = () => {
//     setIsModalOpen(true);
//     setEditingHabit(null);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditingHabit(null);
//   };

//   const addHabit = (newHabit) => {
//     setHabits([...habits, { ...newHabit, id: Date.now() }]);
//     closeModal();
//   };

//   const editHabit = (habitId) => {
//     const habit = habits.find(h => h.id === habitId);
//     if (habit) {
//       setEditingHabit(habit);
//       setIsModalOpen(true);
//     }
//   };

//   const updateHabit = (updatedHabit) => {
//     setHabits(habits.map(habit => 
//       habit.id === updatedHabit.id ? updatedHabit : habit
//     ));
//     closeModal();
//   };

//   const deleteHabit = (habitId) => {
//     setHabits(habits.filter(habit => habit.id !== habitId));
//   };

//   return (
//     <SnackbarProvider maxSnack={3}>
//       <div className="app">
//         <h1>Habit Tracker</h1>
//         <Dashboard 
//           habits={habits} 
//           openModal={openModal} 
//         />
//         <RecentCompletions 
//           habits={habits} 
//           onEdit={editHabit} 
//           onDelete={deleteHabit} 
//         />
//         <HabitForm 
//           isOpen={isModalOpen} 
//           onClose={closeModal} 
//           onSubmit={editingHabit ? updateHabit : addHabit} 
//           editingHabit={editingHabit}
//         />
//       </div>
//     </SnackbarProvider>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import { SnackbarProvider } from 'notistack';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
// import AverageCompletions from './components/AverageCompletions';

// import './App.css';

// // Set app element for accessibility
// Modal.setAppElement('#root');

// function App() {
//   const [habits, setHabits] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingHabit, setEditingHabit] = useState(null);
  
//   // Load habits from localStorage on component mount
//   useEffect(() => {
//     const savedHabits = localStorage.getItem('habits');
//     if (savedHabits) {
//       setHabits(JSON.parse(savedHabits));
//     }
//   }, []);

//   // Save habits to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem('habits', JSON.stringify(habits));
//   }, [habits]);

//   const openModal = () => {
//     setIsModalOpen(true);
//     setEditingHabit(null);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditingHabit(null);
//   };

//   const addHabit = (newHabit) => {
//     setHabits([...habits, { ...newHabit, id: Date.now() }]);
//     closeModal();
//   };

//   const editHabit = (habitId) => {
//     const habit = habits.find(h => h.id === habitId);
//     if (habit) {
//       setEditingHabit(habit);
//       setIsModalOpen(true);
//     }
//   };

//   const updateHabit = (updatedHabit) => {
//     setHabits(habits.map(habit => 
//       habit.id === updatedHabit.id ? updatedHabit : habit
//     ));
//     closeModal();
//   };

//   const deleteHabit = (habitId) => {
//     setHabits(habits.filter(habit => habit.id !== habitId));
//   };

//   return (
//     <SnackbarProvider maxSnack={3}>
//       <div className="app">
//         <h1>Habit Tracker</h1>
//         <div className="dashboard">
//           <div className="update-panel">
//             <h2>Update Today's Progress</h2>
//             <button className="add-button" onClick={openModal}>+ Add data</button>
//           </div>
//           <AverageCompletions habits={habits} />
//           <TopHabits habits={habits} />
//         </div>
//         <RecentCompletions 
//           habits={habits} 
//           onEdit={editHabit} 
//           onDelete={deleteHabit} 
//         />
//         <HabitForm 
//           isOpen={isModalOpen} 
//           onClose={closeModal} 
//           onSubmit={editingHabit ? updateHabit : addHabit} 
//           editingHabit={editingHabit}
//         />
//       </div>
//     </SnackbarProvider>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { SnackbarProvider } from 'notistack';
import AverageCompletions from './components/AverageCompletions';
import TopHabits from './components/TopHabits';
import RecentCompletions from './components/RecentCompletions';
import HabitForm from './components/HabitForm';
import './App.css';

// Set app element for accessibility
Modal.setAppElement('#root');

function App() {
  const [habits, setHabits] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingHabit, setEditingHabit] = useState(null);
  
  // Load habits from localStorage on component mount
  useEffect(() => {
    const savedHabits = localStorage.getItem('habits');
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    }
  }, []);

  // Save habits to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const openModal = () => {
    setIsModalOpen(true);
    setEditingHabit(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingHabit(null);
  };

  const addHabit = (newHabit) => {
    setHabits([...habits, { ...newHabit, id: Date.now() }]);
    closeModal();
  };

  const editHabit = (habitId) => {
    const habit = habits.find(h => h.id === habitId);
    if (habit) {
      setEditingHabit(habit);
      setIsModalOpen(true);
    }
  };

  const updateHabit = (updatedHabit) => {
    setHabits(habits.map(habit => 
      habit.id === updatedHabit.id ? updatedHabit : habit
    ));
    closeModal();
  };

  const deleteHabit = (habitId) => {
    setHabits(habits.filter(habit => habit.id !== habitId));
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <div className="app">
        <h1>Habit Tracker</h1>
        <div className="dashboard">
          <div className="update-panel">
            <h2>Update Today's Progress</h2>
            <button className="add-button" onClick={openModal}>+ Add data</button>
          </div>
          <AverageCompletions habits={habits} />
          <TopHabits habits={habits} />
        </div>
        <RecentCompletions 
          habits={habits} 
          onEdit={editHabit} 
          onDelete={deleteHabit} 
        />
        <HabitForm 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          onSubmit={editingHabit ? updateHabit : addHabit} 
          editingHabit={editingHabit}
        />
      </div>
    </SnackbarProvider>
  );
}

export default App;
