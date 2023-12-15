import { Router } from "express";
import SearchController from "../controllers/search.controller";

const router = Router();

router.post("/search", SearchController.createSearch);
router.delete("/search/:searchId", SearchController.deleteSearch);
router.put("/search/:searchId", SearchController.updateSearch);
router.get("/searches", SearchController.getAllSearches);
router.get("/searches/:searchId", SearchController.getSearchById);

export default router;
