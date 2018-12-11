import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    position: {
        name: '哈尔滨市'
    },
    user: {
        name: '董美琪',
    },
    goodKey: '',
    hotPlace: [{
        "id": 1,
        "name": "北京",
        "pinyin": "beijing",
        "acronym": "bj",
        "rank": "S",
        "firstChar": "b"
    },
    {
        "id": 10,
        "name": "上海",
        "pinyin": "shanghai",
        "acronym": "sh",
        "rank": "S",
        "firstChar": "s"
    },{
        "id": 20,
        "name": "广州",
        "pinyin": "guangzhou",
        "acronym": "gz",
        "rank": "S",
        "firstChar": "g"
    }],
    menu: [],
};

const mutations = {
    setMenu(state, val) {
        state.menu = val
    },
    setHotPlace(state, val) {
        state.hotPlace = val
    },
    setUser(state, val) {
        state.user = val;
    },
    setPosition(state, val) {
        state.position = val
    },
    setSearchGood(state, val) {
        state.goodKey = val;
    }
};
const actions = {
    setPosition({commit}, position) {
        commit('setPosition', position);
    },
    setSearchGood({commit}, good) {
        commit('setSearchGood', good);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
})