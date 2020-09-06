import mongoose, { Schema, Document } from 'mongoose';

export interface IProductBackup extends Document {
  productInfo: Schema;
  requirements: [];
  paymentInfo: Schema;
}

const ProductInfoSchema: Schema = new Schema({
  nameProduct: {
    type: String,
    trim: true
  },
  typeProduct: {
    type: String,
    trim: true
  },
  idSpecialist: {
    type: String,
    trim: true
  },
  idClient: {
    type: String,
    trim: true
  },
  statusProduct: {
    type: String,
    default: 'In Process',
    trim: true
  },
  daysEstimated: {
    type: Number,
    default: 30
  },
  date: {
    type: Date,
    default: Date.now()
  },
  listUrl: {
    type: Array,
    default: []
  }
});
const requirementsDesignSchema: Schema = new Schema({
  percentRequirement: {
    type: Number,
    required: true,
    trim: true
  },
  statusRequirement: {
    type: String,
    required: true,
    trim: true
  },
  urlsRequirementDesign: {
    type: Array,
    default: [],
    _id: false
  }
});
const requirementsDeploySchema: Schema = new Schema({
  percentRequirement: {
    type: Number,
    required: true,
    trim: true
  },
  statusRequirement: {
    type: String,
    required: true,
    trim: true
  }
});

const RequirementSchema: Schema = new Schema({
  requirementsDesign: {
    type: requirementsDesignSchema,
    required: true,
    _id: false
  },
  requirementsDevelopment: {
    type: Array,
    required: true,
    _id: false
  },
  requirementsDeploy: {
    type: requirementsDeploySchema,
    required: true,
    _id: false
  }
});

const PaymentInfoSchema: Schema = new Schema({
  typePayment: {
    type: String,
    trim: true
  },
  pricePayment: {
    type: Number,
    trim: true
  },
  statusPayment: {
    type: String,
    default: 'Pending',
    trim: true
  }
});

const ProductBackupSchema: Schema = new Schema({
  productInfo: {
    type: ProductInfoSchema,
    _id: false
  },
  requirements: {
    type: RequirementSchema,
    require: true,
    _id: false
  },
  paymentInfo: {
    type: PaymentInfoSchema,
    _id: false
  }
});

export default mongoose.model<IProductBackup>('ProductBackup', ProductBackupSchema);
