var LigaModel = require('../models/ligas');
var JugadoresModel = require('../models/jugadores');

//GET - Return all registers
exports.findAll = function(req, res) {
    LigaModel.getLigas(function(err, clients) {
        if(err) res.send(500, err.message);
        console.log('GET /ligas')
        res.status(200).jsonp(clients);
    });
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
    LigaModel.getLiga(req.params.id, function(err, client) {
        if(err) return res.send(500, err.message);
        console.log('GET /ligas/' + req.params.id);
        res.status(200).jsonp(client);
    });
};

//POST - Insert a new register
exports.add = function(req, res) {
    console.log('POST');
    console.log(req.body);
    var liga = {
        id: req.body.id,
        nombre: req.body.nombre,
        numJugadores: req.body.numJugadores
    };
    LigaModel.insertLiga(liga, function(err, client) {
        if(err) return res.send(500, err.message);
        res.status(200).jsonp(client);
    });
};

//PUT - Update a register already exists
exports.update = function(req, res) {
    LigaModel.getLiga(req.params.id, function(err, partido) {
        console.log(req.body);
        var liga = {
            id: req.params.id,
            nombre: req.body.nombre,
            numJugadores: req.body.numJugadores
        };
        LigaModel.updateLiga(liga, function(err) {
            if(err) return res.send(500, err.message);
            res.status(200).jsonp(jugador);
        });
    });
};

//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
    LigaModel.deleteLiga(req.params.id, function(err, partido) {
        if(err) return res.send(500, err.message);
        res.json({ message: 'Successfully deleted' });
    });
};

//PUT - SET LEVEL PLAYER
exports.setLevel = function(req, res) {
    LigaModel.getJugador(req.params.id, function(err, partido) {
        var jugador = {
            id: req.params.id,
            nivel: req.body.nivel
        };
        LigaModel.addLevel(jugador, function(err) {
            if(err) return res.send(500, err.message);
            res.status(200).jsonp(jugador);
        });
    });
};