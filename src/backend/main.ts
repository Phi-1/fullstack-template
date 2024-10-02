import express from "express"
import cors from "cors"

function create_express_app() {
    const app = express()

    app.use(cors())
    app.use(express.static(process.cwd() + "/public"))
    
    app.get("/hello-world", (_, res) => {
        res.status(200).send("Hello World!")
    })

    return app
}

function main() {
    const app = create_express_app()
    const port = process.env["SERVER_PORT"]
    app.listen(port, () => console.log(`Server is listening on port ${port}`))
}

main()