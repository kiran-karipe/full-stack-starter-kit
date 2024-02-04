import { Router, Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import { createUser, getUsers, getUserById } from "../models/user";
import checkUserSchema from "./schemas/userSchema";

const router = Router();

router.post('/', checkUserSchema, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const data = matchedData(req);
  const { name, email } = data;

  try {
    const user = await createUser(name, email);
    res.json({ user }).status(201);
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(400).json({ 
        error: `${error.meta.modelName} with ${error.meta.target} already exists`
      });
    } else {
      throw error;
    }
  }

});

router.get('/', async (req: Request, res: Response) => {
  const users = await getUsers();
  res.json({ users }).status(200);
});

router.get('/:id', async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json({ user }).status(200);
});

export default router;
