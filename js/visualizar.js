//node js/studytrack.js
function visualizarDados(lista, titulo) {
    console.log(`\n========== ${titulo} ==========`)

    if (lista.length === 0) {
        console.log("Nenhum registro encontrado!")
        return
    }

    lista.forEach((item, indice) => {
        if (typeof item === 'string') {
            console.log(`${indice + 1} - ${item}`)
        } else {
            console.log(
                `${indice + 1} - ${item.nome} | Matéria: ${item.materia} | Status: ${item.concluida ? 'Concluída' : 'Pendente'}`
            )
        }
    })
}

module.exports = { visualizarDados }