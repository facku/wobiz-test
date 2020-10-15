import axios from 'axios'

export async function login (context, userData) {
  try {
    const resp = await axios.post('//admin.localwobiz.com/login', userData)
    console.log(resp)
  } catch (error) {
    alert(error)
  }
  // context.commit('setUser', {
  //   id: 666,
  //   sessionExpires: 51215151,
  //   token: 'sndu3jdudjw9dk239dwidj29d29dj29dj29dj29dj2',
  //   user: userData.username
  // })
}

export function logout (context) {
  context.commit('unsetUser')
}
