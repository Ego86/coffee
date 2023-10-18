import { initialState, initialStateCount, reducer } from "../../reducer/reducer"
import PopUp from "../../ui/PopUp/PopUp"
import styles from "./Basket.module.scss"


const Basket = (props) =>{
    const basketData = localStorage
    
    const deleteSection =  (id) =>{
        reducer.CoffeeDelete(JSON.parse(basketData[id]))
        location.reload()
}


const sumOfAllCoffees = () => {
    let totalPrice = 0;
    Object.values(basketData).forEach(item => {
        const element = JSON.parse(item);
        const price = Number(element?.priceActive) || 0;
        totalPrice += price;
    });


    return totalPrice;
};

const handlerStatePopUp =()=> {
    const newDiv = document.querySelector(`.${styles.PopUpHidden}`)
    localStorage.clear()
    setTimeout(() => {
        newDiv.remove()
    }, 2000)

}
const renderPopUp = (isPopUp) => {
const newDiv = document.createElement("div") 
document.querySelector(`.${styles.container}`)
.appendChild(newDiv)
 newDiv.classList.add(styles.PopUpHidden)
 newDiv.innerHTML = `
${PopUp()}}
`
handlerStatePopUp()
}
window.renderPopUp = renderPopUp
window.deleteSection = deleteSection

const responeCoffee = () =>{
return Object.keys(basketData).map((item)=>{
    const element = JSON.parse(basketData[item])
    return`
    <h4 onclick="deleteSection(${element.id})"
    class="${styles.closeHover}">
    x
    </h4>
    <div>
    <h3>${element.name}</h3>
    <h3>ml: ${element.mlActive}</h3>
    <h3>price: ${element.priceActive}</h3>
    </div>
    `

})
}

return `
${""}
<div class="${styles.container}">
<section class="${ styles.section}">
${basketData.length ? 
responeCoffee().join("")
:
`<h1 
style="display: flex; justify-content: center; padding:10px;">
empty
</h1>`
}
<div class="${styles.footerBtn}">
<h2>All sum:${sumOfAllCoffees()}</h2>
<button
onclick="renderPopUp()"
id="${styles.btn}"
class="${styles.btn}">buy</button>
</div>
</section>
</div>
`
}


export default Basket