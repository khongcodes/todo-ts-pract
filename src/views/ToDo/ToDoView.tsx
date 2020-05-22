import React, { SyntheticEvent } from 'react';

import ToDoHeader from './ToDoHeader';

import todoStyles from '../../styles/ToDoView.module.sass';


type ToDoTask = {
  id: number;
  name: string;
  done: boolean;
}

type ToDoProps = {};

type ToDoState = {
  tasks: ToDoTask[];
};

type TaskCallbacks = {
  nameCallback: (id: number, event: SyntheticEvent) => void;
  doneCallback: (id: number) => void;
  deleteCallback: (id: number) => void;
};

type RenderedTaskProp = ToDoTask & TaskCallbacks

const RenderedTask: React.FC<RenderedTaskProp> = ({ 
  id, name, done, 
  nameCallback, doneCallback, deleteCallback
}) => {
  return (
    <div className={todoStyles.taskContainer}>
      <input
        className={todoStyles.taskNameInput}
        type='text' 
        value={name}
        placeholder='Add your task name here.'
        onChange={event => nameCallback(id, event)}
      />

      <input 
        className={todoStyles.taskCheckBox}
        type='checkbox'
        checked={done} 
        onChange={() => doneCallback(id)}
      />

      <button
        className={todoStyles.taskDeleteButton}
        onClick={() => deleteCallback(id)}
      >
        X
      </button>
    </div>
  )
}

class ToDoView extends React.Component<ToDoProps, ToDoState> {
  constructor(props: ToDoProps) {
    super(props);
    this.state = {
      tasks: []
    };

    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleClearTasks = this.handleClearTasks.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDoneChange = this.handleDoneChange.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this)
  }

  handleAddTask(): void {
    this.setState((prevState: ToDoState) => ({
      tasks: prevState.tasks.concat({
        id: prevState.tasks.length,
        name: '',
        done: false,
      })
    }));
  }

  handleClearTasks(): void {
    this.setState({
      tasks: []
    });
  }

  handleNameChange(id: number, event: any) {
    const newState = this.state;
    newState.tasks[id].name = event.currentTarget.value;
    this.setState(newState);
  }

  handleDoneChange(id: number) {
    const newState = this.state;
    newState.tasks[id].done = !this.state.tasks[id].done;
    this.setState(newState);
  }

  handleDeleteTask(id: number) {
    const newTasks = this.state.tasks.filter(
      (task: ToDoTask) => task.id !== id
    ).map(
      (task: ToDoTask, index: number) => {
        task.id = index;
        return task;
      }
    );
    this.setState({ tasks: newTasks });
  }


  render() {
    return (
      <>
        <ToDoHeader />

        <div className={todoStyles.root}>

          <div className={todoStyles.controlPanel}>
            <button onClick={this.handleAddTask}>
              Add task
            </button>

            <button onClick={this.handleClearTasks}>
              Clear tasks
            </button>
          </div>

          <div className={todoStyles.listContainer}>
            {this.state.tasks.map((task: ToDoTask) => (
              <RenderedTask 
                {...task} 
                nameCallback = {this.handleNameChange}
                doneCallback = {this.handleDoneChange}
                deleteCallback = {this.handleDeleteTask}
              />
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default ToDoView;