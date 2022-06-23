const express = require('express')
const cors = require('cors')
const SQL = require('./dbconfig')


const app = express()
app.use(express.json())
app.use(cors())

app.get('/serverss', async (req, res) => {

    try {
        const serverss = await SQL(`
        SELECT 
        serverss.id,server_name,ip ,companies.name as host, status
        FROM serverss
        inner join companies on companies.id = serverss.host
        `)
        res.send(serverss)

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})


app.get('/serverss/:status', async (req, res) => {

    try {
        const statusServerss = await SQL(`
        SELECT
        serverss.id,server_name,ip ,companies.name as host, status
        FROM serverss
        inner join companies on companies.id = serverss.host
        where serverss.status =${req.params.status} 
        `)
        res.send(statusServerss)

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }

})



app.put('/server/:id', async (req, res) => {

    try {

        await SQL(`
        update serverss set status = !status where id = ${req.params.id}
        `)

        const [status] = await SQL(`
        SELECT status FROM serverss
        where serverss.id = ${req.params.id}
        `)

       
        console.log(status)

        if (status.status == 1) {
            return res.send({ msg: 'server online' })
        }

        if (status.status == 0) {
            return res.send({ msg: 'server ofline' })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }


})

app.delete('/server/:id', async (req, res) => {

    try {

        await SQL(`
        delete from serverss where id = ${req.params.id}
        `)

        res.send({ msg: 'delete' })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})





app.listen(9001, console.log("its over 9000!!!"))