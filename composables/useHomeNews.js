import { getNews } from '../api/index'

export default function() {
    const list = ref([]) 

    function getList() {
        let data = {
            'page': 1,
            'page_size': 3,
        }
        getNews({ params: JSON.stringify(data) }).then(res => {
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