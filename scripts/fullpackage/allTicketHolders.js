const contentTargets = document.querySelectorAll(".people")
const eventHub = document.querySelector("#state-fair")

export const FullPackageHolders = () => {
    eventHub.addEventListener("fullPackagePurchased", gameEvent => {
        for (div of contentTargets)
        div.innerHTML += `<div class="person bigSpender"></div>`
    })
}