var correctImg = document.querySelector(".correctImg");
let lists = document.getElementsByClassName("list");
let matrixs = document.querySelectorAll(".col-4");
var check = document.querySelector("#check");
var correctContainer = document.querySelector("#correctContainer");
var soruContainer = document.querySelector("#soruContainer");
var answer = document.querySelector("#answer");
var submit = document.querySelector("#submit");
var puan  = document.querySelector("#point");
var correctImgFive = document.querySelector(".corrretImg5");
var wrongImgFive = document.querySelector(".wrongImg5");
var correctImgFour = document.querySelector(".corrretImg4");
var wrongImgFour = document.querySelector(".wrongImg4");
var correctImgThree = document.querySelector(".corrretImg3");
var wrongImgThree = document.querySelector(".wrongImg3");
var startButton = document.querySelector("#basla");
var game = document.querySelector(".game");
var fiveWords = ["CAHİL","HABER","FAHİŞ","KABAK","ZAFER","ZALİM","YAĞIŞ","VAKIF","ÜÇGEN","UÇMAK","TABAK","ŞAFAK","SABIR","RACON","PAKET","ÖĞLEN","OBRUK","NADAS","MADDE","JAPON","İBLİS","GALİP","FAKAT","CACIK","CAMCI","ABBAS","ÇABUK","DAİMA","EDEBİ","HACİM","JOKER","MACUN","NADİR"];
var fourWords = ["BABA","CAMİ","DADI","FAİZ","ZAAF","YAMA","VADİ","ÜLKE","UÇAK","TAHT","ŞAİR","SAAT","RAKI","PANO","ÖDÜL","OCAK","NANE","MAAŞ","KAFA","JÖLE","IRAK","İADE","FAÇA","EBRU","GACI","HAİN","FAKS","JEST","IRAK","ÖDEV","PARA","UÇUK","ŞANS","ÜCRA"];
var threeWords = ["CAM","ÇAM","DAĞ","MAÇ","ZAM","YAT","VAH","ÜTÜ","ULU","TAÇ","ŞAH","SAĞ","RAF","ÖLÜ","ODA","LAF","KAN","KAŞ","IRK","GAM","FAR","EGO","DAM","ÇAĞ","BAĞ","AÇI","ACI","ÇAP","ÇAN","ISI","NAM","RAY","ŞAP","VAN","ZAR"];
var kalan = document.querySelector("#kalan");
var next = document.querySelector("#next");
var finish = document.querySelector("#bitir");
var totalPuan = document.querySelector("#totalPuan");
var end = document.querySelector(".end");
var fiveWord;
var fourWord;
var threeWord;
var fiveletters = [];
var fourletters = [];
var threeletters = [];
var point = 0;
var tıklamaSayısı =2;

function selectRandomFiveWord() {
  var randomIndex = Math.floor(Math.random() * fiveWords.length);
  fiveWord = fiveWords[randomIndex];
  fiveWords.splice(randomIndex, 1); 
}

function selectRandomFourWord() {
  var randomIndex = Math.floor(Math.random() * fourWords.length);
  fourWord = fourWords[randomIndex];
  fourWords.splice(randomIndex, 1); 
}

function selectRandomThreeWord() {
  var randomIndex = Math.floor(Math.random() * threeWords.length);
  threeWord = threeWords[randomIndex];
  threeWords.splice(randomIndex, 1); 
}

finish.addEventListener("click", function(){
  game.style.display = "none";
  startButton.style.display = "none";
  end.style.display = "flex";
});

selectRandomFiveWord();
selectRandomFourWord();
selectRandomThreeWord();
;

for (var i = 0; i < fiveWord.length; i++) {
  fiveletters.push(fiveWord[i]);
}
for (var i = 0; i < fourWord.length; i++) {
  fourletters.push(fourWord[i]);
}
for (var i = 0; i < threeWord.length; i++) {
  threeletters.push(threeWord[i]);
}
var firstfive = fiveletters.shift();
var combinedArrayFive = fiveletters;
var firstfour = fourletters.shift();
var combinedArrayFour = fourletters;
var firstthree = threeletters.shift();
var combinedArrayThree = threeletters;

