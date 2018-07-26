// init images array
var images = [
    { caption: "Island", url: "https://static.boredpanda.com/blog/wp-content/uploads/2017/04/taken-bydoyoutravel-1-png__700.jpg" },
    { caption: "London", url: "https://guarantee-tours.com/wp-content/uploads/2016/03/munich_isar_germany_bavaria_98059_3840x2160-500x500.jpg" },
    { caption: "Mountain", url: "http://www.anewyorkchapter.com/wp-content/uploads/2017/08/FullSizeRender-2-e1502472525754-500x500.jpg" },
    { caption: "Egypt", url: "http://www.globotours.net/wp-content/uploads/2016/10/Egypt-500.jpg" },
    { caption: "Jetset", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkfI_LgCXKMWinS9fFKlF1kQP84qQVM3fr7BmKLYnyZYILE-1U"}, 
    { caption: "Cambodia", url: "https://www.theultimatetravelcompany.co.uk/wp-content/uploads/2015/04/shutterstock_289362896-500x500.gif"},
    { caption: "Berlin", url: "http://cdn.web30s.vn/datafiles/5008/upload/images/14776258948456_Berlin-500x500.jpg"}
];
// init Global Variables
var container = document.querySelector('.image-list');
var modal = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');
var lightBoxImage = document.querySelector('.lightBoxImage');
var currentImg;
// loop through images, add to DOM dynamically
images.forEach(function(image, i) {
    currentImg = i;
    // init <img> newImage
    var newImage = document.createElement('img');
    newImage.setAttribute('src', image.url);
    newImage.classList.add('img');
    // init <p> caption
    var caption = document.createElement('p');
    caption.textContent = image.caption;
    caption.classList.add('caption');
    // init <li> listItem
    // append image + caption to listItem
    var listItem = document.createElement('li');
    listItem.appendChild(newImage);
    listItem.appendChild(caption);
    listItem.classList.add('listItem');
    // add <li> listItem to <ul> container
    container.appendChild(listItem);
    // on listItem click
    listItem.addEventListener('click', function () {
        lightBoxImage.setAttribute('src', (image.url));
        backdrop.classList.toggle('open');
    });
    // print image src and index to screen
    console.log(image, i);
});

// on nextImg click
var nextImg = document.querySelector('.nextImg');
nextImg.addEventListener('click', function () {
    lightBoxImage.setAttribute('src', (images[(currentImg+=1)].url));
    console.log(images[currentImg]);
});
// on prevImg click
var prevImg = document.querySelector('.prevImg');
prevImg.addEventListener('click', function () {
    lightBoxImage.setAttribute('src', (images[(currentImg-=1)].url));
    console.log(images[currentImg]);
});
// init closeModal function
var closeModal = function (event) {
    if (event.target === backdrop) {
        backdrop.classList.toggle('open');
        currentImg = 0;
    }
};
// close modal on backdrop click
backdrop.addEventListener('click', closeModal);
