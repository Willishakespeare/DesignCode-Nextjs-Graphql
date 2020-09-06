import mongoose, { Schema, Document } from 'mongoose';

export interface IRequirement extends Document {
  name: string;
}
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

export default mongoose.model<IRequirement>('Requirement', RequirementSchema);
