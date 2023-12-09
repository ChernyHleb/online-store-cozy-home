function toggle_signup_popup() {
    hide_signin_popup()
    let overlay = document.getElementById("signup_popup_overlay");
    overlay.style.display = 'block'
    let popup_content = document.getElementById("signup_popup_content");
    popup_content.style.display = "block";
}

function hide_signup_popup() {
    let overlay = document.getElementById("signup_popup_overlay");
    overlay.style.display = 'none'
    let popup_content = document.getElementById("signup_popup_content");
    popup_content.style.display = 'none'
}

function toggle_signin_popup() {
    hide_signup_popup()
    let overlay = document.getElementById("signin_popup_overlay");
    overlay.style.display = 'block'
    let popup_content = document.getElementById("signin_popup_content");
    popup_content.style.display = "block";
}

function hide_signin_popup() {
    let overlay = document.getElementById("signin_popup_overlay");
    overlay.style.display = 'none'
    let popup_content = document.getElementById("signin_popup_content");
    popup_content.style.display = 'none'
}