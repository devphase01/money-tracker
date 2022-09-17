import { ObjectId } from 'mongoose';

export class CreateRecordDto {
  readonly accountId: ObjectId;
  readonly category: string[];
  readonly label: string;
  readonly amount: number;
}
