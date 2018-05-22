import authReducer from '../../reducers/auth';

test('should setup default filter values', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const uid = '123';
  const state = authReducer(undefined, { type: 'LOGIN', uid });
  expect(state.uid).toBe(uid);
});

test('should clear uid for logout', () => {
  const uid = '123';
  const state = authReducer({ uid }, { type: 'LOGOUT'});
  expect(state.uid).toBeFalsy();
});