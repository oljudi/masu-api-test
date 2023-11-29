/**
 * Express router paths go here.
 */


export default {
  Base: '/api',
  Products: {
    Base: '/products',
    Get: '/all',
    GetById: '/:id',
  },
} as const;
