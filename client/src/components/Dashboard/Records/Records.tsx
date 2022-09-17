import './records.scss';
import { FC, Fragment } from 'react';
import { IRecord } from './IRecord/IRecord';
import Record from './Record/Record';
import { FiMoreVertical } from 'react-icons/fi';

interface RecordProps {
  records: IRecord[]
}

const Records: FC<RecordProps> = ({ records }) => {
  return (
    <div className="records card-container">
      <div className="records__header card-header">
        <span>
          Last Records
        </span>
        <FiMoreVertical className="card-options" />
      </div>

      <div className="card__divider" />

      <div className="records__list">
        {records.slice(0, 5).map((record, index) => (
          <Fragment key={record.category}>
            <Record record={record} />
            {index !== 4 && (
              <div className="card__divider" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Records;