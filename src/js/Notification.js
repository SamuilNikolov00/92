import classNames from "classnames";
import Card from "./Card.js";
import {formatCurrency} from "./utils"
export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor(type,price) {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
    this.type= type;
    this.price = price;
  }

  empty(){
    this.container.innerHTML="";
  }
 render(type,price) {
    const template = `
<div  class="notification type-${this.type} ${classNames({
  "is-danger": this.type === Card.types.HAWAIIAN,
})}">
  <button  class="delete"></button>
  🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(price)}</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
  }
}
