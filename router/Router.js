import Contacts from "../components/page/Contacts/Contacts.js"
import HeaderMain from "../components/Main/HeaderMain.js";
import Coffee from "../components/page/Coffee/Coffee.js";
import Basket from "../components/page/Basket/Basket.js";

const Router = (props) =>{
const page = window.location.pathname
switch(page){
    case "/contacts":
        return Contacts()
    case "/basket":
        return Basket();
    case "/coffee":
        return Coffee()
    default:
        return HeaderMain()
}

}
export default Router