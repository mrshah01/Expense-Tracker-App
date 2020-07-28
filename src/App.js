import React from "react";
import Child from './child';
import {TransactionProvider} from './transactionContext';
// import {TransactionContext} from './transactionContext';
function App() {
  return (
    // <TransactionContext.Provider value={}>
    <TransactionProvider>
    <div className="">
      <Child />
    </div>
   </TransactionProvider>
    // <TransactionContext.Provider/>
  );
}

export default App;
