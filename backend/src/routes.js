const express = require('express')

const AdminController = require('./controllers/AdminController')
const AlunoController = require('./controllers/AlunoController')
const ProfessorController = require('./controllers/ProfessorController')
const ProfileController = require('./controllers/ProfileController')
const SessionAlunoController = require('./controllers/SessionAlunoController')
const SessionsAdminController = require('./controllers/SessionsAdminController')
const SessionsProfController = require('./controllers/SessionsProfController')
const TurmaController = require('./controllers/TurmaController')
const TreinoController = require('./controllers/TreinoController')
const AlunoTreinoController = require('./controllers/AlunoTreinoController')
const ProfileUserController = require('./controllers/ProfileUserController')
const SearchController = require('./controllers/SearchController')

const routes = express.Router()

routes.post('/sessionaluno', SessionAlunoController.create);
routes.post('/sessionprof', SessionsProfController.create);
routes.post('/sessionadmin', SessionsAdminController.create);

routes.get('/profile', ProfileController.index);
routes.get('/profileuser', ProfileUserController.index);

routes.get('/search', SearchController.index);

routes.get('/admin', AdminController.index);
routes.post('/admin', AdminController.create);
routes.delete('/admin/:id', AdminController.delete);

routes.get('/aluno', AlunoController.index);
routes.post('/aluno', AlunoController.create);
routes.delete('/aluno/:id', AlunoController.delete);

routes.get('/professor', ProfessorController.index);
routes.post('/professor', ProfessorController.create);
routes.delete('/professor/:id', ProfessorController.delete);

routes.get('/turma', TurmaController.index);
routes.post('/turma', TurmaController.create);
routes.delete('/turma/:id', TurmaController.delete);

routes.get('/treino', TreinoController.index);
routes.post('/treino', TreinoController.create);
routes.delete('/treino/:id', TurmaController.delete);

routes.get('/alunotreino', AlunoTreinoController.index);

module.exports = routes;