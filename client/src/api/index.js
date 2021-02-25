import axios from 'axios'

const API_URL = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(API_URL)
export const createPost = (newPost) => axios.post(API_URL, newPost)
export const likePost = (id) => axios.patch(`${API_URL}/${id}/likePost`)
export const updatePost = (id, updatedPost) =>
  axios.patch(`${API_URL}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${API_URL}/${id}`)
