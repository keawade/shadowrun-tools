import React from 'react';
import './styles/app.scss';

import PriorityTable from './components/PriorityTable';

function App() {
  return (
    <div className='app'>
      <header>Shadowrun Utils</header>

      <PriorityTable />
    </div>
  );
}

export default App;
