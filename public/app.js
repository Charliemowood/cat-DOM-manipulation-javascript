var app = function() {

  // var sectionCat = document.createElement('section');
  // sectionCat.classList.add('cats')
  // console.log(sectionCat);

  var unorderedListCat = document.createElement('ul');
  unorderedListCat.classList.add('cat');
  console.log(unorderedListCat);

  var liName = document.createElement('li');
  liName.innerText = "Name: Garry";
  console.log(liName);

  var liFavoriteFood = document.createElement('li');
  liFavoriteFood.innerText = "Favorite Food: Salmon";
  console.log(liFavoriteFood);

  var liImgWrapper = document.createElement('li');
  console.log(liImgWrapper);

  var img = document.createElement('img');
  img.src = "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg";
  img.width = 500;
  console.log(img);

  // this use for deciding where to append the code. 
  var catList = document.querySelector('#cats')

  liImgWrapper.appendChild(img);
  unorderedListCat.appendChild(liName);
  unorderedListCat.appendChild(liFavoriteFood);
  unorderedListCat.appendChild(liImgWrapper);
  catList.appendChild(unorderedListCat);

}

// Waits for dom to load for interacting with document objects.
window.onload = app;
