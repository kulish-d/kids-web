export const isAuth = () => !!localStorage.getItem('kidsAppToken');
export const exit = () => localStorage.removeItem('kidsAppToken');