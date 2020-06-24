"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async (ctx) => {
    const input = ctx.request.body;
    if (ctx.state.user) input.user = ctx.state.user;
    await strapi.services.todo.create(ctx.request.body);
  },
  find: async (ctx) => {
    const result = await strapi.query("todo").find({ user: ctx.state.user.id });
    return result;
  },
};
