const express = require('express');
const router = express.Router();
const memberController = require('../controller/memberController');

// Ajouter un nouveau membre
router.post('/', memberController.addMember);

// Récupérer tous les membres
router.get('/', memberController.getAllMembers);

// Récupérer un membre par son identifiant
router.get('/:id', memberController.getMemberById);

// Mettre à jour les informations d'un membre
router.put('/:id', memberController.updateMember);

// Supprimer un membre
router.delete('/:id', memberController.deleteMember);

module.exports = router;