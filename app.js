
const bookingForm = document.querySelector("#bookingForm");
const confirmationMessage = document.querySelector("#confirmationMessage");
const bookingIntro = document.querySelector("#bookingIntro");







const params = new URLSearchParams(window.location.search);
const selectedRoom = params.get("room");

if(selectedRoom){

  const radio = document.querySelector(
`input[value="${selectedRoom}"]`
);

if(radio){
radio.checked = true;
}

}





if(bookingForm){

bookingForm.addEventListener("submit", function (e) {

  e.preventDefault();

  const name = document.querySelector("#name").value;
  const checkin = document.querySelector("#checkin").value;
  const room = document.querySelector('input[name="room"]:checked');

  
  bookingForm.style.display = "none";
  bookingIntro.style.display = "none";
  confirmationMessage.classList.remove("hidden");

  
  confirmationMessage.innerHTML =
  `<h2>Bokningen är bekräftad</h2>
   <p>Tack ${name}!</p>
   <p>Du har bokat ${room.parentElement.textContent}.</p>
   <p>Incheckning: ${checkin}</p>`;

});

}