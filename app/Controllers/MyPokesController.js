import { appState } from "../AppState.js";
import { myPokesService } from "../Services/MyPokesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawMyPokes() {
    let pokes = appState.myPokes
    let template = ''
    pokes.forEach(p => template += p.MyPokeTemplate)
    setHTML('my-pokes', template)
}



export class MyPokesController {
    constructor() {
        appState.on('myPokes', _drawMyPokes)
        this.getPokes()
    }

    async getPokes() {
        try {
            await myPokesService.getPokes()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }



}