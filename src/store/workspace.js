import router from '~/routes'

export default {
  namespaced: true,
  state() {
    return {
      workspaces: [],
      currentWorkspace: {},
    }
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: {
    async createWorkspace({ dispatch }, payload = {}) {
      const { parentId } = payload
      const workspace = await fetch('https://kdt-frontend.programmers.co.kr/documents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-username': 'leeminhee119'
        },
        body: JSON.stringify({
          title: '',
          parent: parentId
        })
      }).then(res => res.json())
      await dispatch('readWorkspaces')
      router.push({
        name: 'Workspace', // 지정해뒀던 페이지 이름
        params: {
          id: workspace.id
        }
      })
    },
    async readWorkspaces({commit}) {
      const workspaces = await fetch('https://kdt-frontend.programmers.co.kr/documents', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-username': 'leeminhee119'
        }
      }).then(res => res.json())
      commit('assignState', {
        workspaces,
      })
    },
    async readWorkspace({commit}, payload) {
      const { id } = payload
      const workspace = await fetch(`https://kdt-frontend.programmers.co.kr/documents/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-username': 'leeminhee119'
        }
      }).then(res => res.json())
      commit('assignState', {
        currentWorkspace: workspace,
      })
    },
    async updateWorkspace({dispatch}, payload) {
      const { id, title, content } = payload
      await fetch(`https://kdt-frontend.programmers.co.kr/documents/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-username': 'leeminhee119'
        },
        body: JSON.stringify({
          title,
          content
        })
      }).then(res => res.json())
      dispatch('readWorkspaces')
    },
    async deleteWorkspace({dispatch}, payload) {
      const { id } = payload
      await fetch(`https://kdt-frontend.programmers.co.kr/documents/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-username': 'leeminhee119'
        }
      }).then(res => res.json())
      await dispatch('readWorkspaces')
    }
  }
}