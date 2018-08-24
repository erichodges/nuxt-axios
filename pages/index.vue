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
  

  // https://sheets.googleapis.com/v4/spreadsheets/1SIfFSp_1In8V_NmIGjVtry-7478OJosu91J_toQT7gs/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=AIzaSyAOetW9XOpi6KEyMR_TBzvRLooPfdxEp7I
</script>


