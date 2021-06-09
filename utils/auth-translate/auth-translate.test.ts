import { authTranslate } from './index';

const emailAlreadyInUse = 'The email address is already in use by another account.';
const inValidPassword = 'The password is invalid or the user does not have a password.';
const accountWriteBlocked = 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.';
const defaultResponse = 'adasdasdasdadsdasdasdgfdjgdfjgdfgd';

describe('authTranslate function', () => {

  it('this email is already in use', () => {
    expect(authTranslate(emailAlreadyInUse)).toEqual('Адрес электронной почты уже используется другой учетной записью.');
  });

  it('wrong password', () => {
    expect(authTranslate(inValidPassword)).toEqual('Не верный пароль.');
  });

  it('wrong password', () => {
    expect(authTranslate(accountWriteBlocked)).toEqual("Доступ к этой учетной записи был временно отключен из-за множества неудачных попыток входа в систему. Повторите попытку позже.");
  });

  it('default response', () => {
    expect(authTranslate(defaultResponse)).toEqual('adasdasdasdadsdasdasdgfdjgdfjgdfgd');
  })

});