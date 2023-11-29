/* eslint-disable max-len */
import EnvVars from '@src/constants/EnvVars';
import { IProduct } from '@src/interfaces/Product.interface';

const externalApiURL = EnvVars.externalAPIS.DummyJSON + '/products';

/**
 * Options for the getAll function.
 * @interface GetAllOptions
 * @property {unknown} [search] - The search query.
 * @property {unknown} [select] - The fields to select.
 * @property {number} limit - The number of items to retrieve per page.
 * @property {number} page - The page number.
 */
interface GetAllOptions {
  search?: string;
  select?: string;
  limit: number;
  page: number;
}

/**
 * Builds the external API URL based on the provided options.
 * @function
 * @param {GetAllOptions} options - The options for building the URL.
 * @returns {string} The constructed external API URL.
 */
const buildExternalApiUrl = (options: GetAllOptions): string => {
  let apiUrl = externalApiURL;

  const { search, select, limit, page } = options;
  const skip = limit * (page - 1);

  if (search) {
    apiUrl += '/search' + `?q=${search}` + `&limit=${limit}&skip=${skip}`;
  } else {
    apiUrl += `?limit=${limit}&skip=${skip}`;
  }

  if (select) {
    apiUrl += `&select=${select}`;
  }

  return apiUrl;
};

/**
 * Retrieves a list of products from the external API based on the provided options.
 * @async
 * @function
 * @param {GetAllOptions} options - The options for fetching products.
 * @returns {Promise<IProduct[]>} A promise that resolves to an array of products.
 * @throws {Error} Throws an error if something goes wrong during the fetch operation.
 */
const getAll = async (options: GetAllOptions): Promise<IProduct[]> => {
  try {
    const externalApiURLAux = buildExternalApiUrl(options);

    const productsData = await fetch(externalApiURLAux, {
      method: 'GET',
    });
    const response = productsData.json();
    1;
    return response as unknown as IProduct[];
  } catch (error: unknown) {
    throw new Error('Something went wrong!');
  }
};

/**
 * Retrieves a product by its ID from the external API.
 * @async
 * @function
 * @param {number} id - The ID of the product to retrieve.
 * @returns {Promise<IProduct>} A promise that resolves to the product with the specified ID.
 * @throws {Error} Throws an error if something goes wrong during the fetch operation.
 */
const getById = async (id: number): Promise<IProduct> => {
  try {
    const productsData = await fetch(externalApiURL + '/' + id, {
      method: 'GET',
    });
    const response = productsData.json();
    return response as unknown as IProduct;
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

export default {
  getAll,
  getById,
} as const;
