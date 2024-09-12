export const game  = {
    letters: [],
    word: "",
    error: false,
    streak: 0,
    inputedWord: [],
    newGame: function (){
        this.letters = [];
        const alfabeto = "abcdefghijklmnopqrstuvwxyz";

        this.letters = new Array(3).fill().map(function(letter){
            const ramdomIndex = Math.floor(Math.random() * alfabeto.length);
            return alfabeto[ramdomIndex];   

        });

        this.word ="";
        this.error =  false;
        this.streak = 0;
    },
    validateWord: async function (word){
        const tempLetters = [...this.letters];
        for (let i = 0; i < this.letters.length; i++){
            if(!word.includes(this.letters[i])){
                this.error = true;
                return false;
            }

            tempLetters.slice(0,1);
        }

        if(this.inputedWord.includes(word)){
            return false
        }

        const rawData = await fetch(`https://api.dicionario-aberto.net/word/${word}`);
        const data = await rawData.json();

        if(!data.length) {
            return false
        }

        this.inputedWord.push(word);
        this.streak++;
        return true;
    }

}
