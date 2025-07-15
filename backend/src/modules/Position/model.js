import mongoose from "mongoose";

const Schema = mongoose.Schema;
const positionSchema = new Schema(
  {
    tradePair: {
      type: String,
    },
    contracts: {  // new field
      type: Number,
      default: 0,
    },
    tradeSize: {
      type: Number,
      default: 0,
    },
    profit: {
      type: Number,
      default: 0,
    },
    side: {
      type: String,
    },
    timestamps: {
      type: Number,
    }
  },
  {
    autoIndex: true,
    timestamps: true,
    toJSON: { getters: true },
  }
);
const PositionModel = mongoose.model("Position", positionSchema, "positions");

export default PositionModel;
