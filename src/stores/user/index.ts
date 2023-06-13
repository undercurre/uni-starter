import { defineStore } from 'pinia'
import type { RootState } from './types'

export const useUserStore = defineStore('user', {
  state: (): RootState => ({
    userInfo: {
        id: '',
        name: 'stores test'
    },
    token: '',
  }),
  getters: {
    // 示例返回大写字符
    capName(state) {
      return state.userInfo.name.toUpperCase()
    },
  },
  actions: {
    async setUserInfo() {
      // 这里可以发起请求
      console.log('发起getUserInfo请求')
    },
  },
})
