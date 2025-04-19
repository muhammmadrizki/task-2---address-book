const contacts = [
  {
    id: 1,
    name: "Muhammad Rizki",
    email: "muhammadrizki05@gmail.com",
    phone: "+6212345678",
    isALive: true,
  },

  {
    id: 2,
    name: "Monica",
    email: "monica@example.com",
    phone: "+6212345678",
    isALive: true,
  },

  {
    id: 3,
    name: "Shafa",
    email: "shafana@example.co.id",
    phone: "+6253536737",
    isAlive: false,
  },
];

// for (let index = 0; index < contacts.length; index++) {
//   const contact = contacts[index];
//   console.log(`
//     id : ${contact.id}
//     name :${contact.name}
//     email : ${contact.email}
//     phone :${contact.phone}
//     isAlive : ${contact.isAlive}

//     `);
// }

// CREATE
function createContact(newContact) {
  contacts.push(newContact);
  console.log("Contact Success");
}

// READ
function read() {
  contacts.forEach((contact) => {
    console.log(`
    id: ${contact.id}
    name: ${contact.name}
    email: ${contact.email}
    phone: ${contact.phone}
    isAlive: ${contact.isAlive}
    `);
  });
}

// UPDATE
function update(id, updateData) {
  const contactIndex = contacts.findIndex((contact) => contact.id === id);
  if (contactIndex !== -1) {
    contact[contactIndex] = { ...contacts[contactIndex], ...updateData };
    console.log(`Contact with id ${id} updat success`);
  } else {
    console.log(`Contact with id ${id} not found.`);
  }
}

// DELETE
function deleteContact(id) {
  contacts = contact.filter((contact) => contact.id !== id);
  console.log(`Contact with id ${id} delet success`);
}

// Contoh pemakaian:
// CREATE
createContact({
  id: 4,
  name: "Budi",
  email: "budi@example.com",
  phone: "+6288888888",
  isAlive: true,
}),
  createContact({
    id: 5,
    name: "Mochammad",
    email: "mochammad@example.net",
    phone: "+629121445255",
    isALive: false,
  });

createContact({
  id: 6,
  name: "Michael Phelps",
  email: "michael.phelps@example.net",
  phone: "+622564674",
  isAlive: true,
});

// READ
readContact();

// UPDATE
updateContact();

// DELETE
deleteContact();
