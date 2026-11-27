//node js/api.js
const express = require('express')
const { materias, atividades } = require('./dados')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API StudyTrack funcionando!'
    })
})

app.get('/materias', (req, res) => {
    res.json(materias)
})

app.post('/materias', (req, res) => {
    const { nome } = req.body

    if (!nome || typeof nome !== 'string' || !nome.trim()) {
        return res.status(400).json({
            erro: 'Nome da matéria inválido!'
        })
    }

    const nomeLimpo = nome.trim()

    const existe = materias.some(materia =>
        materia.toLowerCase() === nomeLimpo.toLowerCase()
    )

    if (existe) {
        return res.status(409).json({
            erro: 'Essa matéria já está cadastrada!'
        })
    }

    materias.push(nomeLimpo)

    res.status(201).json({
        mensagem: 'Matéria cadastrada com sucesso!',
        materia: nomeLimpo
    })
})

app.get('/atividades', (req, res) => {
    const resultado = atividades.map((atividade, indice) => ({
        id: indice + 1,
        ...atividade
    }))

    res.json(resultado)
})

app.post('/atividades', (req, res) => {
    const { nome, materia } = req.body

    if (
        typeof nome !== 'string' ||
        !nome.trim() ||
        typeof materia !== 'string' ||
        !materia.trim()
    ) {
        return res.status(400).json({
            erro: 'Nome e matéria são obrigatórios!'
        })
    }

    const materiaExiste = materias.some(item =>
        item.toLowerCase() === materia.trim().toLowerCase()
    )

    if (!materiaExiste) {
        return res.status(404).json({
            erro: 'Matéria não encontrada!'
        })
    }

    const novaAtividade = {
        nome: nome.trim(),
        materia: materia.trim(),
        concluida: false
    }

    atividades.push(novaAtividade)

    res.status(201).json({
        mensagem: 'Atividade cadastrada com sucesso!',
        atividade: {
            id: atividades.length,
            ...novaAtividade
        }
    })
})

app.patch('/atividades/:id/concluir', (req, res) => {
    const id = Number(req.params.id)

    if (!Number.isInteger(id) || id < 1 || id > atividades.length) {
        return res.status(404).json({
            erro: 'Atividade não encontrada!'
        })
    }

    const atividade = atividades[id - 1]

    atividade.concluida = true

    res.json({
        mensagem: 'Atividade concluída com sucesso!',
        atividade: {
            id,
            ...atividade
        }
    })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`StudyTrack API rodando em http://localhost:${PORT}`)
})