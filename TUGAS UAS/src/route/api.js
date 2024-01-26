import express from "express";
import userController from "../controller/user-controller.js";
import movieController from "../controller/movie-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";

const userRouter   = new express.Router();
userRouter.use(authMiddleware);

//user API
userRouter.post('/api/users', userController.register);
userRouter.get('/api/users/current', userController.get);
userRouter.patch('/api/users/current', userController.update);
userRouter.delete('/api/users/logout', userController.logout);

//movie API
userRouter.post('/api/movie', movieController.create);
userRouter.get('/api/movie/:movieId',movieController.get);
userRouter.put('/api/movie/:movieId',movieController.update);
userRouter.delete('/api/movie/:movieId',movieController.remove);
userRouter.get('/api/movie',movieController.search);

export {
    userRouter
}