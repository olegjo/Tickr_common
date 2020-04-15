export class User {
    static COLLECTION_NAME = "users";
    readonly id?: string;
    readonly data: any;

    constructor(data: any, id?: string) {
        this.data = data;
        this.id = id;
    }
}
