export default class World {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    public sayHello(el: HTMLElement | null): void {
        if (el) {
            el.innerText = this.message;
        }
    }
}
