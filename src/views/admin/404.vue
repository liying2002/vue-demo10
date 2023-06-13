<template>
  <button @click="get">返回</button>
  <div class="size">404页面</div>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
  methods:{
        get(){
            this.$router.go(-1)
        }
    }
});
</script>

<style lang="scss" scoped>
.size {
  font-size: 300px;
}
</style>
