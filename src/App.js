import React from 'react';
import Counter from './Counter'
import UseEffect from './UseEffect'
import UseEffect2 from './UseEffect2'
import UseMemo from './UseMemo'
import UseRef from './UseRef'
import UseContext from './UseContext'
import UseReducer from './UseReducer'

function App() {

  return (
    <div>
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
