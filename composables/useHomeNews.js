import { getNews } from '../api/index'

export default function() {
    const list = ref([]) 

    function getList() {
        let data = {
            'limit': 3,
            'is_hot': 1,
        }
        getNews(data).then(res => {
            if(res.code === 0) {
                list.value = res.data.list
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    onMounted(() => {
        getList()
    })

    return {
        list
    }
}