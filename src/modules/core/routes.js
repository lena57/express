import infoRouter from '../info/infoRoutes';
import homeRouter from '../home/homeRoutes';
import userRouter from '../user/userRoutes';

export default function routes(app) {
  app.use('/info', infoRouter);
  app.use('/', homeRouter);
  app.use('/user', userRouter);
}
