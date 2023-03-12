import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/user",
});
export interface ApiResponse {
  ok: boolean;
  data?: any;
  message: string;
}
interface CreateUserType {
  user: string;
  password: string;
  name: string;
  confirmPassword: string;
}
export const createUser = async (
  user: CreateUserType
): Promise<ApiResponse> => {
  try {
    const result = await api.post("/createaccount", user);
    return result.data;
  } catch (error: any) {
    console.log("teste1");

    if (error.request?.response) {
      const result = error.request.response;

      return JSON.parse(result);
    }
    return {
      ok: false,
      message: error.toString(),
    };
  }
};
export interface LoginUserType {
  user: string;
  password: string;
}
export const loginUser = async (user: LoginUserType): Promise<ApiResponse> => {
  try {
    const result = await api.post("/login", user);
    return result.data;
  } catch (error: any) {
    if (error.request?.response) {
      const result = error.request?.response;
      return JSON.parse(result);
    }
    return {
      ok: false,
      message: error.toString(),
    };
  }
};
export const listErrands = async (userId: string): Promise<ApiResponse> => {
  try {
    const result = await api.get(`/user/${userId}errands`);
    return result.data;
  } catch (error: any) {
    if (error.request.response) {
      const result = error.request.response;
      return JSON.parse(result);
    }
    return {
      ok: false,
      message: error.toString(),
    };
  }
};

export const deleteErrands = async (
  id: string,
  userId: string
): Promise<ApiResponse> => {
  try {
    const result = await api.delete(`/errands/${userId}/note/${id}`);
    console.log(result);

    return result.data;
  } catch (error: any) {
    console.log(error);
    if (error.request?.response) {
      return JSON.parse(error.request?.response);
    }

    return {
      ok: false,
      message: error.toString(),
    };
  }
};
