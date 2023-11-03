import { Document, model, Schema } from "mongoose";
import ISearch from "../models/search.model";

export interface ISearch extends Document {
  searchTerm: string;
  results: object[];
  timestamp: Date;
}

const searchSchema = new Schema<ISearch>({
  searchTerm: { type: String, required: true },
  results: { type: [Object], required: true },
  timestamp: { type: Date, default: Date.now },
});

const SearchModel = model<ISearch>("Search", searchSchema);

export default SearchModel;
