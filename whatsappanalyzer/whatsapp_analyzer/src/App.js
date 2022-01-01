import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import AnalysisScreen from './Components/analysisScreen'
import UploadScreen from './Components/uploadScreen'

// Generate the application
function App() {

  const [logs, setLogs] = useState('')

  // Show this screen before analyzing
  if (logs === '') {
    return (
      <UploadScreen setLogs={setLogs}/>
    )
  }
  
  // Show this screen after analyzing
  else {
    return (
      <AnalysisScreen 
        logs={logs}
        setLogs={setLogs}
      />
    )
  }
}

export default App;
