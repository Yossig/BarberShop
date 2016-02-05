/**
 * Created by Yossi on 08-Jan-16.
 */
/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Barber = require('./barber.model');

// Get list of barbers
exports.index = function(req, res) {
  Barber.find(function (err, barbers) {
    if(err) { return handleError(res, err); }
    return res.json(200, barbers);
  });
};

// Get a single barber
exports.show = function(req, res) {
  Barber.findById(req.params.id, function (err, barber) {
    if(err) { return handleError(res, err); }
    if(!barber) { return res.send(404); }
    return res.json(barber);
  });
};

// Creates a new barber in the DB.
exports.create = function(req, res) {
  Barber.create(req.body, function(err, barber) {
    if(err) { return handleError(res, err); }
    return res.json(201, barber);
  });
};

// Updates an existing barber in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Barber.findById(req.params.id, function (err, barber) {
    if (err) { return handleError(res, err); }
    if(!barber) { return res.send(404); }
    _.extend(barber, req.body);
    barber.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, barber);
    });
  });
};

// Deletes a barber from the DB.
exports.destroy = function(req, res) {
  Barber.findById(req.params.id, function (err, barber) {
    if(err) { return handleError(res, err); }
    if(!barber) { return res.send(404); }
    barber.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
