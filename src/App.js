import React from 'react';
import Counter from './Counter'
import UseEffect from './UseEffect'
import UseEffect2 from './UseEffect2'
import UseMemo from './UseMemo'
import UseRef from './UseRef'
import UseContext from './UseContext'
import UseReducer from './UseReducer'
import UseReducer2 from './UseReducer2'
import UseCallback from './UseCallback'
import ExampleToUseLocalStorage from './ExampleToUseLocalStorage'

function App() {

  return (
    <div>
      <ExampleToUseLocalStorage />
      <p>______________________________________________</p>
      <UseCallback />
      <p>______________________________________________</p>
      <UseReducer2 />
      <p>______________________________________________</p>
      <UseReducer />
      <p>______________________________________________</p>
      <UseContext />
      <p>______________________________________________</p>
      <UseRef />
      <p>______________________________________________</p>
      <UseMemo />
      <p>______________________________________________</p>
      <UseEffect2 />
      <p>______________________________________________</p>
      <UseEffect />
      <p>______________________________________________</p>
      <Counter />
      <p>______________________________________________</p>
    </div>
  );
}

export default App;
