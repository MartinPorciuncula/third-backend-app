import express from 'express';
import { login,deleteUser,updateUser,register } from './user.controller.js';
import { protect,protectAccountOwner,validExistUser } from './users.middleware.js';
export const router = express.Router()

router.post("/login", login)
      router.post("/register", register)

      router.use(protect)

router
.route('/:id')
      .get()
      .patch(validExistUser,protectAccountOwner,updateUser)
      .delete(deleteUser)