var fullLetters = combinedArrayFive.concat(combinedArrayFour, combinedArrayThree);

for (var i = 0; i < lists.length; i++) {
  var randomIndex = Math.floor(Math.random() * fullLetters.length);
  var letter = fullLetters[randomIndex];
  lists[i].textContent = letter;
  fullLetters.splice(randomIndex, 1);
}

var beskutuSayisi = fiveWord.length;
var dortkutuSayisi = fourWord.length;
var uckutuSayisi = threeWord.length;

for (var i = 1; i < beskutuSayisi; i++) {
  var div = document.createElement("div");
  div.className = "kutu animate__animated animate__zoomIn";
  document.querySelector("#five").appendChild(div);
}
var firstFive = document.querySelector("#five").getElementsByClassName("kutu")[0];
firstFive.textContent = fiveWord[0];
for (var i = 1; i < dortkutuSayisi; i++) {
  var div = document.createElement("div");
  div.className = "kutu animate__animated animate__zoomIn";
  document.querySelector("#four").appendChild(div);
}
var firstFour = document.querySelector("#four").getElementsByClassName("kutu")[0];
firstFour.textContent = fourWord[0];
for (var i = 1; i < uckutuSayisi; i++) {
  var div = document.createElement("div");
  div.className = "kutu animate__animated animate__zoomIn";
  document.querySelector("#three").appendChild(div);
}
var firstThree = document.querySelector("#three").getElementsByClassName("kutu")[0];
firstThree.textContent = threeWord[0];

var boxes = document.querySelectorAll(".kutu");

for (let a of lists) {
  a.addEventListener("dragstart", function(e) {
    let selected = e.target;

    for (let box of boxes) {
      box.addEventListener("dragover", function(e) {
        e.preventDefault();
      });

      box.addEventListener("drop", function(e) {
        e.preventDefault();
        box.appendChild(selected);
        selected = null;
      });
    }

    for (let matrix of matrixs) {
      matrix.addEventListener("dragover", function(e) {
        e.preventDefault();
      });

      matrix.addEventListener("drop", function(e) {
        e.preventDefault();
        matrix.appendChild(selected);
        selected = null;
      });
    }
  });
}

