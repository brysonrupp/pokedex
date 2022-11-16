import { appState } from "../AppState.js";
import { Poke } from "../Models/Poke.js";


const myPokesApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/bryson/pokemon'
})


class MyPokesService {
    async getPokes() {
        const res = myPokesApi.get()
        console.log('[myPokes get pokes]', res.data);
        appState.myPokes = res.data.map(p => new Poke(p))
    }






}









export const myPokesService = new MyPokesService()