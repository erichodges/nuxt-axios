<template>
  <main></main>
</template>

<script>
require('dotenv').config()
import axios from 'axios';

export default function( {params} ) {

  return axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1SIfFSp_1In8V_NmIGjVtry-7478OJosu91J_toQT7gs/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=process.env.key`)
    .then((response) => {
      console.log(response);
    });

}
</script>
