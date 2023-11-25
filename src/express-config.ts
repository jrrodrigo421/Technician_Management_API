import express from 'express';

export function configureExpress(expressApp: express.Application) {

  expressApp.use((req, res, next) => {
    console.log(' Tests Middleware !');
    next();
  });
}
