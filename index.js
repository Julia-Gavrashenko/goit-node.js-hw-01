const {program} = require("commander")

const contacts = require("./contacts")

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case "get":
            const oneContact = await contacts.getContactById(id);
            return console.log(oneContact)
        case "add":
            const addedContact = await contacts.addContact({ name, email, phone });
            return console.log(addedContact);
        case "remove":
            const removedContact = await contacts.removeContact(id)
            return console.log(removedContact)
        case "update":
            const updatedContact = await contacts.updateById(id, { name, email, phone });
            return console.log(updatedContact)
         default:
      console.warn("\x1B[31m Unknown action type!");
    }
    
}

program
.option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");
  
program.parse();
const options = program.opts();
invokeAction(options)

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "C9sjBfCo4UJCWjzBnOtxl" });
// invokeAction({ action: "add", name: "Maria Angelina", email: "maria.ang@Nulla.com", phone: "(124) 840-6585" });
// invokeAction({ action: "update", id: "mxiG9ohyG7foVqY4gSGgw", name: "Tanya Maria", email: "maria.ang@Nulla.com", phone: "(124) 840-6585" });
// invokeAction({ action: "remove", id: "n8UixO4O5LRS99_0RfCVM"  });

