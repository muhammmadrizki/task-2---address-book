let contacts = [
  {
    id: 1,
    name: "Muhammad Rizki",
    email: "muhammadrizki05@gmail.com",
    phone: "+6212345678",
    address: "Palembang",
    isAlive: true,
  },
  {
    id: 2,
    name: "Monica",
    email: "monica@example.com",
    phone: "+6212345678",
    address: "Padang",
    isAlive: true,
  },
  {
    id: 3,
    name: "Shafa",
    email: "shafana@example.co.id",
    phone: "+6253536737",
    address: "Aceh",
    isAlive: false,
  },
];

// READ
function displayContacts() {
  contacts.forEach((contact) => {
    console.log(`
    id: ${contact.id}
    name: ${contact.name}
    email: ${contact.email}
    phone: ${contact.phone}
    address: ${contact.address}
    isAlive: ${contact.isAlive}
    `);
  });
}

// CREATE
function createContact(newContact) {
  const nextId = contacts[contacts.length - 1].id + 1;

  const contactToAdd = {
    ...newContact,
    id: nextId,
  };

  contacts.push(contactToAdd);

  return contactToAdd;
}

// UPDATE
function updateContact(id, updateData) {
  const contactIndex = contacts.findIndex((contact) => contact.id === id);
  if (contactIndex !== -1) {
    contact[contactIndex] = {
      ...contacts[contactIndex],
      ...updateData,
    };
    console.log(`Contact with id ${id} update success`);
  } else {
    console.log(`Contact with id ${id} not found.`);
  }
}

// DELETE
function deleteContact(id) {
  contacts = contact.filter((contact) => contact.id !== id);
  console.log(`Contact with id ${id} delet success`);
}

// -----------------
// Start Application
// -----------------

// CREATE
createContact({
  name: "Budi",
  email: "budi@example.com",
  phone: "+6288888888",
  address: "Jakarta",
  isAlive: true,
});

createContact({
  name: "Mochammad",
  email: "mochammad@example.net",
  phone: "+629121445255",
  address: "Jogja",
  isAlive: false,
});

createContact({
  name: "Michael Phelps",
  email: "michael.phelps@example.net",
  phone: "+622564674",
  address: "Baltimore, Maryland, USA",
  isAlive: true,
});

// READ
displayContacts();

// UPDATE
// updateContact();

// DELETE
// deleteContact();
