import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import ProductsController from '@src/controller/Products.controller';

// Create an Express router instance
const productsRouter = Router(),
  // Create a jetValidator instance
  validate = jetValidator();

/**
 * GET endpoint to retrieve a list of products.
 * @function
 * @name GET /products
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {void}
 */
productsRouter.get(
  Paths.Products.Get,
  ProductsController.getAll,
);

/**
 * GET endpoint to retrieve a product by ID.
 * @function
 * @name GET /products/:id
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The Express next function.
 * @returns {void}
 */
productsRouter.get(
  Paths.Products.GetById,
  validate(['id', 'number', 'params']),
  ProductsController.getById,
);

export default productsRouter;