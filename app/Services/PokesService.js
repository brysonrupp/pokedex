import { appState } from "../AppState.js";
import { Poke } from "../Models/Poke.js";

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})


class PokesService {
    async getOnePoke(index) {
        const res = await pokeApi.get(index)
        console.log('[GET ONE POKE]', res.data);
        appState.activePoke = new Poke(res.data)
    }

    async getPokes() {
        const res = await pokeApi.get()
        console.log('[POKE GET POKES]', res.data);
        appState.pokes = res.data.results
    }
}


export const pokesService = new PokesService() 