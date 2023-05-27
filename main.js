const foodImg_btnn = document.getElementById("foodImg_btnn");
const food_Img = document.getElementById("food-Img");
const dddd2 = document.getElementsByClassName("dddd2")[0];



let i = 0;
foodImg_btnn.onclick = function autoFood_img() {
  const arr = [
    ` <img id="food-Img" src="/img/fod2.fw.png">`,
    ` <img id="food-Img" src="/img/fod3.fw.png">`,
    ` <img id="food-Img" src="/img/fod4.fw.png">`,
    ` <img id="food-Img" src="/img/fod5.fw.png">`,
    ` <img id="food-Img" src="/img/fod1.fw.png">`,
  ];
    // dddd2.innerHTML = arr[Math.floor(Math.random() * arr.length)];  لاخذ رقم عشوائي

  dddd2.innerHTML=arr[i]
  i++
  if (i>(arr.length - 1)) {
    i=0
    
  }

};
setInterval(autoFood_img, 500);
