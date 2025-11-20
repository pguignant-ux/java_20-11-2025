const input1 = document.getElementById("to_do")
const btw = document.getElementById("clic")
const texte = document.getElementById("result")
const tache_enc = document.getElementById("tache_ec")
const progress = document.getElementById("champ1")
function readText() {
    const text = document.getElementById("to_do").value;
    document.getElementById("Input_champ2").value = text;
    result.style.color = "black"
    if (text != "") {

        const tache_b1 = document.createElement("button")
        tache_b1.textContent = "Modifier"
        tache_b1.style.backgroundColor = "blue";
        tache_b1.style.borderRadius = "8px";
        tache_b1.style.color = "white"
        document.getElementById("en_cours").appendChild(tache_b1)

        const tache_b2 = document.createElement("button")
        tache_b2.textContent = "ajouter"
        tache_b2.style.backgroundColor = "green";
        tache_b2.style.borderRadius = "8px";
        tache_b2.style.color = "white"
        document.getElementById("en_cours").appendChild(tache_b2)

        const tache_b3 = document.createElement("button")
        tache_b3.textContent = "Supprimer"
        tache_b3.style.backgroundColor = "red";
        tache_b3.style.borderRadius = "8px";
        tache_b3.style.color = "white"
        document.getElementById("en_cours").appendChild(tache_b3)


    } else {
        result.textContent = "vous n'avez inscrit aucune tache a faire";
        result.style.color = "red"

    }




}







