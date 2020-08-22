'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    find: ctx => {
        return strapi.query('projeto').find(ctx.query, ['obras', 'obras.professor', 'obras.aulas']);
      },
    findOne: async ctx => {
        return await strapi.query('projeto').findOne({id: ctx.params.id}, ['obras', 'obras.professor', 'obras.aulas']);
      },
};
