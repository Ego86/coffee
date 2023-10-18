import { CoffeeData } from "./CoffeeData";
import styles from "./Coffee.module.scss";
import {reducer, initialState} from "../../reducer/reducer";




const Coffee = (isStateModal) => {

const postCoffee = (index) =>{
const price = document.querySelector(`#priceCoffee${index}`).children
const ml = document.querySelector(`#coffeeMLContain${index}`).children
for(let i = 0; i < ml.length; i++){
    ml[i].addEventListener("click", e => {
      const activeElement = document.querySelectorAll(`.${styles.active}`)
    if(activeElement.length === 0){
      e.target.classList.toggle(styles.active)
      price[i].classList.toggle(styles.active)
    }else{
      e.target.classList.remove(styles.active)
      price[i].classList.remove(styles.active)
      
    }
  })
}
}
const sendCoffee = (index) => {
  const activeElement = document.querySelectorAll(`.${styles.active}`),
  coffeeSelectedName = CoffeeData[index].name,
  mlActive =  activeElement[0].textContent,
  priceActive =  activeElement[1].textContent;

  activeElement[0].classList.toggle(styles.active);
  activeElement[1].classList.toggle(styles.active);


  if(!CoffeeData[index].volumeAndPrice.price.some(item=> item === Number(priceActive))){
    alert("ERROR incorrect purchase")
  }else
  {
    const sendAllData = {
      mlActive, 
      priceActive,
    name: coffeeSelectedName,
    id: JSON.stringify(new Date().getUTCMilliseconds())
  }
    reducer.Coffee(sendAllData)
  }
  };



  window.postCoffee = postCoffee;
  window.sendCoffee = sendCoffee;

  return `
  <div class="${styles.container}">
  ${CoffeeData.map((item, index) => {
    return `
      <section key="${item.id}" class="${styles.coffeeSection}">
        <h1>${item.name}</h1>
        <img src="${item.image}" alt="${item.name}" />
        <div class="${styles.title}">
          <ul id="coffeeMLContain${index}" onclick="postCoffee(${index})" >ml:
          <li  >${item.volumeAndPrice.ml[0]}</li>
          <li  >${item.volumeAndPrice.ml[1]}</li>
          <li  >${item.volumeAndPrice.ml[2]}</li>
          </ul>
          <ul id="priceCoffee${index}">price: 
          <li>${item.volumeAndPrice.price[0]}</li>
          <li>${item.volumeAndPrice.price[1]}</li>
          <li>${item.volumeAndPrice.price[2]}</li>
          </ul>
          
        </div>
        <button id="btnCoffee${item.id}" onclick="sendCoffee(${index})" class="${styles.btn} btn">pay</button>
      </section>
      `
    })}
      </div>
    `;
    
   
  }
  
export default Coffee;

