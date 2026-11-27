//node js/studytrack.js
const prompt = require('./prompt')
const { materias, atividades } = require('./dados')
const { visualizarDados } = require('./visualizar')

function adicionarAtividade() {
    if (materias.length === 0) {
        console.log("Cadastre uma matéria primeiro!")
        return
    }

    visualizarDados(materias, "MATÉRIAS")

    let escolha = Number(prompt("Escolha a matéria: "))

    if (!Number.isInteger(escolha) || escolha < 1 || escolha > materias.length) {
        console.log("Opção inválida!")
        return
    }

    let nome = prompt("Nome da atividade: ").trim()

    if (!nome) {
        console.log("Nome inválido!")
        return
    }

    atividades.push({
        nome,
        materia: materias[escolha - 1],
        concluida: false
    })

    console.log("Atividade cadastrada com sucesso!")
}

function concluirAtividade() {
    if (atividades.length === 0) {
        console.log("Nenhuma atividade cadastrada!")
        return
    }

    visualizarDados(atividades, "ATIVIDADES")

    let escolha = Number(prompt("Escolha a atividade para concluir: "))

    if (!Number.isInteger(escolha) || escolha < 1 || escolha > atividades.length) {
        console.log("Opção inválida!")
        return
    }

    if (atividades[escolha - 1].concluida) {
        console.log("Essa atividade já foi concluída!")
        return
    }

    atividades[escolha - 1].concluida = true

    console.log("Atividade concluída com sucesso!")
}

module.exports = { adicionarAtividade, concluirAtividade }