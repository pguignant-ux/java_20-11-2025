const input1 = document.getElementById("to_do")
const btw = document.getElementById("clic")
const texte = document.getElementById("result")

function readText() {
    const text = document.getElementById("to_do").value;
    document.getElementById('result').textContent = text
    if (text != "") {
        const tache = document.createElement("button")
        tache.textContent = "ajouter"
        document.getElementById("in_1").appendChild(tache)
    } else if ("result" === "")
        text = "vous n'avez inscrit aucune tache a faire"



}







