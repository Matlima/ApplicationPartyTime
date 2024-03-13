const mongoose = require("mongoose")

async function main() {

    try {
        // caso dê erro com a versão
        // mongoose.set("strictQuery", true);

        await mongoose.connect("mongodb+srv://matheus:46LnkIUmO6BG4uPL@cluster0.pvzyl7a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        
        console.log("Conectado ao banco!");

    } catch (error) {
        console.log(`Erro: ${error}`)
        
    }

}

module.exports = main