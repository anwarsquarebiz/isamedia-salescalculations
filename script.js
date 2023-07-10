// Switching between modals content
function changeToEffort() {
  document.getElementById("work-ethics-modal-content").style.display = "none";
  document.getElementById("effort-content").style.display = "block";
}

function backToEthicsModal() {
  document.getElementById("work-ethics-modal-content").style.display = "block";
  document.getElementById("effort-content").style.display = "none";
}
