import express from 'express';
import { login,deleteUser,updateUser,register } from './user.controller.js';
export const router = express.Router()

router.post("/login", login)
      router.post("/register", register)

router
.route('/:id')
      .get()
      .patch(updateUser)
      .delete(deleteUser)


