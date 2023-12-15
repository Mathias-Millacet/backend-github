import { Document, model, Schema } from "mongoose";
import ISearch from "../models/search.model";

export interface ISearch extends Document {
  searchTerm: string;
  results: object[];
  dateSearch: Date;
  comment: string;
}

const searchSchema = new Schema<ISearch>({
  searchTerm: { type: String, required: true },
  results: { type: [Object], required: true },
  dateSearch: { type: Date, default: Date.now },
  comment: { type: String, default: null },
});

const SearchModel = model<ISearch>("Search", searchSchema);

export default SearchModel;
