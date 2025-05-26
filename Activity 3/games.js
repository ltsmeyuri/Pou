
import { getRandomInt } from '/Users/yuri/Desktop/Projeto de Algoritmos/Pou/Activity 1/GeneratingRandomVariables/randomVariables.html';

class Games {
    constructor(background) {
        this.background = background;
        this.difficulty = null; 
    }

    setRandomDifficulty() {
        
        this.difficulty = getRandomInt(1, 10);
        console.log(`Dificuldade do jogo definida aleatoriamente para: ${this.difficulty} (Plano de fundo: ${this.background})`);
    }

    
    setManualDifficulty(difficultyLevel) {
        if (difficultyLevel >= 1 && difficultyLevel <= 10) {
            this.difficulty = difficultyLevel;
            console.log(`Dificuldade do jogo definida manualmente para: ${difficultyLevel} (Plano de fundo: ${this.background})`);
        } else {
            console.log("Erro: O nível de dificuldade manual deve ser entre 1 e 10.");
        }
    }

    getGameDetails() {
        let details = `Plano de fundo: ${this.background}`;
        if (this.difficulty !== null) {
            details += `, Dificuldade: ${this.difficulty}`;
        } else {
            details += `, Dificuldade: Não definida`;
        }
        return details;
    }
}

