// Получаем ошибку на английсвом
// и в зависимости от теста отдаёт русский текст
export function authTranslate(error: string) {
  switch (error) {
    case "The email address is already in use by another account.": {
      return 'Адрес электронной почты уже используется другой учетной записью.'
    }

    case "The password is invalid or the user does not have a password.": {
      return 'Не верный пароль.'
    }

    case "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.": {
      return "Доступ к этой учетной записи был временно отключен из-за множества неудачных попыток входа в систему. Повторите попытку позже."
    }

    default: { return error; }
  }
}
