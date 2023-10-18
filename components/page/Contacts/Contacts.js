import styles from "./Contacts.module.scss"


const Contacts = (props) =>{
    const dataContacts = {mail: "coffe@mail.ru", phone: "89999000001"};
return `
<div class="${styles.container}">
    <section>
        <h2>mail: <a href="mailto: ${dataContacts.mail}">${dataContacts.mail}</a></h2>
        <h2>phone: <a href="phone: ${dataContacts.phone}">${dataContacts.phone}</a></h2>
        </section>
    </div>
    `
}
export default Contacts
