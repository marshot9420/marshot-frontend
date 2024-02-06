const sidebarButton = document.querySelector(".sidebar-button");
const sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
  if (sidebar.style.display === "none" || sidebar.style.display === "") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}

function closeSidebar() {
  sidebar.style.display = "none";
}

function handleOutsideClick(event) {
  if (!sidebar.contains(event.target) && event.target !== sidebarButton) {
    closeSidebar();
  }
}

function handleSidebar() {
  sidebarButton.addEventListener("click", toggleSidebar);
  document.addEventListener("click", handleOutsideClick);
}

document.addEventListener("DOMContentLoaded", handleSidebar);
