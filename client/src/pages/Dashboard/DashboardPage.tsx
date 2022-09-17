import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountCards, Dashboard } from '../../components';
import { accountsData } from '../../data/dummy';

const DashboardPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => navigate('/dashboard'), []);
  return (
    <>
      <AccountCards accounts={accountsData}/>
      <Dashboard />
    </>
  );
};

export default DashboardPage;