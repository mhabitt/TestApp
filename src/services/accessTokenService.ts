import MyCookies from "./cookies";
import {generateUUID} from "./core";

const key = process.env.REACT_APP_TOKEN

const get = () => {
    return key && MyCookies.get(key)
}

const update = () => {
    key && MyCookies.update(key, generateUUID())
}

const remove = () => {
    key && MyCookies.remove(key)
}
export const AccessTokenService = {get, update, remove}
export default AccessTokenService;