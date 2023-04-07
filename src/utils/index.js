export function front_login(token, url = '/mytodolist') {
    localStorage.setItem('token', token)
    window.location.replace(url)
}