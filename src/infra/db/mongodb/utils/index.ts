import { Types } from 'mongoose';

export const ObjectIdCast = (_id: string | Types.ObjectId): Types.ObjectId => {
  return new Types.ObjectId(_id);
};
