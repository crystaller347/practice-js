//2. Напиши класс Client який створює об'єкт
//із властивостями login, email
//Об'яви приватні властивості #login і #email,
//доступ до яких зроби через геттер и сеттер:
// get getClientData() має повертати об'єкт з переліченими властивостями
// set changeEmail(newEmail) перезаписує пошту користувача


class Client {
    #login;
    #email;

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get getClientData() {
        return {
            clientEmail: this.#email,
            clientLogin: this.#login,
        }

    }

    set changeEmail(newEmail) {
        this.#email = newEmail;
    }
}

const newClient = new Client("client", "dfghj@dfgh");
newClient.changeEmail = "ertyu@df";
console.log(newClient.getClientData)