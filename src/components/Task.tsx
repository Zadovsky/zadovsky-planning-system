import { ReactElement } from 'react';
import styles from './Task.module.scss';

interface ITask {
  title: String;
}

const Task = ({ title }: ITask): ReactElement => {
  return <div className={styles.task}>{title}</div>;
};

export default Task;
