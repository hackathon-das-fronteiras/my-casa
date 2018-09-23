export const LogoutAction = () => {
    localStorage.removeItem('jwt')
}

export const currentUser = () => {
  const token = localStorage.getItem('jwt');
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  const userId = JSON.parse(window.atob(base64));
  return userId.sub;
}

export const getToken = () => {
  return localStorage.getItem('jwt');
}

export const loggedIn = () => {
  if (getToken() === null) {
    return false
  } else {
    return true
  }
}