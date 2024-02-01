import axios from "axios";
import { baseURL } from "./instance";
import { store } from "../redux/store";

const post_request = async ({ target, body, navigation }) => {

    const token = store.getState().userSession.tokenData
    const instance = axios.create({
        baseURL: baseURL,
        headers: {
            'Content-Type': 'application/json',
        }
    });
    try {
        const response = await instance.post(target, body);
        return response;
    } catch (err) {
        return err.response
    }

}

const get_request = async ({ target, body, navigation }) => {

    const token = store.getState().userSession.tokenData
    const instance = axios.create({
        baseURL: baseURL, headers: {
            Authorization: "Bearer " + token,
        }
    });
    const response = await instance.get(target, body).catch((e) => { return e.response })
    if (response === null) {
        return "Something went wrong. Please try again."
    }
    return response
}

export { post_request, get_request }