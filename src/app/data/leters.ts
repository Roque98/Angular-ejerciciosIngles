export default class GeneratorLeters {
    static getLowerCase(){
        let numeroAleatorio:number = Math.floor(Math.random() * 25) + 97;  // returns a random integer from 1 to 10
        let letra:string = String.fromCharCode(numeroAleatorio);
        return letra;
    }

    static getWord(numeroLetrasPalabra: number){
        let palabra = "";
        for (let index = 0; index < numeroLetrasPalabra; index++) {
            palabra += this.getLowerCase();
        }        
        return palabra;
    }


}