import homeRouter from '../home/homeRoutes';
import infoRouter from '../info/infoRoutes';
import userRouter from '../user/userRoutes';

export default function routes(app) {
  app.use('/', homeRouter);
  app.use('/info', infoRouter);
  app.use('/user', userRouter);
}
