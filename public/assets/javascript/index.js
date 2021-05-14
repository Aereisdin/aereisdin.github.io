$(document).ready(function() {
    var punchline = document.querySelector(".punchline");
    var setup = document.querySelector(".setup");
    $(".joke").click( function() {
        $.get( "https://official-joke-api.appspot.com/random_joke", function( data ) {
            setup.textContent = data.setup;
            punchline.textContent = data.punchline;
          });});
    $("#who").click( function() {
        $("#projectBox").empty();
        $("#goalBox").empty();
        $("#contactBox").empty();
        });
    $("#projects").click( function() {
        $("#projectBox").empty();
        $("#goalBox").empty();
        $("#contactBox").empty();
        var projectDisplay = "<div class='grid-y callout projectDisplay'data-closable><button class='close-button' aria-label='Close alert' type='button' data-close><span aria-hidden='true'>&times;</span></button><hr><div class='cell medium-12 grid-x callout projectDisplay2 align-spaced' data-closable><button class='close-button' aria-label='Close alert' type='button' data-close><span aria-hidden='true'>&times;</span></button><div class='cell medium-12'><img class='projectPhotos' src='./assets/images/project1.png' alt='First_Project'></div><div class='cell medium-3 projectList'>Technology Used:<ul><li>HTML 5</li><li>CSS 3</li><li>JavaScript</li><li>jQuery</li><li>CSS Framework - Foundation</li><li>3 API's</li></ul></div><div class='cell medium-8 projectText'><p>This is the very first group project I worked on. It is meant to become a Newbie Coder resource. This was a very fun and interesting project made challenging by our first use of GitHub as a group.</p><p class='text-center'><a href='https://aereisdin.github.io/teamAwesome' target='_blank'>Team Awesome Project</a></p><p class='text-center'><a href='https://www.github.com/Aereisdin/teamAwesome' target='_blank'>Team Awesome Repository</a></p></div></div><div class='cell medium-12 grid-x callout projectDisplay2 align-spaced' data-closable><button class='close-button' aria-label='Close alert' type='button' data-close><span aria-hidden='true'>&times;</span></button><div class='cell medium-12'><img class='projectPhotos' src='./assets/images/weatherapi.png' alt='Weather_API'></div><div class='cell medium-3'>Technology Used:<ul><li>HTML 5</li><li>CSS 3</li><li>jQuery</li><li>CSS Framework - Foundation</li><li>2 API's</li></ul></div><div class='cell medium-8'><p>This was my first project using APIs to provide weather and unique backgrounds based on search.</p><p class='text-center'><a href='https://aereisdin.github.io/weather-api' target='_blank'>Weather App</a></p><p class='text-center'><a href='https://www.github.com/Aereisdin/weather-api' target='_blank'>Weather App Repository</a></p></div></div><div class='cell medium-12 grid-x callout projectDisplay2 align-spaced' data-closable><button class='close-button' aria-label='Close alert' type='button' data-close><span aria-hidden='true'>&times;</span></button><div class='cell medium-12'><img class='projectPhotos' src='./assets/images/dailyplans.png' alt='Planner'></div><div class='cell medium-3'>Technology Used:<ul><li>HTML 5</li><li>CSS 3</li><li>jQuery</li><li>Luxon.js</li><li>CSS Framework - Bootstrap</li></ul></div><div class='cell medium-8'><p>This project uses Luxon.js to make time calculations. This was a pretty exciting project.</p><p class='text-center'><a href='https://aereisdin.github.io/daily-planner' target='_blank'>Working Hours Planner</a></p><p class='text-center'><a href='https://www.github.com/Aereisdin/daily-planner' target='_blank'>Daily Planner Repository</a></p></div></div></div>"
        $("#projectBox").append(projectDisplay);
        });
    $("#goals").click( function() {
        $("#projectBox").empty();
        $("#goalBox").empty();
        $("#contactBox").empty();
        var goalDisplay = "<div class='grid-y callout projectDisplay'data-closable><button class='close-button' aria-label='Close alert' type='button' data-close><span aria-hidden='true'>&times;</span></button><hr><div class='cell medium-12 grid-x callout projectDisplay2 align-spaced' data-closable><button class='close-button' aria-label='Close alert' type='button' data-close><span aria-hidden='true'>&times;</span></button><div class='cell medium-12 text-center'><p class='goals'>Coming Soon!</p></div></div></div>"
        $("#goalBox").append(goalDisplay);
        });
    $("#contact").click( function() {
        $("#contactBox").empty();
        $("#projectBox").empty();
        $("#goalBox").empty();
        var goalDisplay = "<div class='grid-y callout projectDisplay'data-closable><button class='close-button' aria-label='Close alert' type='button' data-close><span aria-hidden='true'>&times;</span></button><hr><div class='cell medium-12 grid-x callout projectDisplay2 align-spaced' data-closable><button class='close-button' aria-label='Close alert' type='button' data-close><span aria-hidden='true'>&times;</span></button><div class='cell medium-12 text-center'><p class='goals'>Coming Soon!</p></div></div></div>"
        $("#contactBox").append(goalDisplay);
        });      
});
