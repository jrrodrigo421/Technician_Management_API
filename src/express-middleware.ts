import express from "express";

export const myMiddleware: express.RequestHandler = (req, res, next) => {
  console.log('Tests Middleware');
  next();
}
