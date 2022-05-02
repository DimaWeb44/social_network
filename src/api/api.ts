import axios from "axios"

const instanse = axios.create(
    {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {"API-KEY": "2fa45825-ea06-4b71-875f-14dc8e6a7f95"}
    }
)

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postFollow(id: string) {
        return instanse.post(`follow/${id}`)
            .then(response => response.data)
    },
    deleteFollow(id: string) {
        return instanse.delete(`follow/${id}`, {})
            .then(response => response.data)
    }
}


export const authAPI = {
    getMe() {
        return instanse.get(`auth/me`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getUserId(userId: any) {
        return instanse.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getUserStatus(userId: any) {
        return instanse.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateUserStatus(status: any) {
        return instanse.put(`profile/status`, {status})
            .then(response => response.data)
    }
}