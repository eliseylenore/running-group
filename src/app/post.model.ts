export class Post {
  public date: Date = new Date();

  constructor(
    public author: string,
    public text: string,
  ) {}
}
