const axios = require('axios')

async function getUrl(){
    const where = encodeURIComponent(JSON.stringify({
        "Year": 2018
      }));
      const response = await axios.get(
        `https://parseapi.back4app.com/classes/Carmodels_Car_Model_List_Mercedes_Benz?limit=10&where=${where}`,
        {
          headers: {
            'X-Parse-Application-Id': 'GAXgWYrUZv6O9PEXJDUcr7uL1ZrSP5xYUgiDn96m', // This is your app's application id
            'X-Parse-REST-API-Key': 'OaKf9tA4YeWmFhbzFVtBL1bE7geEN00mLfhdJrLs', // This is your app's REST API key
          }
        }
      )
    let data = response.data.results
    // console.log(data);
    let result = data.map(el => {
        if(el.Model === "Mercedes-AMG GLA"){
            el.imgUrl = "https://ik.imagekit.io/yq3ktfocfqc/Mercedes_GLA200_pFRasKrOW.jpeg?updatedAt=1627397952794"
        } else if(el.Model === "Mercedes-AMG C-Class"){
            el.imgUrl = "https://ik.imagekit.io/yq3ktfocfqc/mercedes_benz_C_CLASS_8_UuTAx1K.jpg?updatedAt=1627397956289"
        } else if(el.Model === "CLS"){
            el.imgUrl = "https://ik.imagekit.io/yq3ktfocfqc/mercedes_benz_CLS-CLASS_uky1n3Wsfh.jpg?updatedAt=1627397963764"
        } else if(el.Model === "E-Class") {
            el.imgUrl = "https://ik.imagekit.io/yq3ktfocfqc/mercedes_benz_E_CLASS_vvSEdfyv2r.jpg?updatedAt=1627397961031"
        } else if(el.Model === "Mercedes-AMG S-Class"){
            el.imgUrl = "https://ik.imagekit.io/yq3ktfocfqc/mercedes_benz_AMG_S_CLASS_TjUd8PSRw.jpg?updatedAt=1627397967016"
        } else if(el.Model === "GLC"){
            el.imgUrl = "https://ik.imagekit.io/yq3ktfocfqc/mercedes_benz_GLC_oST1Wr3NR.jpg?updatedAt=1627397968774"
        } else if(el.Model === "Mercedes-AMG CLA"){
            el.imgUrl = "https://ik.imagekit.io/yq3ktfocfqc/mercedes_benz_CLA-CLASS_JRWFvmb1t.webp?updatedAt=1627397956195"
        } else if(el.Model === "GLE"){
            el.imgUrl = "https://ik.imagekit.io/yq3ktfocfqc/mercedes_benz_GLE_uxfl1xFE_.jpg?updatedAt=1627397967472"
        } else if(el.Model === "GLS"){
            el.imgUrl = "https://ik.imagekit.io/yq3ktfocfqc/mercedes_benz_GLS_FvKAvLm_VW.jpg?updatedAt=1627397964348"
        } else if(el.Model === "S-Class"){
            el.imgUrl = "https://ik.imagekit.io/yq3ktfocfqc/mercedes_benz_S_CLASS_H4ojzdX1e.jpg?updatedAt=1627397969839"
        }
        const ob = {
            name: el.Make,
            model: el.Model,
            year: el.Year,
            category: el.Category,
            imgUrl: el.imgUrl,
            createdAt: el.createdAt,
            updatedAt: el.updatedAt
        }
        return ob
    })
    return result
}

module.exports = getUrl