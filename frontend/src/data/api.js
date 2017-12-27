const apiUrl = process.env.API_URL ? process.env.API_URL : 'http://localhost:3001'

export async function getPostsByCategory(category) {
  return await fetch(`${apiUrl}/${category}/posts/`).json()
}

export async function getAllCategories() {
  return await fetch(`${apiUrl}/categories`).json()
}

export function getAllPosts() {
  return await fetch(`${apiUrl}/posts`).json()
}

export async function getPost(postId) {
  return await fetch(`${apiUrl}/posts/${postId}`).json()
}

export async function addPost(post) {
  return await fetch(`${apiUrl}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: post
  }).json()
}

export async function vote(postId, vote) {
  return await fetch(`${apiUrl}/posts/${postId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: { option: vote }
  }).json()
}

export async function updatePost(post) {
  return await fetch(`${apiUrl}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: { title: post.title, body: post.body }
  }).json()
}

export async function deletePost(postId) {
  return await fetch(`${apiUrl}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).json()
}

export async function getCommentsByPost(postId) {
  return await fetch(`${apiUrl}/posts/${postId}/comments`).json()
}

export async function addComment(comment) {
  return await fetch(`${apiUrl}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: comment
  }).json()
}

export async function voteComment(commentId, vote) {
  return await fetch(`${apiUrl}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: { option: vote }
  }).json()
}

export async function updateComment(commentId, timestamp, body) {
  return await fetch(`${apiUrl}/comments/${commentId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: { timestamp, body }
  }).json()
}

export async function deleteComment(commentId) {
  return await fetch(`${apiUrl}/comments/${commentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).json()
}
