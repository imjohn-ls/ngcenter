import {
  login,
  logout,
  getUserInfo
} from '@/api/user'
import { setToken, getToken } from '@/libs/util'


export default {
  state: {
	userName: '',
	userId: '',
	access: '',
	token: getToken(),
  },
  mutations: {
	
	setUserId (state, id) {
	  state.userId = id
	},
	setUserName (state, name) {
	  state.userName = name
	},
	setAccess (state, access) {
	  state.access = access
	},
	setToken (state, token) {
	  state.token = token
	  setToken(token)
	}
  },
  getters: {
	messageUnreadCount: state => state.messageUnreadList.length,
	messageReadedCount: state => state.messageReadedList.length,
	messageTrashCount: state => state.messageTrashList.length
  },
  actions: {
	// 退出登录
	handleLogOut ({ state, commit }) {
	  return new Promise((resolve, reject) => {
		logout(state.token).then(() => {
		  commit('setToken', '')
		  resolve()
		}).catch(err => {
		  reject(err)
		})
		// 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
		// commit('setToken', '')
		// commit('setAccess', [])
		// resolve()
	  })
	},
	// 获取用户相关信息
	getUserInfo ({ state, commit }) {
	  return new Promise((resolve, reject) => {
		try {
		  getUserInfo(state.token).then(res => {
			const data = res.data
			commit('setUserName', data.name)
			commit('setUserId', data.user_id)
			commit('setAccess', data.access)
			resolve(data)
		  }).catch(err => {
			reject(err)
		  })
		} catch (error) {
		  reject(error)
		}
	  })
	},
  }
}