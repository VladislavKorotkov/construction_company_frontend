import {makeAutoObservable} from 'mobx'

export default class UserApi{
    constructor(){
        this._isAuth = false
        this._user
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this._user = user
    }

    getIsAuth(){
        return this._isAuth
    }

    getUser(){
        return this._user
    }
}