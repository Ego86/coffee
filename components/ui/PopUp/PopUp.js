import styles from "./PopUp.module.scss"
const PopUp = (props) =>{

    return `
    <div class="${styles.PopUpContainer}">
    <section>
    <h3>
    the payment should have been highlighted, 
    but no one bought this site from me :-)
    </h3>
    </section>
    </div>
    `
}
export default PopUp