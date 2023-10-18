import Router from "./router/Router"
import main from "./components/Main/HeaderMain"
import Header from "./components/ui/Header/Header"
import "./style.scss"

(function() {
    const a = document.getElementsByTagName("a")
    for(let i = 0; i < a.length; i++){
        return a[i].href = ""
        
    }
    
}())

document.querySelector('#app').innerHTML = `
<div id="mainContainer" class="container-header">
    ${Header()}
    ${Router()}
    </div>
`

