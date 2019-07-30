export class MessageProvider {
  private message: string;

  constructor(name: string) {
    this.message = `hello ${name} from ./src/Message.ts`;
  }

  get = () => {
    return this.message;
  };
}
