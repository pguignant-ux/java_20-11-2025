const input1 = document.getElementById("to_do")
const btw = document.getElementById("clic")
const texte = document.getElementById("result")
const tache_enc = document.getElementById("tache_ec")
const progress = document.getElementById("champ1")
function readText() {
    const text = document.getElementById("to_do").value;
    document.getElementById("champ1").textContent = text
    result.style.color = "black"
    if (text != "") {
        const tache = document.createElement("button")
        tache.textContent = "ajouter"
        document.getElementById("en_cours").appendChild(tache)
    } else {
        result.textContent = "vous n'avez inscrit aucune tache a faire";
        result.style.color = "red"

    }




}







