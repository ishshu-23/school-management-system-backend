import app from './src/app.js'
import 'dotenv/config'

console.log(process)
const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
