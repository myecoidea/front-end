<template>
<div>
  <Header></Header>
  <Footer></Footer>
</div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer
  }
}
</script>
