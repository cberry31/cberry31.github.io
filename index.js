function hideElement(id) {
    document.getElementById("allProjects").classList.remove("hidden");
    document.getElementById(id).classList.add("hidden");
}

function spawnElement(id) {
    document.getElementById("allProjects").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
}