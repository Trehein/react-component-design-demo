import React from 'react';
import CodedChildrenComponent from './components/CodedChildrenComponent';
import PassedChildrenComponent from './components/PassedChildrenComponent';
import SingleComponent from './components/SingleComponent';
import SmallBoxArray from './components/SmallBoxArray';
import MediumBoxArray from './components/MediumBoxArray';
import LargeBoxArray from './components/LargeBoxArray';


const App: React.FC = () => {
  return (
    <div className="App">
        <h1>Single Component</h1>
        <SingleComponent />
        <h1>Component with Hard Coded Children</h1>
        <CodedChildrenComponent />
        <h1>Component with Passed Children</h1>
        <PassedChildrenComponent />
        <SmallBoxArray />
        <MediumBoxArray />
        <LargeBoxArray />
    </div>
  );
}

export default App;
