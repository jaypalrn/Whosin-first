import { post_request } from "./request";

const RequestLogin = async ({ body, navigation }) => {
    const data = await post_request({ target: "/scan/login", body: body, navigation: navigation });
    return data;
}

export { RequestLogin }