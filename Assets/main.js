$('.slider1').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});


if(localStorage.getItem("basket",JSON.stringify([]))===null)
{localStorage.setItem("basket",JSON.stringify([]))};

function Countbasket(){
  let basket = JSON.parse(localStorage.getItem("basket"))
  let count = basket.length
  let total=0
  document.getElementById("productpcs").innerText= basket.length
  basket.forEach(x => {
    total+=(x.Price*x.Count)
  });
  document.getElementById("total").innerText= total.toFixed(2)
  document.getElementById("totalcard").innerText= total.toFixed(2)
}
Countbasket()

let addtocardbuttons = document.getElementsByClassName("addtocardbutton");
for (let addtocardbutton of addtocardbuttons) {
  addtocardbutton.addEventListener("click",function(e){
    let basket=JSON.parse(localStorage.getItem("basket"))
    let id=e.target.parentElement.parentElement.id
    let exist=basket.find(x=> x.Id == id)
    if(exist == undefined){
      let name=document.getElementById(id).lastElementChild.firstElementChild.firstElementChild.innerHTML
      let price=e.target.previousElementSibling.innerHTML
      let src=e.target.parentElement.previousElementSibling.firstElementChild.nextElementSibling.src
      basket.push({
        Id: id,
        Name:name,
        Price: price,
        Src: src,
        Count:1
      })
    }
    else{
      exist.Count +=1;
    }
    localStorage.setItem("basket",JSON.stringify(basket))
    Countbasket()
})  
}


