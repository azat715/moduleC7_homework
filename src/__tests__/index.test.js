import {createUser} from '../index.js';

test('создание пользователя', () => {
  const user = {firstName: 'testName', lastName: 'testLastName'};
  const testUser = createUser(user.firstName, user.lastName);
  expect(user).toEqual(testUser);
});
