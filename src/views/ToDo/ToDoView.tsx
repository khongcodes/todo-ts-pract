import React from 'react';

import ToDoHeader from './ToDoHeader';

// const ToDoView: React.FC = () => {
//   return (
//     <div>
//       <ToDoHeader />
//     </div>
//   )
// }

type MyProps = {

};

type MyState = {
  tasks: object[];
};

class ToDoView extends React.Component<MyProps, MyState> {
  state = {
    tasks: []
  };

  render() {
    return (
      <>
        <ToDoHeader />
      </>
    )
  }
}

export default ToDoView;