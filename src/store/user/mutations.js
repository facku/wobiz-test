export function setUser (state, userData) {
  for (const i in userData) {
    state[i] = userData[i]
  }
}

export function unsetUser (state) {
  const fields = {
    token: null,
    id: null,
    user: null,
    sessionExpires: null
  }

  for (const field in fields) {
    state[field] = null
  }
}
