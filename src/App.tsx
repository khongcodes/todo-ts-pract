import React from 'react';

import Layout from './viewsCommon/Layout';

import appStyles from './styles/App.module.sass'

const App: React.FC = () => (
  <Layout message="this is test message" >
    <div className={appStyles.test} >
      test
    </div>

    <div>
      test 2
    </div>
  </Layout>
)

export default App;
