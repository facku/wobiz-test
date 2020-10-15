export async function login (context, userData) {
  context.commit('setUser', {
    id: userData.user_id,
    sessionExpires: userData.expires,
    token: userData.token,
    user: userData.username
  })
}

export function logout (context) {
  context.commit('unsetUser')
}
