import { driver } from "./user";

const displayUser = () => {
    const markup = `
    <div>
        <h2>
            ${driver.firstName} ${driver.lastName}
        </h2>
        <p>${driver.city}</p> 
    </div>
 `;
    console.log(markup);
    document.body.innerHTML = markup;
};
displayUser();
