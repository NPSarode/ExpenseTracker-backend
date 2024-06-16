import { app } from "./app.js";

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is listening on ${process.env.PORT || 8000}`)
})