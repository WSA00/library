import api from "@/api/api"

export default {
    namespaced: true,
    state() {
        return {
            // 图书相关配置
            source: new Array(),
            bookTotal: 0,
            book: null,
            // 图表相关配置
            chartSource: null,
            // 分页相关配置
            page: 1,
            pageSize: 12,
            // 状态相关配置
            dataReady: false,
            drawer: false,
            dialogFormVisible: false,
        }
    },
    getters: {
        getSource: state => state.source,
        getChartSource: state => state.chartSource,
        getBookTotal: state => state.bookTotal,
        getBook: state => state.book,
        getPage: state => state.page,
        getPageSize: state => state.pageSize,
        getDataReady: state => state.dataReady,
        getDrawer: state => state.drawer,
        getDialogFormVisible: state => state.dialogFormVisible,
    },
    mutations: {
        setSource: (state, payload) => { state.source = payload },
        setChartSource: (state, payload) => { state.chartSource = payload },
        setBookTotal: (state, payload) => { state.bookTotal = payload },
        setBook: (state, payload) => { state.book = payload },
        setPage: (state, payload) => { state.page = payload },
        setPageSize: (state, payload) => { state.pageSize = payload },
        setDataReady: (state, payload) => { state.dataReady = payload },
        setDrawer: (state, payload) => { state.drawer = payload },
        setDialogFormVisible: (state, payload) => { state.dialogFormVisible = payload },
    },
    actions: {
        // 请求接口 - 分页获取所有图书信息
        async fetchSource({ state, commit }) {   
            const response = await api.get(`/api/book?page=${state.page}&pageSize=${state.pageSize}`,{ token: localStorage.getItem("token") })
            commit("setBookTotal", response.bookTotal)
            return response
        },
        //请求接口 - 分页获取特定类型图书信息
        async fetchSource1({ state, commit },payload) {   
            const response = await api.get(`/api/book/type?page=${state.page}&pageSize=${state.pageSize}&tid=${payload.tid}`,{ token: localStorage.getItem("token") })
            commit("setBookTotal", response.bookTotal)
            return response
        },
        //请求接口 - 分页获取特定搜索图书信息
        async fetchSource2({ state, commit },payload) {   
            const decodedSearchString = decodeURIComponent(payload.string);
            const response = await api.get(`/api/book/search?page=${state.page}&pageSize=${state.pageSize}&q=${decodedSearchString}`,{ token: localStorage.getItem("token") })
            commit("setBookTotal", response.bookTotal)
            return response
        },
        // 请求接口 - 获取指定图书信息
        async fetchBook(context, payload) {
            return await api.get(`/api/book/${payload}`, { token: localStorage.getItem("token") })
        },
        // 请求接口 - 创建图书
        async createBook(context, payload) {
            await api.post(`/api/book`, payload, { token: localStorage.getItem("token") })
        },
        // 请求接口 - 删除图书
        async deleteBook(context, payload) {
            await api.delete(`/api/book/${payload}`, { token: localStorage.getItem("token") })
        },
        // 请求接口 - 获取所有图书类型
        async fetchTypes() {
            return await api.get(`/api/type`, { token: localStorage.getItem("token") })
        }
    }
}