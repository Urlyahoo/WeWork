function register() {
  email = document.getElementById("email");
  password = document.getElementById("password");
}

function validateEmail(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    return true;
  } else return false;
}

function validtePassword(password) {
  if (password < 6) {
    return false;
  } else return true;
}

let navbar = document.querySelector(".header .flex .navbar");

window.onscroll = () => {
  navbar.classList.remove("active");
};

document.querySelectorAll('input[type="number"]').forEach((inputNumber) => {
  inputNumber.oninput = () => {
    if (inputNumber.value.length > inputNumber.maxLength)
      inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
  };
});
function openPopup(pageUrl) {
  document.getElementById("popupOverlay").style.display = "block";
  // Set the iframe source to the specified pageUrl
  document.getElementById("popupIframe").src = pageUrl;
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}
function openPopup(pageUrl) {
  document.getElementById("popupOverlay").style.display = "block";
  // Set the iframe source to the specified pageUrl
  document.getElementById("popupIframe").src = pageUrl;
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKOvGagoPuOM660SwJRqE0Gto8fq_ac3M",
  authDomain: "wework-89850.firebaseapp.com",
  projectId: "wework-89850",
  storageBucket: "wework-89850.appspot.com",
  messagingSenderId: "233463971786",
  appId: "1:233463971786:web:51e4fcb530d028df989933",
};

function saveToExcel(formData) {
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(
    wb,
    XLSX.utils.json_to_sheet([formData]),
    "Booking Data"
  );
  XLSX.writeFile(wb, "booking_data.xlsx");
}

function submitForm() {
  // Collect form data (customize this part according to your form structure)
  var formData = {
    "Date of Event": document.getElementsByName("bdate")[0].value,
    "Time of Event": document.getElementsByName("name")[0].value,
    // Add other form fields here
  };

  // Show success notification
  alert("Thank you for using WeWork! Your submission was successful.");

  // Save to Excel after showing the notification
  saveToExcel(formData);
}

function showSuccessNotification() {
  // Simulate a successful submission
  setTimeout(function () {
    // Call the submitForm function after a delay (simulating form submission)
    submitForm();
  }, 1000); // Assuming 1000 milliseconds (1 second) delay for demonstration purposes
}
