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
            console.log("Attempting to register with:", { image, name, email, password }); // Log the registration attempt

            const response = await axiosClient.post("/api/register", {
                image,
                name,
                email,
                password,
            });

            console.log("API Response after registration:", response); // Log the API response

            return response;
        } catch (error) {
            console.log("Error during registration:", error); // Log any errors during registration
            return { error: error.message }; // Return the error message
        }
    },
};

export default UserApi;
