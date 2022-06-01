import profileReduser, { addPost } from './pReduser';

let initialState = {
  profileData: [
    { id: 1, message: "It's my first post, yoho ^-)" },
    { id: 2, message: 'Hello, my name is Adam' },
    { id: 3, message: 'I like cakes' },
    { id: 4, message: 'I want to tell you about Gagarin' },
    { id: 5, message: 'I love GUAP' },
  ],
};

it('new post should be added', () => {
  let action = addPost('NSPM');

  let newState = profileReduser(initialState, action);

  expect(newState.profileData.length).toBe(5);
});

it('text new post', () => {
  let action = addPost('NSPM');

  let newState = profileReduser(initialState, action);

  expect(newState.profileData[5].message).toBe('NSPM');
});
//1 - ИСходные данные
// do action
// ожидем результат ожидаемый
