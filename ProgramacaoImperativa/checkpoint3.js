class Aluno {
    constructor(nome, qtdFaltas, notas){
      this.nome = nome;
      this.qtdFaltas = faltas;
      this.notas = notas;
     }
	calcularMedia(){
		let soma = 0;
		this.notas.forEach(nota => {
		soma += nota;
		});
		return soma / this.notas.lenght;
	}
	faltas() {
		this.qtdFaltas += 1;
	}
}

const bianca = new Aluno ('Bianca', 1, [8,5,8]);
const daniel = new Aluno ('Daniel', 3, [9,7,4]);
const diego = new Aluno ('Diego', 2, [6,6,6]);

console.log(bianca, daniel, diego);

const curso = {
	nome: 'Banco de Dados',
	notaAprovacao: 6,
	maxFaltas: 2,
	listaEstudantes:[],

	AdicionarAluno(aluno){
		this.listaEstudantes.push(aluno);
	},
	statusAluno(aluno) {
		const media = aluno.calcularMedia();
		if(media >= this.notaAprovacao && aluno.qtdFaltas < this.MaxFaltas){
		return aprovado;
		} else if (aluno.qtdFaltas === this.MaxFaltas && media >= this.notaAprovacao * 1.1){
			return aprovado;
		}
		return reprovado;
	},
	listaStatus(){
		return this.listaEstudantes.map((aluno) => this.statusAluno(aluno));
	}

}

