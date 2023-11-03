import { Request, Response } from "express";
import SearchService from "../services/search.service";

class SearchController {
  async createSearch(req: Request, res: Response) {
    try {
      const newSearch = await SearchService.createSearch(req.body);
      res.status(201).json(newSearch);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la búsqueda." });
    }
  }

  async getAllSearches(_req: Request, res: Response) {
    try {
      const searches = await SearchService.getAllSearches();
      res.status(200).json(searches);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las búsquedas." });
    }
  }

  async getSearchById(req: Request, res: Response) {
    const searchId = req.params.searchId;
    try {
      const search = await SearchService.getSearchById(searchId);
      if (search) {
        res.status(200).json(search);
      } else {
        res.status(404).json({ error: "Búsqueda no encontrada." });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la búsqueda." });
    }
  }

  async updateSearch(req: Request, res: Response) {
    const searchId = req.params.searchId;
    try {
      const updatedSearch = await SearchService.updateSearch(
        searchId,
        req.body
      );
      if (updatedSearch) {
        res.status(200).json(updatedSearch);
      } else {
        res.status(404).json({ error: "Búsqueda no encontrada." });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la búsqueda." });
    }
  }

  async deleteSearch(req: Request, res: Response) {
    const searchId = req.params.searchId;
    try {
      const deletedSearch = await SearchService.deleteSearch(searchId);
      if (deletedSearch) {
        res.status(204).json({ message: "Búsqueda eliminada con éxito." });
      } else {
        res.status(404).json({ error: "Búsqueda no encontrada." });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la búsqueda." });
    }
  }
}

export default new SearchController();
