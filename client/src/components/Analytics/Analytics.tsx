import { Board } from './';
import './analytics.scss';

const Analytics = () => {
  return (
    <div className="analytics">
      <div className="analytics__container container">
        <div className="analytics__header">
          Incomes & Expenses Report
        </div>

        <div className="analytics__content">
          <Board />
        </div>
      </div>
    </div>
  );
};

export default Analytics;