//2. Напиши класс Client який створює об'єкт
//із властивостями login, email
//Об'яви приватні властивості #login і #email,
//доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача


// class Client {
//     #login;
//     #email;

//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get getClientData() {
//         return {
//             clientEmail: this.#email,
//             clientLogin: this.#login,
//         }

//     }

//     set changeEmail(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const newClient = new Client("client", "dfghj@dfgh");
// newClient.changeEmail = "ertyu@df";
// console.log(newClient.getClientData)


//3. Напиши класс Notes який управляє коллекцієй нотаток у
//властивості items.
//Нотатка це  об'єкт з властивостями text, priority
//Додай класу статичну властивість Priority,
//в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
//Додай методи addNote(note), removeNote(noteText)
//updatePriority(noteText, newPriority)

class Notes {
  static Priority = {
    HIGHT: "hight",
    MIDDLE: "middle",
    LOW: "low",
  };
  constructor() {
    this.items = [];
  }
  addNote(note) {
    this.items.push(note);
  }
  removeNote(noteText) {
    this.items = this.items.filter((item) => item.text !== noteText);
  }
  updatePriority(noteText, newPriority) {
    const note = this.items.find((item) => item.text === noteText);
    if (note) {
      note.priority = newPriority;
    }
  }
}
const notes = new Notes();
notes.addNote({ text: "learn js", priority: Notes.Priority.MIDDLE });
notes.addNote({ text: "difficult learn js", priority: Notes.Priority.LOW });
notes.updatePriority("learn js", Notes.Priority.HIGHT);

console.log(notes);