check.addEventListener("click", function() {
  if(tıklamaSayısı >= 6){
    next.style.display = "none";
    finish.style.display = "block";
  }
  else{
    next.style.display = "block";
  }  
    var checkWordFive = "";
    var checkWordFour = "";
    var checkWordThree = "";
    var Fivekutular = document.querySelector("#five").querySelectorAll(".kutu");
    var Fourkutular = document.querySelector("#four").querySelectorAll(".kutu");
    var Threekutular = document.querySelector("#three").querySelectorAll(".kutu");

    for (kutu of Fivekutular) {
      var harf = kutu.textContent;
      checkWordFive += harf;
    }
    for (kutu of Fourkutular) {
      var harf = kutu.textContent;
      checkWordFour += harf;
    }
    for (kutu of Threekutular) {
      var harf = kutu.textContent;
      checkWordThree += harf;
    }
    if (fiveWord === checkWordFive && fourWord === checkWordFour && threeWord === checkWordThree) {

      wrongImgFive.style.display = "none";
      wrongImgFour.style.display = "none";
      wrongImgThree.style.display = "none";

      correctImgFive.style.display = "none";
      correctImgFour.style.display = "none";
      correctImgThree.style.display = "none";

      correctImgFive.style.display = "block";
      correctImgFour.style.display = "block";
      correctImgThree.style.display = "block";

      point+=100;
    } else if(fiveWord !== checkWordFive && fourWord === checkWordFour && threeWord === checkWordThree) {
      
      wrongImgFive.style.display = "none";
      wrongImgFour.style.display = "none";
      wrongImgThree.style.display = "none";

      correctImgFive.style.display = "none";
      correctImgFour.style.display = "none";
      correctImgThree.style.display = "none";

      wrongImgFive.style.display = "block";
      correctImgFour.style.display = "block";
      correctImgThree.style.display = "block";
      point+=56;
    }
    else if(fiveWord === checkWordFive && fourWord !== checkWordFour && threeWord === checkWordThree) {
      wrongImgFive.style.display = "none";
      wrongImgFour.style.display = "none";
      wrongImgThree.style.display = "none";

      correctImgFive.style.display = "none";
      correctImgFour.style.display = "none";
      correctImgThree.style.display = "none";

      correctImgFive.style.display = "block";
      wrongImgFour.style.display = "block";
      correctImgThree.style.display = "block";
      point+=64;
    }
    else if(fiveWord === checkWordFive && fourWord === checkWordFour && threeWord !== checkWordThree) {
      wrongImgFive.style.display = "none";
      wrongImgFour.style.display = "none";
      wrongImgThree.style.display = "none";

      correctImgFive.style.display = "none";
      correctImgFour.style.display = "none";
      correctImgThree.style.display = "none";

      correctImgFive.style.display = "block";
      correctImgFour.style.display = "block";
      wrongImgThree.style.display = "block";
      point+=72;
    }
    else if(fiveWord !== checkWordFive && fourWord !== checkWordFour && threeWord === checkWordThree) {
      wrongImgFive.style.display = "none";
      wrongImgFour.style.display = "none";
      wrongImgThree.style.display = "none";

      correctImgFive.style.display = "none";
      correctImgFour.style.display = "none";
      correctImgThree.style.display = "none";

      wrongImgFive.style.display = "block";
      wrongImgFour.style.display = "block";
      correctImgThree.style.display = "block";
      point+=24;
    }
    else if(fiveWord !== checkWordFive && fourWord === checkWordFour && threeWord !== checkWordThree) {
      wrongImgFive.style.display = "none";
      wrongImgFour.style.display = "none";
      wrongImgThree.style.display = "none";

      correctImgFive.style.display = "none";
      correctImgFour.style.display = "none";
      correctImgThree.style.display = "none";

      wrongImgFive.style.display = "block";
      correctImgFour.style.display = "block";
      wrongImgThree.style.display = "block";
      point+=32;
    }
    else if(fiveWord === checkWordFive && fourWord !== checkWordFour && threeWord !== checkWordThree) {
      wrongImgFive.style.display = "none";
      wrongImgFour.style.display = "none";
      wrongImgThree.style.display = "none";

      correctImgFive.style.display = "none";
      correctImgFour.style.display = "none";
      correctImgThree.style.display = "none";

      correctImgFive.style.display = "block";
      wrongImgFour.style.display = "block";
      wrongImgThree.style.display = "block";
      point+=40;
    }
    else if(fiveWord !== checkWordFive && fourWord !== checkWordFour && threeWord !== checkWordThree) {
      wrongImgFive.style.display = "none";
      wrongImgFour.style.display = "none";
      wrongImgThree.style.display = "none";

      correctImgFive.style.display = "none";
      correctImgFour.style.display = "none";
      correctImgThree.style.display = "none";

      wrongImgFive.style.display = "block";
      wrongImgFour.style.display = "block";
      wrongImgThree.style.display = "block";
      point+=0;
    }
    puan.innerHTML = "PUAN: "+point;
    
});

