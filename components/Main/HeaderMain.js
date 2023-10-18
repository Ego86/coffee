
import styles from "./Main.module.scss"

const main = (props) =>{
    return `
    <div class="${styles.containerMain}">
    <div class="${styles.imgCoffe}"></div>
    <section class="${styles.sectionMain}" >
    <h1>Take coffe with</h1>
    <h1 class="${styles.brown}">YOU</h1>
    <a class="${styles.btn}" href="/coffee">
        <p>DRINK ME</p>
        <img>
    </a>
    </section>
    </div>
    `
    
}
export default main