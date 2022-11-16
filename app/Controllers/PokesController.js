import { appState } from "../AppState.js";
import { Poke } from "../Models/Poke.js";
import { pokesService } from "../Services/PokesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawPokes() {
    let pokes = appState.pokes
    let template = ''
    pokes.forEach(p => template += Poke.ListTemplate(p))
    setHTML('api-pokes', template)
}

function _drawActivePoke() {
    let poke = appState.activePoke
    if (poke) {
        setHTML('active-poke', poke.ActiveTemplate)
    } else {
        setHTML('active-poke', Poke.PlaceholderTemplate())
    }
}

export class PokesController {
    constructor() {
        appState.on('activePoke', _drawActivePoke)
        appState.on('pokes', _drawPokes)
        this.getPokes()
        _drawActivePoke()
    }

    async getPokes() {
        try {
            await pokesService.getPokes()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }

    async getOnePoke(index) {
        try {
            await pokesService.getOnePoke(index)
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }


}