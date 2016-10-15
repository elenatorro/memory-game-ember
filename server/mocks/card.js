/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var cardRouter = express.Router();

  cardRouter.get('/', function(req, res) {
    res.send({
      cards: [
          {
            name: 'alpaca',
            meta: {}
          },
          {
            name: 'anteater',
            meta: {}
          },
          {
            name: 'bat',
            meta: {}
          },
          {
            name: 'beetle',
            meta: {}
          },
          {
            name: 'butterfly',
            meta: {}
          },
          {
            name: 'camel',
            meta: {}
          },
          {
            name: 'cat',
            meta: {}
          },
          {
            name: 'chameleon',
            meta: {}
          },
          {
            name: 'cobra',
            meta: {}
          },
          {
            name: 'cow',
            meta: {}
          },
          {
            name: 'crab',
            meta: {}
          },
          {
            name: 'crocodile',
            meta: {}
          },
          {
            name: 'dog',
            meta: {}
          },
          {
            name: 'duck',
            meta: {}
          },
          {
            name: 'elephant',
            meta: {}
          },
          {
            name: 'elk',
            meta: {}
          },
          {
            name: 'fish',
            meta: {}
          },
          {
            name: 'frog',
            meta: {}
          },
          {
            name: 'giraffe',
            meta: {}
          },
          {
            name: 'hen',
            meta: {}
          },
          {
            name: 'hippopotamus',
            meta: {}
          },
          {
            name: 'kangaroo',
            meta: {}
          },
          {
            name: 'macaw',
            meta: {}
          },
          {
            name: 'monkey',
            meta: {}
          },
          {
            name: 'mouse',
            meta: {}
          },
          {
            name: 'octopus',
            meta: {}
          },
          {
            name: 'ostrich',
            meta: {}
          },
          {
            name: 'owl',
            meta: {}
          },
          {
            name: 'panda',
            meta: {}
          },
          {
            name: 'pelican',
            meta: {}
          },
          {
            name: 'penguin',
            meta: {}
          },
          {
            name: 'pig',
            meta: {}
          },
          {
            name: 'rabbit',
            meta: {}
          },
          {
            name: 'raccoon',
            meta: {}
          },
          {
            name: 'rhinoceros',
            meta: {}
          },
          {
            name: 'seaCow',
            meta: {}
          },
          {
            name: 'shark',
            meta: {}
          },
          {
            name: 'sheep',
            meta: {}
          },
          {
            name: 'sloth',
            meta: {}
          },
          {
            name: 'snake',
            meta: {}
          },
          {
            name: 'spider',
            meta: {}
          },
          {
            name: 'squirrel',
            meta: {}
          },
          {
            name: 'stingray',
            meta: {}
          },
          {
            name: 'swan',
            meta: {}
          },
          {
            name: 'tiger',
            meta: {}
          },
          {
            name: 'tortoise',
            meta: {}
          },
          {
            name: 'toucan',
            meta: {}
          },
          {
            name: 'whale',
            meta: {}
          }]
      });
  });
  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/card', require('body-parser').json());
  app.use('/api/cards', require('body-parser').json(), cardRouter);
};
