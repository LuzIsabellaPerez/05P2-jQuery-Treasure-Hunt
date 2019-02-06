$("img, .schnell").hide();
$(".flavorflav").show();

$("button").dblclick(function() {
    $("button").hide();
    $("#wordsundstuff").text("Now click on the clock I'm wearing around my neck!");
    $("body").css("background","#5c41f4");
});

$(".flavorflav").click(function() {
    $("button").hide();
    $(".pi").slideDown();
    $(".flavorflav").hide();
    $("#wordsundstuff").text("Now click on the text!");
    $("body").css("background","#ef88a0");
});

$("#wordsundstuff").click(function() {
    $(".pi").hide();
    $(".engineeringexplained").fadeIn();
    $("#wordsundstuff").text("Double click on my hair!");
    $("body").css("background","#f23e68");
});

$(".engineeringexplained").dblclick(function() {
    $(".engineeringexplained").toggle();
    $(".mathpuns, .schnell").show();
    $("button").text("Es tut mir leid");
    $("#wordsundstuff").text("Bitte hover over the button. You're one hover away from the treasure!"); 
    $("body").css("background","#d81c48");
});

$(".schnell").hover(function() {
    $(".mathpuns, .schnell").hide();
    $(".england").show();
    $("#wordsundstuff").text("Good golly you're almost there.");
    $("body").css("background", "https://pbs.twimg.com/media/Cg2IlCCU4AQr0tM.jpg");
    $("#wordsundstuff").text("The only true treasure in the entire multiverse is getting rickrolled.").css("font-family", 'Cinzel');
    $("h1").css("font-family", 'Luckiest Guy').text("Vielen Dank für making the world a better place.");
    $("h1, #wordsundstuff").css("color", "white");
    $("body").css('background-image', 'url("https://d33wubrfki0l68.cloudfront.net/8bb09cc70862fce96a79634b832593bbb4776005/3eca6/what/rick.gif")');
    $("body").css("background-color", "#a82d33");
});

