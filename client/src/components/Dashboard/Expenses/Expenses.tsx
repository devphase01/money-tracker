import { FC, useRef } from 'react';
import './expenses.scss';
import {
  Chart as ChartJS,
  DoughnutController,
  Tooltip,
  ArcElement
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { IExpensesProps } from './IExpenses';
import { FiMoreVertical } from 'react-icons/fi';

ChartJS.register(
  DoughnutController,
  Tooltip,
  ArcElement
);

const Expenses: FC<IExpensesProps> = ({ data }) => {
  const chartRef = useRef<ChartJS>();

  return (
    <div className="expenses card-container">
      <div className="expenses__header card-header">
        <span>
          Expenses Structure
        </span>
        <FiMoreVertical className="card-options" />
      </div>

      <div className="card__divider" />

      <div className="expenses__content">
        <div className="expenses__title">
          <div className="expenses__date">
            AUG 5-SEP 4
          </div>
          <div className="expenses__amount">
            -UAH 1 854.00
          </div>
        </div>

        <div className="expenses__chart-container">
          <div className="expenses__chart">
            <Chart
              data={data}
              type='doughnut'
              ref={chartRef}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Expenses;