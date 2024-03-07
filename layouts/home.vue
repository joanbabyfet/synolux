<template>
    <div id="containerIdx">
        <div id="HeaderIdx">
            <div id="innerHeaderIdx">
                <Header></Header>
            </div>
        </div>
        <div id="mainIdx">
            <slot name="default"></slot>
        </div>
        <Footer></Footer>
    </div>
</template>