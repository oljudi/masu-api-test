import { Router } from 'express';

import Paths from '../constants/Paths';
import ProductsRouter from './Products.routes';

// **** Variables **** //

const apiRouter = Router();

// Add ProductRouter
apiRouter.use(Paths.Products.Base, ProductsRouter);


// **** Export default **** //

export default apiRouter;
