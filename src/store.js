import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);


    const state = {
        comrreo:''
    }

    const mutations = {
        guardar(state, data){
            state.comrreo = data;
        }

    }

    const actions= {}
    const getters={}
    


export default new Vuex.Store({state, mutations, actions, getters});
