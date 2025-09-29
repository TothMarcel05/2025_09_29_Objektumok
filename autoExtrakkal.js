import { Auto } from "./auto.js";

export class AutoExtrakkal extends Auto {

    constructor(modell, evjarat, szin, fogyasztas, tankMeret)
    {
        super(modell, evjarat, szin);
        this._fogyasztas = fogyasztas
        this._tankMeret = tankMeret
    }

    hatotav() {
    return _tankMeret / _fogyasztas * 100}

    ar() {
    return _tankMeret * 600}



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

    // hatótáv kiszámítása

}

