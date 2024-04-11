import { getNewsInfo } from '../api/index'

export default function() {
    const info = ref({})
    const route = useRoute()

    function getInfo(id) {
        let data = {
            'id': id,
        }
        getNewsInfo(data).then(res => {
            if(res.code === 0) {
                info.value = res.data
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    onMounted(() => {
        getInfo(route.params.id)
    })

    return {
        info
    }
}