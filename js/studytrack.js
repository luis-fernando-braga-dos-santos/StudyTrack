//node js/studytrack.js
const prompt = require('./prompt')

const { materias, atividades } = require('./dados')

const { cadastrarMateria } = require('./materias')

const {
    adicionarAtividade,
    concluirAtividade
} = require('./atividades')

const { visualizarDados } = require('./visualizar')

let executando = true

while (executando) {
    console.log(`
========== STUDYTRACK ==========

1 - Cadastrar matéria
2 - Visualizar matérias
3 - Adicionar atividade
4 - Visualizar atividades
5 - Concluir atividade
0 - Sair

================================
`)

    let opcao = prompt("Escolha uma opção: ").trim()

    switch (opcao) {
        case '1':
            cadastrarMateria()
            break

        case '2':
            visualizarDados(materias, "MATÉRIAS")
            break

        case '3':
            adicionarAtividade()
            break

        case '4':
            visualizarDados(atividades, "ATIVIDADES")
            break

        case '5':
            concluirAtividade()
            break

        case '0':
            console.log("Encerrando o StudyTrack...")
            executando = false
            break

        default:
            console.log("Opção inválida! Tente novamente.")
    }
}