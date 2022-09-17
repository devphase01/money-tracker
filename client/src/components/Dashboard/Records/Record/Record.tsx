import { FC } from 'react';
import RecordService from './record.service';
import { IRecord } from '../IRecord/IRecord';
import './record.scss';

interface RecordProps {
  record: IRecord,
}

const Record: FC<RecordProps> = ({ record }) => {
  const { RecordIcon, IconColor } = RecordService.iconCategory(record.category);
  const { type, amount, currency } = record;
  return (
    <div className="record">
      <div className="record__left">
        <div className="record__category" style={{
          backgroundColor: IconColor
        }}>
          <RecordIcon className="record__category-icon" />
        </div>

        <div className="record__info">
          <div className="record__title">
            {record.category}
          </div>

          <div className="record__account">
            <div />
            {record.account}
          </div>
        </div>
      </div>

      <div className="record__right">
        <div className={`record__amount ${type}`}>
          { type === 'Expense' ? `-${currency}` : currency }
          {' '}
          { RecordService.amountFormat(amount) }
        </div>
        
        <div className="record__date">
          { record.date }
        </div>
      </div>
    </div>
  );
};

export default Record;