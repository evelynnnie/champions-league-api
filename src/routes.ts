import { Router } from "express";
import * as PlayerController from "./controllers/player-controller";
import * as ClubController from "./controllers/clubs-controller";

const router = Router();

router.get("/players", PlayerController.getPlayer);
router.post("/players", PlayerController.postPlayer);
router.delete("/players/:id", PlayerController.deletePlayer);
router.patch("/players/:id", PlayerController.updatePlayer);
router.get("/players/:id", PlayerController.getPlayerById);

router.get("/clubs", ClubController.getClubs);

export default router;