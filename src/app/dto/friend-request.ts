import {User} from '../user';

export class FriendRequest {
  constructor(public id: number, public sender: User, public receiver: string, private statis: string) {
  }
}
