import { post_request } from "./request";

const RequestLogin = async ({ body, navigation }) => {
    const data = await post_request({ target: "/scan/login", body: body, navigation: navigation });
    return data;
}

const RequestActivityList = async ({ body, navigation }) => {
    const data = await post_request({ target: "/scan/activity/list", body: body, navigation: navigation });
    return data;
}
const RequestActivityOrders = async ({ body, navigation }) => {
    const data = await post_request({ target: "/scan/activity/orders", body: body, navigation: navigation });
    return data;
}
const RequestDealList = async ({ body, navigation }) => {
    const data = await post_request({ target: "/scan/deal/list", body: body, navigation: navigation });
    return data;
}
const RequestDealsOrders = async ({ body, navigation }) => {
    const data = await post_request({ target: "/scan/deal/orders", body: body, navigation: navigation });
    return data;
}
const RequestScanReedem = async ({ body, navigation }) => {
    const data = await post_request({ target: "/scan/redeem", body: body, navigation: navigation });
    return data;
}

export { RequestLogin, RequestActivityList, RequestActivityOrders, RequestScanReedem, RequestDealList, RequestDealsOrders }