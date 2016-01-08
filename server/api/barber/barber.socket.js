/**
 * Created by Yossi on 08-Jan-16.
 */
/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var barber = require('./barber.model');

exports.register = function(socket) {
  barber.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  barber.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('barber:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('barber:remove', doc);
}
