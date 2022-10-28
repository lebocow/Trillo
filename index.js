var isPopUpHidden = true;

function showPopUp() {
  const popUp = document.getElementsByClassName("user-nav__pop-up");
  popUp[0].style.opacity = 1;
  popUp[0].style.visibility = "visible";
  isPopUpHidden = false;
}

function hidePopUp() {
  const popUp = document.getElementsByClassName("user-nav__pop-up");
  popUp[0].style.opacity = 0;
  popUp[0].style.visibility = "hidden";
  isPopUpHidden = true;
}

function popUp() {
  isPopUpHidden ? showPopUp() : hidePopUp();
}
