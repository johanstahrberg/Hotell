// Get important elements from the page
const bookingForm = document.querySelector("#bookingForm");
const confirmationMessage = document.querySelector("#confirmationMessage");
const bookingIntro = document.querySelector("#bookingIntro");

// Get room parameter from URL (example: booking.html?room=deluxe)
const params = new URLSearchParams(window.location.search);
const selectedRoom = params.get("room");

// Automatically select the correct room if user came from rooms page
if(selectedRoom){

const radio = document.querySelector(
`input[value="${selectedRoom}"]`
);

if(radio){
radio.checked = true;
}

}

// Handle booking form submit
if(bookingForm){

bookingForm.addEventListener("submit", function (e) {

  // Prevent page reload
  e.preventDefault();

  // Get form values
  const name = document.querySelector("#name").value;
  const checkin = document.querySelector("#checkin").value;
  const room = document.querySelector('input[name="room"]:checked');

  // Hide form and intro text after booking
  bookingForm.style.display = "none";
  bookingIntro.style.display = "none";

  // Show confirmation message
  confirmationMessage.classList.remove("hidden");

  // Display booking details
  confirmationMessage.innerHTML =
  `<h2>Bokningen är bekräftad</h2>
   <p>Tack ${name}!</p>
   <p>Du har bokat ${room ? room.parentElement.textContent : "ett rum"}.</p>
   <p>Incheckning: ${checkin}</p>`;

});

}