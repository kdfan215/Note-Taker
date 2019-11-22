const express = require("express");
const mainRouter = express.Router();
const webRouter = require("./web");
const apiRouter = require("./api");

mainRouter.use('/api',apiRouter);
mainRouter.use(webRouter);


module.exports = mainRouter;
