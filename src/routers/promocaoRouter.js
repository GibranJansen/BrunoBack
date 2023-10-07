'use strict'

const express = require('express')

const promocaoRouter = express.Router()

const promocaoController = require('../controllers/promocaoController')

promocaoRouter.route('/api/promocaos')
.get((req, res) => promocaoController.getAllPromocoes(req, res))
.post((req, res) => promocaoController.createPromocao(req, res))
.put((req, res) => promocaoController.updatePromocao(req, res))

promocaoRouter.route('/api/promocaos/:id')
.get((req, res) => promocaoController.getPromocao(req, res))
.delete((req, res) => promocaoController.deletePromocao(req, res))

module.exports = promocaoRouter