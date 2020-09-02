const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

let ticketNumber = 0;
const ticketTarget = document.querySelector(".customers")

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package</button>
        </div>
    `
    contentTarget.addEventListener("click", (e) => {
        const idOfClickedButton = e.target.id
        switch (idOfClickedButton) {
            case "rideTicket":
                const rideEvent = new CustomEvent("rideTicketPurchased");
                eventHub.dispatchEvent(rideEvent);
                break;
            case "foodTicket":
                const foodEvent = new CustomEvent("foodTicketPurchased");
                eventHub.dispatchEvent(foodEvent);
                break;
            case "gameTicket":
                const gameEvent = new CustomEvent("gameTicketPurchased");
                eventHub.dispatchEvent(gameEvent);
                break;
            case "sideshowTicket":
                const sideshowEvent = new CustomEvent("sideshowTicketPurchased");
                eventHub.dispatchEvent(sideshowEvent);
                break;
            case "fullPackageTicket":
                const fullPackageEvent = new CustomEvent("fullPackagePurchased");
                eventHub.dispatchEvent(fullPackageEvent);
                break;
                                             
            default:
                break;
        }
        const contentTargets = document.querySelectorAll(".person")
        ticketNumber = contentTargets.length        
        ticketTarget.innerHTML = `Total tickets purchased: ${ticketNumber}`
        
    });
}




