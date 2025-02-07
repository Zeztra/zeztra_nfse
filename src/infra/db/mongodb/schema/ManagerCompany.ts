import { Schema, Document } from 'mongoose';

import conn from '../connection';
import ManagerCompany, { EPlayerNFSe } from '@domain/entities/ManagerCompany';

type DocumentModel = Document & ManagerCompany;

const ManagerCompanySchema = new Schema(
  {
    cpfCnpj: {
      type: String,
      required: true,
      index: true,
    },
    configNFSe: {
      key: { type: String },
      actived: {
        type: Boolean,
        default: 1,
      },
      playerNFSe: {
        type: String,
        enum: [EPlayerNFSe.PLUGNOTAS],
      },
    },
  },
  {
    collection: 'ManagerCompany',
    timestamps: true,
  },
);

const managerCompanySchema = conn.model<DocumentModel>(
  'ManagerCompany',
  ManagerCompanySchema,
);

export { managerCompanySchema };
