console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
 let drop =  document.getElementById('breed-dropdown');
 console.log(drop)

// drop.addEventListener("change",getval(event));
 function fetchImg(){
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImg(json));
}
function renderImg(json) {
    const main = document.getElementById('dog-image-container');
    console.log(json.message);
    const arr = json.message;
    for( image of arr){
        const imgn = document.createElement('img');
        imgn.src = image ;
        main.appendChild(imgn);
    }
  }
  function fetbreed(){
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderbreed(json));
  }
  function renderbreed(json) {
    const main = document.getElementById('dog-breeds');
    console.log(json.message);
    const arr = json.message;
    for( breed in arr){
        const lib = document.createElement('li');
        lib.innerHTML = breed ;
        lib.addEventListener("click",function(){
          lib.style.color ="red";
        })
        main.appendChild(lib);
    }
  }
  function getval(event) {
     //let val =  document.getElementById('breed-dropdown').value;
     let val = event.target.value;
     let lis = document.querySelectorAll('li');
     if (val == "all"){
        for(let i=0;i<lis.length;i++){
            lis[i].style.display = 'block';
        }
    }
    else{
        for(let i=0;i<lis.length;i++){
            let word = lis[i].textContent;
            if(val == word[0]){
                lis[i].style.display = "block";
            }
            else{
                lis[i].style.display = "none";
            }
        }
        
     }

  };
  document.addEventListener('DOMContentLoaded',function(){
    fetchImg();
    fetbreed();
  

  })

window.addEventListener('load', (event) => {
  fetchfun();
});

function fetchfun(){
  fetch(imgUrl)
.then(function(response) {
  return response.json();
}).then(function(json){
  let obj = json;
  let img = document.createElement('img');
  img.src= obj;
});
}

