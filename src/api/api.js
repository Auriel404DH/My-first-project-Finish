import * as axios from 'axios';

const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '4fa2671d-808c-48e7-b74b-b358db88fb27',
  },
});

export const usersAPI = {
  getUsers(currentPageS = 1, pageSize = 10) {
    return instanse
      .get(`users?page=${currentPageS}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userID) {
    return instanse.post(`follow/${userID}`);
  },
  unfollow(userID) {
    return instanse.delete(`follow/${userID}`);
  },
};
export const profileAPI = {
  getProfile(IdUser = 1) {
    return instanse.get(`profile/` + IdUser);
  },
  getStatus(IdUser) {
    return instanse.get(`profile/status/` + IdUser);
  },
  updateStatus(status) {
    return instanse.put(`profile/status`, { status: status });
  },
  updatePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);

    return instanse.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  updateData(data) {
    return instanse.put(`profile`, data);
  },
};
export const HeaderAPI = {
  getHeaderRoom() {
    return instanse.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instanse.post(`auth/login`, { email, password, rememberMe, captcha });
  },
  logout() {
    return instanse.delete(`auth/login`);
  },
};

export const GuardAPI = {
  getCaptcha() {
    return instanse.get(`security/get-captcha-url`);
  },
};
export const dialogAPI = {};
