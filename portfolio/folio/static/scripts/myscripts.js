$(document).ready(function () {
	console.log("test");
});

/*Scrolls Element to Top of Page.  Takes in
string from HTML onclick.  String should be '#<insert id>'*/
function scrollsTo(section){
	$('html, body').animate({scrollTop: ($(section).offset().top)},800);
}

/*Opens up Modal to Image Chosen.  Each thumbnail is given this function 
as it is loaded from database table with the value of Name from the SQL table 
for the chosen image.  Each thumbnail is given an alt tag with same name which 
allows for search through simple for loop. Built in debug.  If no value is 
found in JS array, console prints an error.  If everything works, modal opens 
with original image*/
function openModal(imName){
	var targetImage;
	var imageList = document.getElementsByClassName("image");

	for (x in imageList){
		if (imageList[x].getAttribute('alt') == imName) {
			targetImage = imageList[x];
			break;
		}
	}

	if (targetImage) {
		$('#modalImage').attr('src', targetImage.getAttribute('meta'));
		$('#modalImage').attr('alt', targetImage.getAttribute('alt'));

	} else {
		console.log("There was an error retrieving image");
	}

	$('.modal').fadeIn(500).css("display", "grid");
}

/*Simply closes Modal*/
function closeModal(){
	$('.modal').fadeOut(500);
}

function prevImage() {
	var currentIndex = findIndex();
	var imageList = document.getElementsByClassName("image");

	if (currentIndex > 0)
	{
		currentIndex--;
		$('#modalImage').attr('src', imageList[currentIndex].getAttribute('meta'));
		$('#modalImage').attr('alt', imageList[currentIndex].getAttribute('alt'));
	} else if (currentIndex == 0) {
		console.log("Index is already at Head");
	} 
	else {
		currentIndex = 0;
		console.log ("Error with prevImage function");
	}
}

function nextImage() {
	var currentIndex = findIndex();
	var imageList = document.getElementsByClassName("image");

	if (currentIndex < imageList.length - 1)
	{
		currentIndex++;
		$('#modalImage').attr('src', imageList[currentIndex].getAttribute('meta'));
		$('#modalImage').attr('alt', imageList[currentIndex].getAttribute('alt'));
	} else if (currentIndex == imageList.length - 1) {
		console.log("Index is already at End");
	} 
	else {
		currentIndex = imageList.length - 1;
		console.log ("Error with nextImage function");
	}
}

function findIndex() {

	var imageIndex;
	var imageList = document.getElementsByClassName("image");
	var currentImage = document.getElementById("modalImage");

	for (var x=0; x < imageList.length; x++){
		if (imageList[x].getAttribute('alt') == currentImage.getAttribute('alt')) {
			imageIndex = x;
			break;
		}
	}

	if (imageIndex >= 0) {
		return imageIndex;
	} else {
		console.log("Index Not Found");
	}
}

function slideForm(){
	$(upload_form).toggle("slide", { direction: "left" }, 500);
}