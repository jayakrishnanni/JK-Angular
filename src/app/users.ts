export class Users {
    userId: string | undefined;
    id: string| undefined;
    title: string| undefined;
    body: string| undefined;
    
 // to compile this json-server --watch users.json
    constructor(userId: string | undefined, id: string | undefined, title: string | undefined, body: string | undefined) {
      this.userId = userId;
      this.id = id;
      this.title = title;
      this.body = body; 
    }

}
