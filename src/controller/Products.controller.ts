/* eslint-disable max-len */
import { NextFunction, Request, Response } from 'express';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import ProductsService from '@src/services/Product.service';

/**
 * Retrieves a list of products based on the provided query parameters.
 * @async
 * @function
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The Express next function.
 * @returns {Promise<void>} A promise that resolves once the products are retrieved and the response is sent.
 */
const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { search, select, limit = 10, page = 1 } = req.query;
    const products = await ProductsService.getAll({
      search: typeof search === 'string' ? search : undefined,
      select: typeof select === 'string' ? select : undefined,
      limit: +limit,
      page: +page,
    });
    return res.status(HttpStatusCodes.OK).json(products);
  } catch (error) {
    next(error);
  }
};

/**
 * Retrieves a product by its ID.
 * @async
 * @function
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The Express next function.
 * @returns {Promise<void>} A promise that resolves once the product is retrieved and the response is sent.
 * @throws {unknown} Throws an unknown error if an exception occurs during the process.
 */
const getById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const product = await ProductsService.getById(+id);
    return res.status(HttpStatusCodes.OK).json(product);
  } catch (error) {
    next(error);
  }
};

export default {
  getAll,
  getById,
} as const;
