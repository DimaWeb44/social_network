import axios from "axios"

const instanse = axios.create(
    {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {"API-KEY": "90f0b6b5-932c-41f8-a388-0b889834afb5"}
    }
)

export const usersAPI = {
    getUsers(currentPage: any, pageSize: any) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const followAPI = {
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
    getUserId(UserId:any) {
        return instanse.get(`profile/${UserId}`)
            .then(response => response.data)
    }
}