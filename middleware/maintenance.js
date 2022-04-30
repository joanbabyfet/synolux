export default function({redirect, route}) {
    let is_maintenance = false; //获取数据自接口
    if(is_maintenance)
    {
        return redirect('/maintenance') //跳转到维护中页
    }
    else if(is_maintenance === false && route.path === '/maintenance')
    {
        return redirect('/') //跳转到首页
    }
}