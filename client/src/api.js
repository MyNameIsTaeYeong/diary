import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4002/",
});

export const authApi = {
  tempLogin: () => api.get("auth/templogin"),
  tempJoin: () => api.get("auth/join"),
  googleLogin: () => api.get("auth/google"),
};

export const userApi = {
  addRecord: (userId, recordName) =>
    api.post("user/addRecord", {
      userId,
      recordName,
    }),

  updateRecord: (userId, currentDate, recordId, recordIndex, recordValue) =>
    api.post("user/updateRecord", {
      userId,
      currentDate,
      recordId,
      recordIndex,
      recordValue,
    }),
};
