'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    myCustomEndpoint: async(ctx) => {
        const result = await strapi.query('books').create({ title: ctx.request.body.title, description: ctx.request.body.description });
        return result;
    }
};
