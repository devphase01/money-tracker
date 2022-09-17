import { FC } from 'react';
import './accountCard.scss';
import { FaCoins } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';
import { IAccount } from '../IAccountCards';
import { formatAmount } from '../../../../utils/formatter';

interface AccountProps {
  account: IAccount,
}

const AccountCard: FC<AccountProps> = (props) => {
  const { account } = props;
  return (
    <div
      className="account"
      style={{ backgroundColor: account.color }}
    >
      <div className="account__icon">
        <FaCoins />
      </div>

      <div className="account__display">
        <span className="account__type">
          {account.type}
        </span>
        <div className="account__amount">
          {account.currency + ' ' + formatAmount(account.amount)}
        </div>
      </div>

      <div className="account__edit">
        <MdModeEdit />
      </div>
    </div>
  );
};

export default AccountCard;