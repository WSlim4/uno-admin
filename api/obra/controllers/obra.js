'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    findOne: ctx => {
        return strapi.query('obra').findOne({slug: ctx.params.id}, ['aulas', 'professor', 'projeto']);
    },
};
