const animationDuration = "0.5s"; // Animation duration

const discordIcon = document.getElementById("discord");
const youtubeIcon = document.getElementById("youtube");
const twitchIcon = document.getElementById("twitch");
const tiktokIcon = document.getElementById("tiktok");

const construction_message = document.getElementById("construction")

let discord_link = "https://discord.gg/dEUjzZYK";
let youtube_link = "https://www.youtube.com/@PsychedWorld";
let twitch_link = "https://www.twitch.tv/psychedworld";
let tiktok_link = "https://www.tiktok.com/@psyched_world";

discordIcon.addEventListener("mouseover", function() {
  discordIcon.style.animation = `discord_hover ${animationDuration} ease-in-out`;
  discordIcon.style.fill = "#7289da"; // Change color to Discord purple
});

discordIcon.addEventListener("mouseout", function() {
  discordIcon.style.animation = "none";
  discordIcon.style.fill = "black"; // Change back to starting color
});

youtubeIcon.addEventListener("mouseover", function() {
  youtubeIcon.style.animation = `youtube_hover ${animationDuration} ease-in-out`;
  youtubeIcon.style.fill = "#ff0000"; // Change color to YouTube red
});

youtubeIcon.addEventListener("mouseout", function() {
  youtubeIcon.style.animation = "none";
  youtubeIcon.style.fill = "black"; // Change back to starting color
});

twitchIcon.addEventListener("mouseover", function() {
  twitchIcon.style.animation = `twitch_hover ${animationDuration} ease-in-out`;
  twitchIcon.style.fill = "#9146ff"; // Change color to Twitch purple
});

twitchIcon.addEventListener("mouseout", function() {
  twitchIcon.style.animation = "none";
  twitchIcon.style.fill = "black"; // Change back to starting color
});

tiktokIcon.addEventListener("mouseover", function() {
  tiktokIcon.style.animation = `tiktok_hover ${animationDuration} ease-in-out`;
  tiktokIcon.style.fill = "#ee1d52"; // Change color to TikTok pink
});

tiktokIcon.addEventListener("mouseout", function() {
  tiktokIcon.style.animation = "none";
  tiktokIcon.style.fill = "black"; // Change back to starting color
});

rumbleImage.addEventListener("mouseover", function() {
  rumbleImage.style.filter = "brightness(1.5)"; // Increase brightness for color change effect
});

rumbleImage.addEventListener("mouseout", function() {
  rumbleImage.style.filter = "brightness(1)"; // Reset brightness
});
 
window.onload = function(){
    setTimeout(() => {
  construction_message.style.visibility = "visible";
}, 2000);
}