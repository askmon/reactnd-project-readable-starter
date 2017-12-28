const apiUrl = process.env.API_URL ? process.env.API_URL : 'http://localhost:3001'

const token = localStorage.token ? localStorage.token : Math.random().toString(36).substring(5)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export async function getPostsByCategory(category) {
  const result = await fetch(`${apiUrl}/${category}/posts/`, { headers })
  return await result.json()
}

export async function getAllCategories() {
  const result = await fetch(`${apiUrl}/categories`, { headers })
  return await result.json()
}

export async function getAllPosts() {
  const result = await fetch(`${apiUrl}/posts`, { headers })
  return await result.json()
}

export async function getPost(postId) {
  const result = await fetch(`${apiUrl}/posts/${postId}`, { headers })
  return await result.json()
}

export async function addPost(post) {
  const result = await fetch(`${apiUrl}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: post
  })
  return await result.json()
}

export async function vote(postId, vote) {
  const result = await fetch(`${apiUrl}/posts/${postId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: { option: vote }
  })
  return await result.json()
}

export async function updatePost(post) {
  const result = await fetch(`${apiUrl}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: { title: post.title, body: post.body }
  })
  return await result.json()
}

export async function deletePost(postId) {
  const result = await fetch(`${apiUrl}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return await result.json()
}

export async function getCommentsByPost(postId) {
  const result = await fetch(`${apiUrl}/posts/${postId}/comments`, { headers })
  return await result.json()
}

export async function addComment(comment) {
  const result = await fetch(`${apiUrl}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: comment
  })
  return await result.json()
}

export async function voteComment(commentId, vote) {
  const result = await fetch(`${apiUrl}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: { option: vote }
  })
  return await result.json()
}

export async function updateComment(commentId, timestamp, body) {
  const result = await fetch(`${apiUrl}/comments/${commentId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: { timestamp, body }
  })
  return await result.json()
}

export async function deleteComment(commentId) {
  const result = await fetch(`${apiUrl}/comments/${commentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return await result.json()
}