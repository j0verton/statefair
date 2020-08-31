const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
    contentTarget.addEventListener("click", (e) => {
        const idOfClickedButton = e.target.id
        if (idOfClickedButton === "rideTicket"){
            const rideEvent = new CustomEvent("rideTicketPurchased");
            eventHub.dispatchEvent(rideEvent);

        }
    
    });
}
