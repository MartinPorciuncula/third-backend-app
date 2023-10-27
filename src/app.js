import  express  from 'express';
import { router } from './routes/routes.js';
import { AppError, globalErrorHandler } from './errors/index.js';

const app = express();

app.use(express.json());

app.use("/api/v1", router)

app.all("*", (req,res,next) =>{
    next(new AppError(`cant find ${req.originalUrl} on this server!`,404))
})

app.use(globalErrorHandler)

export default app;
