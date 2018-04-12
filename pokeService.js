// const axios = require("axios")

class PokeService {
    constructor() {
        this.baseUrl = "http://pokeapi.co/api/v2"
        this.http = require("axios")
    }

    _returnData(resultObject) {
        return resultObject.data
    }

    _handleApiError(err) {
        console.log(err)
        throw err
    }

    _randomPokeId() {
        return Math.floor(Math.random() * 151 - 1)
    }

    byId(id) {
        return this.http.get(`${this.baseUrl}/pokemon/${id}`)
            .then(this._returnData)
            .catch(this._handleApiError)
    }

    random() {
        return this.http.get(`${this.baseUrl}/pokemon/${this._randomPokeId()}`)
            .then(this._returnData)
            .catch(this._handleApiError)
    }
}

module.exports = new PokeService()