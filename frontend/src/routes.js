import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LogonAluno from './pages/LogonAluno'
import ScreenAluno from './pages/ScreenAluno'
import LogonProf from './pages/LogonProf'
import ScreenProf from './pages/ScreenProf'
import LogonADM from './pages/LogonADM'
import ScreenADM from './pages/ScreenADM'
import RegisterProf from './pages/RegisterProf'
import ListaProf from './pages/ListaProf'
import AddAluno from './pages/AddAluno'
import ListAluno from './pages/ListAluno'
import CriarTurma from './pages/CriarTurma'
import ListTurma from './pages/ListTurma'
import ListTreino from './pages/ListTreino'
import RegisterTreino from './pages/RegisterTreino'
import ListAll from './pages/ListAll'


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LogonAluno}/>
                <Route path="/LogonProf" exact component={LogonProf}/>
                <Route path="/ScreenProf" exact component={ScreenProf}/>
                <Route path="/ScreenADM" exact component={ScreenADM}/>
                <Route path="/ListAll" exact component={ListAll}/>
                <Route path="/RegisterProf" exact component={RegisterProf}/>
                <Route path="/RegisterTreino" exact component={RegisterTreino}/>
                <Route path="/ListaProf" exact component={ListaProf}/>
                <Route path="/AddAluno" exact component={AddAluno}/>
                <Route path="/ListAluno" exact component={ListAluno}/>
                <Route path="/CriarTurma" exact component={CriarTurma}/>
                <Route path="/ListTurma" exact component={ListTurma}/>
                <Route path="/ListTreino" exact component={ListTreino}/>
                <Route path="/LogonADM" exact component={LogonADM}/>
                <Route path="/ScreenAluno" exact component={ScreenAluno}/>
            </Switch>
        </BrowserRouter>
    )
}