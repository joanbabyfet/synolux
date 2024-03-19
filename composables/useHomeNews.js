import { getNews } from '../api/index'

export default function() {
    const list = ref([]) 

    function getList() {
        let data = {
            'page': 1,
            'page_size': 3,
        }
        getNews({ params: JSON.stringify(data) }).then(res => {
            list.value = res.list
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