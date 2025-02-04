import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const getJobDetailsById = async (jobId) => {
    try {
        // debugger;
        const reqUrl = `${backendUrl}/job/details/${jobId}`;
        const response = await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        // toast something went wrong please try after sometime
    }
};

export const createJobPost = async (jobPostPayload) => {
    try {
        const reqUrl = `${backendUrl}/job/create`;
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.post(reqUrl, jobPostPayload);
        debugger;
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateJobPostById = async (jobPostId, updatedFormData) => {
    try {
        const reqUrl = `${backendUrl}/job/edit/${jobPostId}`;
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.put(reqUrl, updatedFormData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllJobPost = async (filter) => {
    try {
        const reqUrl = `${backendUrl}/job/all-jobs?title=${filter?.title}&skills=${filter?.skills}`;
        const response = await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};