'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    find: ctx => {
        return strapi.query('repertorio-coral').find(ctx.query, ['obras', 'obras.professor', 'obras.aulas']);
    },
};
