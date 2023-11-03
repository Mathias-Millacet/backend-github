import { Router } from "express";
import SearchController from "../controllers/search.controller";

const router = Router();

router.post("/search", SearchController.createSearch);
router.get("/searches", SearchController.getAllSearches);
router.get("/searches/:searchId", SearchController.getSearchById);
router.put("/searches/:searchId", SearchController.updateSearch);
router.delete("/searches/:searchId", SearchController.deleteSearch);

export default router;
