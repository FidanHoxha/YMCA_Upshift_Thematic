const targetDiv = document.getElementById("divToHide");
const btn = document.getElementById("toggleBtn");
targetDiv.style.display = "none";
btn.onclick = function () {
    if (targetDiv.style.display == "none") {
        btn.textContent = 'Më Pak';
        targetDiv.style.display = "block";
    } else {
        btn.textContent = 'Më shumë';
        targetDiv.style.display = "none";
    }
};

