import { Request, Response } from "express";
import SearchModel from "../models/search.model";
import searchService from "../services/search.service";

const SearchController = {
  async createSearch(req: Request, res: Response): Promise<void> {
    try {
      const savedSearch = searchService.createSearch(req.body);
      res.status(201).json(savedSearch);
    } catch (error) {
      console.error("Error al crear la búsqueda:", error);
      res.status(500).json({ error: "Error interno al crear la búsqueda." });
    }
  },

  // Otros métodos del controlador para obtener, actualizar y eliminar búsquedas
  async getAllSearches(_req: Request, res: Response): Promise<void> {
    try {
      const searches = await SearchModel.find();
      res.status(200).json(searches);
    } catch (error) {
      console.error("Error al obtener las búsquedas:", error);
      res
        .status(500)
        .json({ error: "Error interno al obtener las búsquedas." });
    }
  },

  async getSearchById(req: Request, res: Response): Promise<void> {
    const searchId = req.params.searchId;
    try {
      const search = await SearchModel.findById(searchId);
      if (search) {
        res.status(200).json(search);
      } else {
        res.status(404).json({ error: "Búsqueda no encontrada." });
      }
    } catch (error) {
      console.error("Error al obtener la búsqueda:", error);
      res.status(500).json({ error: "Error interno al obtener la búsqueda." });
    }
  },

  async updateSearch(req: Request, res: Response): Promise<void> {
    const searchId = req.params.searchId;
    try {
      const updatedSearch = await SearchModel.findByIdAndUpdate(
        searchId,
        req.body,
        { new: true }
      );
      if (updatedSearch) {
        res.status(200).json(updatedSearch);
      } else {
        res.status(404).json({ error: "Búsqueda no encontrada." });
      }
    } catch (error) {
      console.error("Error al actualizar la búsqueda:", error);
      res
        .status(500)
        .json({ error: "Error interno al actualizar la búsqueda." });
    }
  },

  async deleteSearch(req: Request, res: Response): Promise<void> {
    const searchId = req.params.searchId;
    try {
      const deletedSearch = await SearchModel.findByIdAndDelete(searchId);
      if (deletedSearch) {
        res.status(204).json({ message: "Búsqueda eliminada con éxito." });
      } else {
        res.status(404).json({ error: "Búsqueda no encontrada." });
      }
    } catch (error) {
      console.error("Error al eliminar la búsqueda:", error);
      res.status(500).json({ error: "Error interno al eliminar la búsqueda." });
    }
  },
};

export default SearchController;
