function toggle_signup_popup() {
    let overlay = document.getElementById("signup_popup_overlay");
    overlay.style.display = 'block'
    let popup_content = document.getElementById("signup_popup_content");
    popup_content.style.display = "block";
}

function hide_popup() {
    let overlay = document.getElementById("signup_popup_overlay");
    overlay.style.display = 'none'
    let popup_content = document.getElementById("signup_popup_content");
    popup_content.style.display = 'none'
}