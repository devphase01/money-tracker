import { FC } from 'react';
import './createBoard.scss';

const CreateBoard: FC = () => {
  return (
    <div className="create-board card-container">
      <div className="create-board__label">
        <div className="create-board__circle">
          <span>+</span>
        </div>

        <div className="create-board__text">
          Add Card
        </div>
      </div>
    </div>
  );
};

export default CreateBoard;