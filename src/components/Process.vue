<template>
    <div class="process flex items-center rounded-2xl mb-10">
        <div class="processChild" :style="{ width: activeId * 33 + '%' }"></div>
    </div>
</template>

<script>
export default {
    props:['activeId']
}
</script>
<style lang="scss" scoped>
.process {
    height:100px;
    width: 50vw;
    background-color:white;
    .processChild{
        height:20%;
        background-color:lightblue;
        transition: all .5s;
    }
}
</style>