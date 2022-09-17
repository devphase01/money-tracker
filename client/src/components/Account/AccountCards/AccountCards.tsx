import { FC, Fragment } from 'react';
import { IAccount } from './IAccountCards';
import './accountCards.scss';
import AccountCard from './AccountCard/AccountCard';

interface ICards {
  accounts: IAccount[]
}

const AccountCards: FC<ICards> = (props) => {
  const { accounts } = props;
  return (
    <div className="account-cards">
      <div className="account-cards__container container">
        <div className="account-cards__list">
          {accounts.map((account) => (
            <Fragment key={account.id}>
              <AccountCard account={account} />
            </Fragment>
          ))}
          <button className="account-cards__add-btn">
            <span>+ Add Account</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountCards;