import { FC } from 'react';
import './cashFlow.scss';
import { formatAmount } from '../../../utils/formatter';
import { FiMoreVertical } from 'react-icons/fi';

type ICashFlow = {
  income: number,
  expense: number,
  currency: string,
  date: string,
};

const CashFlow: FC<ICashFlow> = ({
  income,
  expense,
  currency,
  date
}) => {
  return (
    <div className="cash-flow card-container">
      <div className="cash-flow__header card-header">
        <span>
          Cash Flow
        </span>
        <FiMoreVertical className="card-options" />
      </div>

      <div className="card__divider" />

      <div className="cash-flow__content">
        <div className="cash-flow__title">
          <div className="cash-flow__date">
            { date }
          </div>
          <div className="cash-flow__amount">
            { income - expense < 0 && '-' }
            { `${currency} ${formatAmount(income - expense)}` }
          </div>
        </div>

        <div className="cash-flow__status-bars">
          <div className="cash-flow__status">
            <div className="cash-flow__status-title">
                <span>Income</span>
                <span>{currency + ' ' + formatAmount(income)}</span>
            </div>

            <div className={`cash-flow__status-bar 
            cash-flow__status-bar_income`}>
              <div style={{ width: '45%' }}/>
            </div>
          </div>

          <div className="cash-flow__status">
            <div className="cash-flow__status-title">
                <span>Expense</span>
                <span>{currency + ' ' + formatAmount(expense)}</span>
            </div>

            <div className={`cash-flow__status-bar 
            cash-flow__status-bar_expense`}>
              <div style={{ width: '60%' }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashFlow;