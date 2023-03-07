import { json } from "body-parser"
import dotenv from "dotenv"
import express from "express"

dotenv.config()
const router = express.Router()

router.post("/text", async (rep, res) => {
    try {
        const { text, activeChatId } = req.body
        console.log("text", text)
        res.status(200), json({ text })
    } catch (error) {
        console.error("error", error)
        res.status(500).json({ error: error.message })
    }
})

export default router
