const input1 = document.getElementById("to_do")
const btw = document.getElementById("clic")
const texte = document.getElementById("result")
const tasks = document.getElementById("en_cours")
const end = document.getElementById("end")
function readText() {
    const text = input1.value;
    texte.style.color = "black"

    if (text != "") {
        const taskName = document.createElement("p")
        taskName.textContent = text
        tasks.appendChild(taskName)


        const tache_b1 = document.createElement("button")
        tache_b1.textContent = "Modifier"
        tache_b1.style.backgroundColor = "blue";
        tache_b1.style.borderRadius = "8px";
        tache_b1.style.color = "white"
        tasks.appendChild(tache_b1)

        const tache_b2 = document.createElement("button")
        tache_b2.textContent = "Terminer"
        tache_b2.style.backgroundColor = "green";
        tache_b2.style.borderRadius = "8px";
        tache_b2.style.color = "white"
        tasks.appendChild(tache_b2)

        const tache_b3 = document.createElement("button")
        tache_b3.textContent = "Supprimer"
        tache_b3.style.backgroundColor = "red";
        tache_b3.style.borderRadius = "8px";
        tache_b3.style.color = "white"
        tasks.appendChild(tache_b3)

        tache_b3.addEventListener("click", function () {
            taskName.remove();
        })
        tache_b2.addEventListener("click", function () {
            const comp = document.createElement("p");
            taskName.textContent = text
            end.appendChild(comp)
            comp.style.color = "black"
        })
        tache_b1.addEventListener("click", function () {
            const tache_b3 = document.createElement("input")
        })

    } else {
        result.textContent = "vous n'avez inscrit aucune tache a faire";
        result.style.color = "red"

    }

}









