import Vuex from 'vuex';
import { Artical } from "@/database/Artical.js";

// store/index.js

export default new Vuex.Store({
    state: {
        categoryArticles: [],
        selectedArticle: null,
        slug: [],
    },
    mutations: {
        setCategoryArticles(state, articles) {
            state.categoryArticles = articles;
        },
        setSelectedArticle(state, selectedArticle) {
            state.selectedArticle = selectedArticle;
        }

    },
    actions: {
        fetchArticles({ commit }) {
            const articles = Artical; // Your data
            commit('setCategoryArticles', articles);

        },

        setSelectedArticle({ commit }, { selectedArticle }) {
            commit('setSelectedArticle', selectedArticle);
        }
    },
    getters: {
        categoryArticles: (state) => state.categoryArticles,
        selectedArticle: (state) => state.selectedArticle
    },
});
