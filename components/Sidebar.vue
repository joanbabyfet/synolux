<template>
    <div id="sidebar">
        <div id="innerSidebar">
            <div class="blockA">
                <div class="main menu">
                    <img src="/images/sideBarImg.jpg" width="168" height="70" class="visual" />
                    <ul>
                        <li>
                            <NuxtLink :to="localePath('/products')">美國BTU太陽能燒結爐設備</NuxtLink>
                            <ul>
                                <li><NuxtLink :to="localePath('/products')">PV系列</NuxtLink></li>
                                <li><NuxtLink :to="localePath('/products')">PVD系列</NuxtLink></li>
                                <li><NuxtLink :to="localePath('/products')">Tritan HV90</NuxtLink></li>
                            </ul>
                        </li>
                        <li>
                            <NuxtLink :to="localePath('/products/2')">日本Cosmic自動點錫焊機</NuxtLink>
                            <ul>
                            <li><NuxtLink :to="localePath('/products/2')">PDSTC2030系列</NuxtLink></li>
                            <li><NuxtLink :to="localePath('/products/2')">PDSBC2030系列</NuxtLink></li>
                            <li><NuxtLink :to="localePath('/products/2')">PDS2BC2030系列</NuxtLink></li>
                            </ul>
                        </li>
                        <li><NuxtLink :to="localePath('/products/4')">Zeta 3D 光學表面輪廓階高膜厚量測儀</NuxtLink></li>
                        <li><NuxtLink :to="localePath('/products/5')">其它</NuxtLink></li>
                    </ul>
                </div>
                <div class="footer"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about
</script>