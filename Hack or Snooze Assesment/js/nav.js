"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/** Show story creation page on click of submit */
function navCreateStory(evt) {
  console.debug("navCreateStory", evt)
  hidePageComponents();
  $storyForm.show();
}

let test = document.querySelector("#story-form")
test.addEventListener("onclick", function(){
  if(test.style.display === "none") {
    test.style.display = "block";
  } else {
    test.style.display = "none";
  }
});

$("#story-form").click(function(){
  alert("CLICKED?")
})