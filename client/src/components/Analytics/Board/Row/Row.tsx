import { FC } from 'react';
import { IconType } from 'react-icons';
import { formatAmount } from '../../../../utils/formatter';
import './row.scss';

interface IData {
  icon: IconType,
  category: string,
  current: number,
  previous: number,
  currency: string,
  color: string,
}

interface IProps {
  data: IData
}

const Row: FC<IProps> = ({ data }) => {
  const { icon: Icon } = data;
  return (
    <div className="board__row">
      <div className="board__row-category">
        <div
          className="board__row-category-item"
          style={{ backgroundColor: data.color }}
        >
          <Icon className="board__row-icon" />
        </div>
      </div>
      <div className="board__row-income">{data.category}</div>
      <div className="board__row-current">
        {data.currency + ' ' + formatAmount(data.current)}
      </div>
      <div className="board__row-previous">
        {data.currency + ' ' + formatAmount(data.previous)}
      </div>
    </div>
  );
};
export default Row;