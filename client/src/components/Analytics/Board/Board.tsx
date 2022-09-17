import React, { FC } from 'react';
import { tableTemplate, tableIncomeTemplate } from '../../../data/dummy';
import './board.scss';
import Row from './Row/Row';

const Board = () => {
  return (
    <div className="board">
      <div className="board__title">
        Incomes & Expenses Report
      </div>

      <div className="board__amount">
        <div className="board__date">
          Aug 6-Sep 5
        </div>
        <div className="board__total">
          -UAH 1,700.00
        </div>
      </div>

      <div className="board__table board__table_income">
        <div className="board__header">
          <div className="board__income">Total Income</div>
          <div className="board__current">UAH 0.00</div>
          <div className="board__previous">UAH 0.00</div>
        </div>

        <div className="board__rows">
            {tableIncomeTemplate.map(row => (
              <Row key={row.color} data={row}/>
            ))}
        </div>
      </div>

      <div className="board__table board__table_expense">
        <div className="board__header">
          <div className="board__expense">Total Expense</div>
          <div className="board__current">UAH 0.00</div>
          <div className="board__previous">UAH 0.00</div>
        </div>

        <div className="board__rows">
            {tableTemplate.map(row => (
              <Row key={row.color} data={row}/>
            ))}
        </div>
      </div>

    </div>
  );
};

export default Board;