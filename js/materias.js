//node js/studytrack.js
const prompt = require('./prompt')
const { materias } = require('./dados')

function cadastrarMateria() {
    let nome = prompt("Nome da matéria: ").trim()

    if (!nome) {
        console.log("Nome inválido!")
        return
    }

    let existe = materias.some(materia =>
        materia.toLowerCase() === nome.toLowerCase()
    )

    if (existe) {
        console.log("Essa matéria já está cadastrada!")
        return
    }

    materias.push(nome)

    console.log("Matéria cadastrada com sucesso!")
}

module.exports = { cadastrarMateria }