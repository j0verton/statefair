const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", rideEvent => {
        contentTarget.innerHTML += `<div class="person rider"></div>`
    })
}



// In the body of the event listener callback function, add a new <div> element 
//to the content target that has the correct classes on it (see above)