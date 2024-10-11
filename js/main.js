//check locel Storeg
let local = localStorage.getItem("option-color");
if(local !== null){
    document.documentElement.style.setProperty(`--main--color`,localStorage.getItem("option-color"))
}
//check background 
let ladingpage = document.querySelector(".lading-page");
let NoButton = document.querySelector("#no");
let hh = document.querySelectorAll("#yes")
let hh2= document.querySelectorAll("#yese")
let loc =  localStorage.getItem("imges");
let background = true;
let backintervel;
if(localStorage.getItem("zaid")!== null){
  hh.forEach(elmen=>{
   elmen.classList.remove("yes")
  })
  background = localStorage.getItem("zaid")
  if(background === 'true'){
    document.querySelector("#yes").classList.add("yes")
}
  else{
    document.querySelector("#no").classList.add(`${localStorage.getItem("classactive")}`)
  }
   if(loc !== null){
    ladingpage.style.backgroundImage = `url(${localStorage.getItem("imges")})`
   }
}
let allbolits = document.querySelector(".navigation");
if(localStorage.getItem("boluits")!==null){
    hh2.forEach(elmen=>{
        elmen.classList.remove("yese")
       })
    allbolits.style.display = `${localStorage.getItem("boluits")}`
    if(localStorage.getItem("boluits")=== "block"){
        document.querySelector("#yese").classList.add("yese")
    }
    else if(localStorage.getItem("boluits")=== "none"){
        document.querySelector("#noe").classList.add("yese")
    }
}
let button = document.querySelectorAll(".rundom-back  button");
button.forEach(elem=>{
    elem.addEventListener("click",(n)=>{
        n.target.parentElement.querySelectorAll(".yes").forEach(el=>{
            el.classList.remove("yes")
        })
        n.target.className = "yes";
        localStorage.setItem("classactive",n.target.className = "yes");
        if(n.target.dataset.back  === 'yes'){
            background = true;
            localStorage.setItem("zaid",background)
            ranomizimeges();
        }
        else{
            background = false;
            localStorage.setItem("zaid",background)
            clearInterval(backintervel)
        }
    })
});
let imeg = ["../img/forest_mountains_sunset_cool_weather_minimalism.jpg","../img/360_F_657206985_7JnPZxrSIP9L6Pk3dyf9i8ljFEpv8iqZ.jpg","../img/wallpapersden.com_minimal-hd-landscape_1920x1080.jpg","../img/wallpapersden.com_minimal-ship-artwork-purple-background_1920x1080.jpg","../img/wallpapersden.com_rising-sun-at-mountains-4k-background_1920x1080.jpg"];
ladingpage.style.backgroundImage="url(../img/360_F_657206985_7JnPZxrSIP9L6Pk3dyf9i8ljFEpv8iqZ.jpg)";

function  ranomizimeges(){
    if(background===true){
       backintervel = setInterval(()=>{
            let roundom = Math.floor(Math.random()*5);
            ladingpage.style.backgroundImage=`url(${imeg[roundom]})`
            localStorage.setItem("imges",imeg[roundom])
        },6000)
    }
}
ranomizimeges();
let icone = document.querySelector("#icon1");
let steingBox = document.querySelector(".steing-box");
let textSteingBox = document.querySelector(".steing-contener");
icone.onclick = ()=>{
    steingBox.classList.toggle("open")
    textSteingBox.classList.toggle("open2");
    icone.classList.toggle("fa-spin-pulse")
};
let colorli = document.querySelectorAll(".steing-contener .opstion-box li");
let hoverli = document.querySelectorAll(".text-page span")
colorli.forEach(element => {
    element.addEventListener("click",(e)=>{
        document.documentElement.style.setProperty(`--main--color`,e.target.dataset.color)
        localStorage.setItem("option-color",e.target.dataset.color);
        e.target.parentElement.querySelectorAll(".active").forEach(element2 => {
            element2.classList.remove("active");
        });
        e.target.className = "active";
    })
});

let skills = document.querySelector(".our-skills")
window.onscroll = function(){
    let scrolltop = skills.offsetTop;
    let scrollHigth = skills.offsetHeight;
    let windoheight = this.innerHeight;
    let windoscrolltop = this.pageYOffset;
    if(windoscrolltop >(scrolltop+scrollHigth-windoheight)){
        document.querySelectorAll(".colorbob").forEach(skillss=>{
            skillss.style.width = skillss.dataset.colorskills
        })
    }
};4
let gallary = document.querySelectorAll(".padding-popup-box .imgesBox img");
gallary.forEach((imgBox)=>{
    imgBox.addEventListener("click",(e)=>{
        let over = document.createElement("div");
        over.className = "popupBox";
        document.body.appendChild(over)
        let imgeDiv = document.createElement("div");
        let divImge = document.createElement("img");
        let iconeDiv = document.createElement("i");
        iconeDiv.className = "fa-solid fa-circle-xmark fa-beat" 
        divImge.src = imgBox.src;
        imgeDiv.appendChild(iconeDiv)
        imgeDiv.appendChild(divImge);
        imgeDiv.className = "imge"
        over.appendChild(imgeDiv)
        document.addEventListener("click",(e)=>{
            if(e.target === iconeDiv){
                e.target.parentElement.remove()
                document.querySelector(".popupBox").remove()
            }
        })
    })
})
let navigation = document.querySelectorAll(".navigation .bolitt");
let alllink = document.querySelectorAll(".huder-arue ul li a")
function allpage(element){
    element.forEach(e=>{
        e.addEventListener("click",(s)=>{
            document.querySelector(`.${s.target.dataset.navi}`).scrollIntoView({
                behavior:"smooth"
            })
        })
    })
}
allpage(navigation);
allpage(alllink);

let bolets = document.querySelectorAll(".rundom-back .billets button");
button.forEach(eem=>{
    eem.addEventListener("click",(n)=>{
        n.target.parentElement.querySelectorAll(".yese").forEach(el=>{
            el.classList.remove("yese")
        })
        n.target.className = "yese";
        localStorage.setItem("classactiv",n.target.className = "yese");
    })
    })
    
    bolets.forEach(ele=>{
        ele.addEventListener("click",(f)=>{
            if(f.target.dataset.display == "show"){
                allbolits.style.display = "block"
                localStorage.setItem("boluits","block")
            }
            else{
                 allbolits.style.display = "none";
                 localStorage.setItem("boluits","none")
            }
        })
    })
   let relode = document.querySelector(".reset"); 
   relode.onclick = function(){
    localStorage.clear()
    window.location.reload()
    }
    let iconemenu = document.querySelector(" .fa-bars");
    let ulicone = document.querySelector(".link")
    iconemenu.onclick = ()=>{ 
        ulicone.classList.toggle("block")
     }
     ulicone.onclick = (e)=>{
        ulicone.stopPropagation
     }
     document.addEventListener("click",(e)=>{
       if(e.target !== iconemenu && e.target !== ulicone){
        if(ulicone.classList.contains("block")){
            ulicone.classList.toggle("block")
            }
        }
    })
    let dd = new Date()
   document.querySelector(".copy .span1").innerHTML = dd.getFullYear()