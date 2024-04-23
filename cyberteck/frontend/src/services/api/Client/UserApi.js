import { axiosClient } from "../../../api/axios";

const UserApi = {
    getCsrfToken: async () => {
        return await axiosClient.get("/sanctum/csrf-cookie");
    },
    login: async (email, password) => {
        return await axiosClient.post("/api/login", { email, password });
    },
    logout: async () => {
        return await axiosClient.post("/api/logout");
    },
    register: async (image, name, email, password) => {
        try {
            console.log("Attempting to register with:", { image, name, email, password });

            const response = await axiosClient.post("/api/register", {
                image,
                name,
                email,
                password,
            }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("API Response after registration:", response); 

            return response;
        } catch (error) {
            console.log("Error during registration:", error); 
            return { error: error.message }; 
        }
    },
};

export default UserApi;
