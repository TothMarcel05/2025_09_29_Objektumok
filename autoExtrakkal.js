import { Auto } from "./auto";
export class AutoExtrakkal extends Auto {

    constructor(modell, evjarat, szin, fogyasztas, tankMeret)
    {
        super(modell, evjarat, szin);
        this._fogyasztas = fogyasztas
        this._tankMeret = tankMeret
    }
    get fogyasztas() {
        return this._fogyasztas
    }

    set fogyasztas(fogyasztasErtek){
        this._fogyasztas = fogyasztasErtek
    }
    get tankMeret() {
        return this._tankMeret
    }

    set tankMeret(tankMeretErtek){
        this._tankMeret = tankMeretErtek
    }
}