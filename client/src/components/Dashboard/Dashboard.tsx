import './dashboard.scss';
import { FC, useEffect } from 'react';
import Records from './Records/Records';
import CashFlow from './CashFlow/CashFlow';
import Expenses from './Expenses/Expenses';
import {
  recordsData,
  CashFlowData,
  ExpensesData
} from '../../data/dummy';
import CreateBoard from './Create/CreateBoard';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__container container">
        <div className="dashboard__card-list">
          <Expenses data={ExpensesData} />
          <CashFlow {...CashFlowData} />
          <Records records={recordsData} />
          <Records records={recordsData} />
          <CreateBoard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;