var $newH1 = $('<H1>');
var $belowVeggies = $('<ul>');
var $aboveH1 = $('<h1>');
var $aboveVeggies = $('<ul>');

$newH1.html('Below ground veggies');
$('body').prepend($newH1);

$('body').append($belowVeggies);

$aboveH1.html('Above ground veggies');
$('body').append($aboveH1);

$('body').append($aboveVeggies);

$('ul li').each(function () {
  if ($(this).hasClass('below')) {
    $belowVeggies.append($(this));
  } else {
    $aboveVeggies.append($(this));
  }

});
