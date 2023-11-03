import SearchModel from "../models/search.model";
import { ISearch } from "../models/search.model";

class SearchService {
  async createSearch(searchData: ISearch): Promise<ISearch> {
    return SearchModel.create(searchData);
  }

  async getAllSearches(): Promise<ISearch[]> {
    return SearchModel.find();
  }

  async getSearchById(searchId: string): Promise<ISearch | null> {
    return SearchModel.findById(searchId);
  }

  async updateSearch(
    searchId: string,
    searchData: Partial<ISearch>
  ): Promise<ISearch | null> {
    return SearchModel.findByIdAndUpdate(searchId, searchData, { new: true });
  }

  async deleteSearch(searchId: string): Promise<ISearch | null> {
    return SearchModel.findByIdAndDelete(searchId);
  }
}

export default new SearchService();
