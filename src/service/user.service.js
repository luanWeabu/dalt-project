import { daltAxios as axios } from "@/service/axios";

class UserService {
  async queryListUser() {
    const response = await axios.get("/users.json");
    return response.data.users;
  }
  async getUserDetail(id) {
    const response = await axios.get("/users.json");
    return response.data.users.find((item) => {
      return item.id === id;
    });
  }
}

export default new UserService();
