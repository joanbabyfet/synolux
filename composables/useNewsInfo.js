import { getNewsInfo } from '../api/index'

export default function() {
    const info = ref({})
    const route = useRoute()

    function getInfo(id) {
        let data = {
            'id': id,
        }
        getNewsInfo({ params: JSON.stringify(data) }).then(res => {
            info.value = res
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