import { BACKEND_ADDRESS } from "@common/baseUrls";
import fetchWrapper from "./fetchWrapper";

const postApplication = async(form) => {

    const formData = new FormData();
    // for (let key in form) {
    //     formData.append(key, form[key]);
    // }
    formData.append('name', form['client']);
    formData.append('company', form['title']);
    formData.append('description', form['descr']);
    formData.append('directionID', form['direction']['id']);
    formData.append('projectFile', form['file'])

    formData.forEach(function(value, key) {
        console.log("FORM DATA:", key, value);
    })


    const url = `${BACKEND_ADDRESS}/directions`;
    const option = {
        method: 'POST',
        redirect: "follow",
        body: formData,
    }
    try {
        const { data, success, error } = await fetchWrapper(url, option, 'postApplication');
        return {data, success, error};
    } catch(error) {
        console.error("Error in postApplication: ", error);
    }
}

export default postApplication