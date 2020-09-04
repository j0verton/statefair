const contentTargets = document.querySelectorAll(".people")
// console.log(contentTargets)
const eventHub = document.querySelector("#state-fair")

export const FullPackageHolders = () => {
    eventHub.addEventListener("fullPackagePurchased", pacakgeEvent => {
        console.log("ticket")
        for (let contentTarget of contentTargets)
        contentTarget.innerHTML += `<div class="person bigSpender"></div>`
    })
}