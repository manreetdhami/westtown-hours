const learningBtn = document.getElementById("learningBtn");

if (learningBtn){
    learningBtn.onclick = function () {
        window.location.href = "learningcenter.html";
    };
}

const homeBtn = document.getElementById("homeBtn");
    
if (homeBtn){
    homeBtn.onclick = function () {
        window.location.href = "calendar.html";
    };
}

const peertutorBtn = document.getElementById("peertutorBtn");

if (peertutorBtn) {
    peertutorBtn.onclick = function () {
        window.location.href = "peertutor.html";
    };
}
