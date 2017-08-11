export class Post {
  public date;

  constructor(
    public author: string,
    public text: string,
  ) {
    this.date = new Date().getTime();
  }
}
