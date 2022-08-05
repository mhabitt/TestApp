import Cookies from "universal-cookie/lib";

const cookies = new Cookies();

export const setCookie = (name?: string, value?: string) => {
    const minutes = 60;
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export const getCookie = (name?: string): string => {
    const pattern = RegExp(name + "=.[^;]*");
    const matched = document.cookie.match(pattern)
    if(matched){
        let cookie = matched[0].split('=')
        return cookie[1]
    }
    return "";
}
const get = (key: string): string => {
    return getCookie(key);
}
const update = (key: string, value: string) => {
    setCookie(key, value);
}
const remove = (key: string) => {
    cookies.remove(key, {path: '/'});
}
export const MyCookies = {get, update, remove};
export default MyCookies;