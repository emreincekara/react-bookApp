export default class Book{
    createdAt;
    name;
    author;
    price;
    image;
    id;

    constructor(item){
        this.createdAt = item.createdAt;
        this.name = item.name;
        this.author = item.author;
        this.price = item.price;
        this.image = item.image;
        this.id = item.id;
    }
}