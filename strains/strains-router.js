const express = require('express');

const Strains = require('./strains-model')
const router = express.Router();

router.get('/', (req,res) => {
    Strains.getStrains()
        .then((strains) => {
            res.status(200).json(strains)
        })
        .catch((err) => {
            res.status(500).json({error: 'Could not get Strains'})
        })
})

router.get('/:name', (req, res) => {
    Strains.getStrainsByName(req.params.name)
        .then((strains) => {
            res.status(200).json(strains)
        })
        .catch((err) => {
            res.status(500).json({error: "Could not get Strains"})
        })
})

router.get('/:type', (req, res) => {
    Strains.getStrainsByType(req.params.type)
        .then((strains) => {
            res.status(200).json(strains)
        })
        .catch((err) => {
            res.status(500).json({error: "Could not get Strains"})
        })
})

module.exports = router;