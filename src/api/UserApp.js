import {makeAutoObservable} from 'mobx'

export default class UserApi{
    constructor(){
        this._isAuth = false
        this._user = null
        this._role = 'ROLE_USER'
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this._user = user
    }

    setRole(role){
        this._role = role
    }

    getRole(){
        return this._role
    }

    getIsAuth(){
        return this._isAuth
    }

    getUser(){
        return this._user
    }
}