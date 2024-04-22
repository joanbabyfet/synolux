import { getHomeNews } from '../api/index'

export default function() {
    const list = ref([]) 

    function getList() {
        let data = {
            'limit': 3,
        }
        getHomeNews(data).then(res => {
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