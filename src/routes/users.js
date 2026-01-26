const { Hono } = require("hono");
const middleware = require("../middlewares.js");

const app = new Hono();

app.use(middleware.ensureAuthenticated());

app.get("/", (c) => {
  return c.text("respond with a resource");
});

module.exports = app;
