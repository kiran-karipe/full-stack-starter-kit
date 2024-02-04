import { Router, Request, Response } from "express";

const router = Router();

router.post('/', (req: Request, res: Response) => {
  res.json("OK");
});

router.get('/', (req: Request, res: Response) => {
  res.json("OK");
});

export default router;
