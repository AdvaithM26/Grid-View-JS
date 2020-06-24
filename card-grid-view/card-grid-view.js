/**
 * IMPORTANT: JQuery must be loaded in before this script
 * NOTE: class .pi-card must be added to the element with the class .col-lg-4 or col-lg-3 (whatever is the default)
 * NOTE: add id .grid-4x3 on the compact view button and .grid-3x3 on the spaced view button
 */


let $card = $(".gv-card");

$(".grid-4x3").on("click", () => {
	$card.removeClass("col-lg-4");
	$card.addClass("col-lg-3");
});
$(".grid-3x3").on("click", () => {
	$card.removeClass("col-lg-3");
	$card.addClass("col-lg-4");
});

