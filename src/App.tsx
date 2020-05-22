import React from 'react';

import Layout from './viewsCommon/Layout';
import ToDoView from './views/ToDo/ToDoView';

const App: React.FC = () => (
  <Layout >
    <ToDoView />
  </Layout>
)

export default App;
