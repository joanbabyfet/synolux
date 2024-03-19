import { getNews } from '../api/index'

export default function() {
    const list = ref([])
    const total = ref(0) //总条数
    const currentPage = ref(1) //第几页
    const pageSize = ref(10) //每页显示几条

    function getList() {
        let data = {
            'page': currentPage.value,
            'page_size': pageSize.value,
        }
        getNews({ params: JSON.stringify(data) }).then(res => {
            list.value = res.list
            total.value = res.count
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    onMounted(() => {
        getList()
    })

    const click = () => {
        getList()
    }

    return {
        list,
        total,
        currentPage,
        pageSize,
        click
    }
}