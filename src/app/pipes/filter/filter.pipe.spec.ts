import { User } from 'src/app/classes/user';
import { IUser } from 'src/app/models/user';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {

  const pipe = new FilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms ["a", "b", "aa", "ba"] to ["a", "aa"]', () => {
    // Creating new users
    const user1 = new User();
    const user2 = new User();
    const user3 = new User();
    const user4 = new User();

    // Creating user details for testing
    user1.name.first = 'something';
    user1.name.last = 'a';

    user2.name.first = 'something';
    user2.name.last = 'b';

    user3.name.first = 'something';
    user3.name.last = 'aa';

    user4.name.first = 'something';
    user4.name.last = 'ba';

    const users = [];
    // Pushing user details to a list of users
    users.push(user1)
    users.push(user2)
    users.push(user3)
    users.push(user4)

    expect(pipe.transform(users, 'a')).toEqual([user1, user3])
  })
});
