import React from 'react';
import List from './List';
import Form from './Form';
import Posts from './Posts';

function App() {
  return (
    <div>
      <h3>Articles</h3>
      <List />

      <h3>Add article</h3>
      <Form />
      <h3>Posts</h3>
      <Posts />
    </div>
  );
}

export default App;
