import { getNewsInfo } from '../api/index'

export default function() {
    const info = ref({})
    const content = ref('')
    const route = useRoute()

    function getInfo(id) {
        let data = {
            'id': id,
        }
        getNewsInfo(data).then(res => {
            if(res.code === 0) {
                info.value = res.data
                content.value = res.data.Content
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    onMounted(() => {
        getInfo(route.params.id)
    })

    return {
        info, 
        content
    }
}