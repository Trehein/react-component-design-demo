import React from 'react';
import CodedChildrenComponent from './components/CodedChildrenComponent';
import PassedChildrenComponent from './components/PassedChildrenComponent';
// import SingleComponent from './components/SingleComponent';
import SmallBoxArray from './components/SmallBoxArray';
import MediumBoxArray from './components/MediumBoxArray';
import LargeBoxArray from './components/LargeBoxArray';


const App: React.FC = () => {
  return (
    <div className="App">
        <CodedChildrenComponent />
        <PassedChildrenComponent
            SmallBoxArrayComponent={() => <div>Test</div>}
            MediumBoxArrayComponent={MediumBoxArray}
            LargeBoxArrayComponent={LargeBoxArray}
        />
    </div>
  );
}

export default App;
