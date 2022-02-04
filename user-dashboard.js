// navbar started from here

function openSupport() {
    document.getElementById("user-support-area").style.display = "unset";
    document.getElementById("user-support-area").style.display = "flex";
}

function openPanel() {
    document.getElementById("user-panel-area").style.display = "unset";
    document.getElementById("user-panel-area").style.display = "flex";
}

function pageprogressLoader() {
    document.getElementById("page-loader").style.display = "unset";
    document.getElementById("page-loader").style.position = "fixed";
}

function runSpinner() {
    document.getElementById("spinner").style.display = "unset";
    document.getElementById("spinner").style.zIndex = "10";
    document.getElementById("dashboard-body").style.opacity = "0.06";
}

function refengine() {
    document.getElementById("referral-container").style.display = "unset";
    document.getElementById("referral-container").style.zIndex = "11";
    document.getElementById("referral-container").style.display = "flex";
}

function refengineoff() {
    document.getElementById("referral-container").style.display = "none";
}