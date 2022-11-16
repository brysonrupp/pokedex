
export class Poke {
    constructor(data) {
        this.id = data.id || ''
        this.name = data.name
        this.weight = data.weight
        this.height = data.height
    }

    get ActiveTemplate() {
        return `
    <h3 class="col-12 text-center text-primary">${this.name}</h3>
    <div class="col-4">${this.weight}</div>
    <div class="col-4">${this.height}</div>
    `
    }

    get MyPokeTemplate() {
        return `
        <div class="col-2 bg-dark">
        </div>
        <div class="col-10 selectable p-1 text-end bg-dark text-light" onclick = "app.myPokesController.setOnePoke('${this.id}')" > ${this.name}</div>
    `
    }



    static ListTemplate(poke) {
        return `<div class="col-12 selectable p-1" onclick ="app.pokesController.getOnePoke('${poke.name}')" > ${poke.name}</div> `
    }

    static PlaceholderTemplate() {
        return `<h3 class="text-center">Please select a poke from either list </h3>`
    }
}