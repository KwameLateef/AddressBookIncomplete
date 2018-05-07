"use strict";
{
// This is the beginning of the Address Book
    class AddressBook {
        constructor() {
            this.contact = [];
        }
//  Addinfo secton
        add() {
            let newContact = new Contact(name.value,);
            this.contact.push(newContact);
        }
        display() {
        // This is the section we are going to Target
            let contactSection = document.getElementById("contactSection");

// Set up varibles for adding Elements
            let div = documetn.createElement("div");
            let info = document.createElement("p");
            let icon = document.createElement("i");

// Adding CSS classes to create Elements
            div.classList.add("contactCard");
            icon.classList.add("material-icons");
            icon.classList.add("delete");

// Addin text
            icon.innerText = "delete";
            info.innerText = `Name: ${name.value}
        Email; ${email.value}
        Phone: ${phone.value}
        Relation: ${relation.value}`;

// Appending info to div, and div to contact section
        div.appendChild(info);
        div.appendChild(icon);
        contactList.appendChild(div);

        icon.addEventListener("click", () => {
            div.remove();
         })
    }
        deleteAt() {
        }
    }
// This allows us to add parts in
    class Contact {
        constructor(name, phone, email, relation) {
            this.name = name;
            this.phone = phone;
            this.email = email;
            this.relation = relation;
        }
    }

    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let number = documnet.querySelector("#phone");
    let text = document.querySelector("#relation");
    let button = document.querySelector("#btn");

    let newAddressBook = new AddressBook;


    button.addEventListener("click", () => {
        newAddressBook.add();
        newAddressBook.display();
        name.value = "";
        email.value = "";
        number.value = "";
        text.value = "";
    })
}
