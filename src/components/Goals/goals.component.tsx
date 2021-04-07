import React, {useState} from 'react';
import GoalsScreen from './goals.screen';

/**
 * Goals Component
 */
const GoalsComponent = () => {
  /**
   * States
   */
  const [data, setData] = useState([
    {
      id: '1',
      title: 'Hello :D 1',
    },
    {
      id: '2',
      title: 'Hello :D 2',
    },
    {
      id: '3',
      title: 'Hello :D 3',
    },
    {
      id: '4',
      title: 'Hello :D 4',
    },
    {
      id: '5',
      title: 'Hello :D 5',
    },
    {
      id: '6',
      title: 'Hello :D 5',
    },
    {
      id: '7',
      title: 'Hello :D 5',
    },
    {
      id: '8',
      title: 'Hello :D 5',
    },
    {
      id: '9',
      title: 'Hello :D 5',
    },
    {
      id: '10',
      title: 'Hello :D 5',
    },
    {
      id: '11',
      title: 'Hello :D 5',
    },
    {
      id: '12',
      title: 'Hello :D 5',
    },
    {
      id: '13',
      title: 'Hello :D 5',
    },
    {
      id: '14',
      title: 'Hello :D 5',
    },
    {
      id: '15',
      title: 'Hello :D 5',
    },
  ]);

  /**
   * Render
   */
  return <GoalsScreen data={data} />;
};

export default GoalsComponent;
