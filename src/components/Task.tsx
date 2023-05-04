import { ReactElement } from 'react';

interface ITask {
  title: String;
}

const Task = ({ title }: ITask): ReactElement => {
  return <div>{title}</div>;
};

export default Task;
