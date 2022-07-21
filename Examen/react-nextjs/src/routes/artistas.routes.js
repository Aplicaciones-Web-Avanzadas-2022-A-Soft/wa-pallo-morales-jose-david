const { Router } = require('express');
const {
    deleteArtista,
    createArtista,
    getArtista,
    getAllArtistas,
    updateArtista
} = require('../controllers/artistas.controllers')
const database = require("../db");

const router = Router();

//Rutas para el CRUD

router.get('/artistas', getAllArtistas)

router.get('/artista/:id', getArtista)

router.post('/artista', createArtista)

router.delete('/artista/:id', deleteArtista)

router.put('/artista/:id', updateArtista)

module.exports = router;