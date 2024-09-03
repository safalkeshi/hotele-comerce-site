// Add any JavaScript for interactivity, if needed. For example, initializing a carousel or handling form validation.

document.addEventListener('DOMContentLoaded', function () {
    // Example: Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});