next.addEventListener("click", function() {
  var lists = document.querySelectorAll(".list");
  for (var i = 0; i < lists.length; i++) {
    lists[i].remove();
  }

  tıklamaSayısı+=1;
  kalan.innerHTML = "SORU: "+(tıklamaSayısı-1)+"/5";
  wrongImgFive.style.display = "none";
  wrongImgFour.style.display = "none";
  wrongImgThree.style.display = "none";

  correctImgFive.style.display = "none";
  correctImgFour.style.display = "none";
  correctImgThree.style.display = "none";

  soruContainer.style.display = "flex";
  next.style.display = "none";
  submit.style.display = "flex";
  answer.style.display = "flex";

  fiveWord = "";
  fourWord = "";
  threeWord = "";
  fiveletters = [];
  fourletters = [];
  threeletters = [];


  selectRandomFiveWord();
  selectRandomFourWord();
  selectRandomThreeWord();


  for (var i = 0; i < fiveWord.length; i++) {
    fiveletters.push(fiveWord[i]);
  }
  for (var i = 0; i < fourWord.length; i++) {
    fourletters.push(fourWord[i]);
  }
  for (var i = 0; i < threeWord.length; i++) {
    threeletters.push(threeWord[i]);
  }

  var col4Elements = document.querySelectorAll(".col-4");

  var firstfive = fiveletters.shift();
  var combinedArrayFive = fiveletters;
  var firstfour = fourletters.shift();
  var combinedArrayFour = fourletters;
  var firstthree = threeletters.shift();
  var combinedArrayThree = threeletters;

  var fullLetters = combinedArrayFive.concat(combinedArrayFour, combinedArrayThree);
  
  for (var i = 0; i < col4Elements.length; i++) {
    var div = document.createElement("div");
    div.className = "list";
    div.setAttribute("draggable", "true");
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.textAlign = "center";
    col4Elements[i].appendChild(div);

    var randomIndex = Math.floor(Math.random() * fullLetters.length);
    var letter = fullLetters[randomIndex];
    div.textContent = letter;
    fullLetters.splice(randomIndex, 1);
  }
  
  beskutuSayisi = fiveWord.length+1;
  dortkutuSayisi = fourWord.length+1;
  uckutuSayisi = threeWord.length+1;

  var five = document.querySelector("#five");
  five.innerHTML = "";
  var four = document.querySelector("#four");
  four.innerHTML = "";
  var three = document.querySelector("#three");
  three.innerHTML = "";
  three.display = "block"

  for (var i = 1; i < beskutuSayisi; i++) {
    var div = document.createElement("div");
    div.className = "kutu";
    five.appendChild(div);
  }
  var firstFive = document.querySelector("#five").getElementsByClassName("kutu")[0];
  firstFive.textContent = fiveWord[0];
  for (var i = 1; i < dortkutuSayisi; i++) {
    var div = document.createElement("div");
    div.className = "kutu";
    four.appendChild(div);
  }
  var firstFour = document.querySelector("#four").getElementsByClassName("kutu")[0];
  firstFour.textContent = fourWord[0];
  for (var i = 1; i < uckutuSayisi; i++) {
    var div = document.createElement("div");
    div.className = "kutu";
    three.appendChild(div);
  }
  var firstThree = document.querySelector("#three").getElementsByClassName("kutu")[0];
  firstThree.textContent = threeWord[0];
  
  var boxes = document.querySelectorAll(".kutu");
  for (let a of lists) {
    a.addEventListener("dragstart", function(e) {
      let selected = e.target;
  
      for (let box of boxes) {
        box.addEventListener("dragover", function(e) {
          e.preventDefault();
        });
  
        box.addEventListener("drop", function(e) {
          e.preventDefault();
          box.appendChild(selected);
          selected = null;
        });
      }
  
      for (let matrix of matrixs) {
        matrix.addEventListener("dragover", function(e) {
          e.preventDefault();
        });
  
        matrix.addEventListener("drop", function(e) {
          e.preventDefault();
          matrix.appendChild(selected);
          selected = null;
        });
      }
    });
  }
  $(function() {
    $(".list").draggable({
        revert: true,
        start: function(event, ui) {
        $(this).addClass("dragging");
        },
        stop: function(event, ui) {
        $(this).removeClass("dragging");
        }
    });

    $(".kutu").droppable({
        accept: ".list",
        drop: function(event, ui) {
        $(this).append(ui.draggable);
        }
    });
    });
    $(function() {
      $(".list").draggable({
          revert: true,
          start: function(event, ui) {
          $(this).addClass("dragging");
          },
          stop: function(event, ui) {
          $(this).removeClass("dragging");
          }
      });

      $(".col-4").droppable({
          accept: ".list",
          drop: function(event, ui) {
          $(this).append(ui.draggable);
          }
      });
      });
});

totalPuan.innerHTML = "TOTAL POINT: " + point;