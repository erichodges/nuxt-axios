require('dotenv').config()
import axios from 'axios';


// async asyncData => ({ app }) {
//   const people = await app.$axios.$get('https://sheets.googleapis.com/v4/spreadsheets/1SIfFSp_1In8V_NmIGjVtry-7478OJosu91J_toQT7gs/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=process.env.API_KEY')
//   return { people }
// }


// export default function() {

//   return $axios.$get(`https://sheets.googleapis.com/v4/spreadsheets/1SIfFSp_1In8V_NmIGjVtry-7478OJosu91J_toQT7gs/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=process.env.API_KEY`)
//     .then((response) => {
//       console.log(response);
//     });

// }