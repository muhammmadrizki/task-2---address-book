const contacts = [
  {
    id: 1,
    name: "Muhammad Rizki",
    email: "muhammadrizki05@gmail.com",
    phone: "+6212345678",
    isLive: true,
  },

  {
    id: 2,
    name: "Monica",
    email: "monica@example.com",
    phone: "+6212345678",
    isLive: true,
  },

  {
    id: 3,
    name: "Shafa",
    email: "shafana@example.co.id",
    phone: "+6253536737",
    isActive: false,
  },
];

for (let index = 0; index < contacts.length; index++) {
  const contact = contacts[index];
  console.log(`
    id : ${contact.id}
    name :${contact.name}
    email : ${contact.email},
    phone :${contact.phone}
    isActive : ${contact.isActive}
    
    `);
}
