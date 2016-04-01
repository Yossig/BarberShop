/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
var Barber = require('../api/barber/barber.model.js');

Barber.find({}).remove(function () {
  Barber.create({
      fullname: 'Aviram',
      abilities: ['basic', 'shity'],
      status: 'Active'
    },
    {
      fullname: 'Doroti',
      abilities: ['basic', 'shity'],
      status: 'Inactive'
    })
});
