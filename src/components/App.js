import React from 'react';
import List from './List';
import Form from './Form';

function App() {
  return (
    <div>
      <h3>Articles</h3>
      <List />

      <h3>Add article</h3>
      <Form />
    </div>
  );
}

export default App;
