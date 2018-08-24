<template>
  <main>
    <h3>{{currencies}}</h3>
  </main>
</template>

<script>
  require('dotenv').config()

  export default {
    asyncData ({ app }) {
      return app.$axios
      .$get('https://api.coinmarketcap.com/v1/ticker/?limit=5%27').then(response => 
        {return {
          currencies: response.data
        };
        console.log(response.data)
      })
    }
  }
</script>


