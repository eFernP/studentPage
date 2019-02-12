

let i1 = document.getElementById("interest1");
let i2 = document.getElementById("interest2");
let i3 = document.getElementById("interest3");
let i4 = document.getElementById("interest4");


function showInterest1(){
  if (i1.style.backgroundImage !== "none"){
    i1.style.backgroundImage = "none";
    i1.innerText = "Play videogames but also make videogames!";
  } else{
    i1.style.backgroundImage = 'url("img/pattern1.png")';
    i1.innerText = '';
  }
}

function showInterest2(){
  if (i2.style.backgroundImage !== "none"){
    i2.style.backgroundImage = "none";
    i2.innerText = "Fantasy and science-fiction in any format (books, movies, games...)";
  } else{
    i2.style.backgroundImage = 'url("img/pattern2.png")';
    i2.innerText = '';
  }
}

function showInterest3(){
  if (i3.style.backgroundImage !== "none"){
    i3.style.backgroundImage = "none";
    i3.innerText = "Skate in line (still need more practice).";
  } else{
    i3.style.backgroundImage = 'url("img/pattern3.png")';
    i3.innerText = '';
  }
}

function showInterest4(){
  if (i4.style.backgroundImage !== "none"){
    i4.style.backgroundImage = "none";
    i4.innerText = "DIY relaxes me but I don't have so much time for that, so I haven't been relaxed for a while.";
  } else{
    i4.style.backgroundImage = 'url("img/pattern4.png")';
    i4.innerText = '';
  }
}

i1.addEventListener('click', showInterest1);
i2.addEventListener('click', showInterest2);
i3.addEventListener('click', showInterest3);
i4.addEventListener('click', showInterest4);
