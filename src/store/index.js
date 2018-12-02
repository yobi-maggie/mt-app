import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    position: {},
    user: '董美琪',
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
    }
};
const actions = {
    setPosition({commit}, position) {
        commit('setPosition', position);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
})