import React from 'react';
import AverageCompletions from './AverageCompletions';
import TopHabits from './TopHabits';

function Dashboard({ habits, openModal }) {
  return (
    <div className="dashboard">
      <div className="dashboard-panel">
        <div className="update-panel">
          <h2>Update Today's Progress</h2>
          <button className="add-button" onClick={openModal}>+ Add data</button>
        </div>
        <AverageCompletions habits={habits} />
        <TopHabits habits={habits} />
      </div>
    </div>
  );
}

export default Dashboard;
