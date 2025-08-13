import { createStore } from 'vuex'

const persisted = JSON.parse(localStorage.getItem('clientes') || '[]')

export default createStore({
  state() {
    return {
      clientes: persisted
    }
  },
  getters: {
    all: (s) => s.clientes,
    byId: (s) => (id) => s.clientes.find(c => c.id === id)
  },
  mutations: {
    setClientes(state, clientes) {
      state.clientes = clientes
      localStorage.setItem('clientes', JSON.stringify(state.clientes))
    },
    addCliente(state, cliente) {
      state.clientes.push(cliente)
      localStorage.setItem('clientes', JSON.stringify(state.clientes))
    },
    updateCliente(state, cliente) {
      const idx = state.clientes.findIndex(c => c.id === cliente.id)
      if (idx !== -1) state.clientes.splice(idx, 1, cliente)
      localStorage.setItem('clientes', JSON.stringify(state.clientes))
    },
    removeCliente(state, id) {
      state.clientes = state.clientes.filter(c => c.id !== id)
      localStorage.setItem('clientes', JSON.stringify(state.clientes))
    }
  },
  actions: {
    crear({ commit, state }, payload) {
      const id = state.clientes.length ? Math.max(...state.clientes.map(c => c.id)) + 1 : 1
      const cliente = { id, ...payload }
      commit('addCliente', cliente)
      return cliente
    },
    editar({ commit }, payload) {
      commit('updateCliente', payload)
      return payload
    },
    eliminar({ commit }, id) {
      commit('removeCliente', id)
    }
  }
})
