import axios from "axios";
import CryptoJS from "crypto-js";

export const getRegions=async()=>{
    const regionURL = `${process.env.REACT_APP_BASE_URL}webresources/region/wapp/regions`;
      const regions = await axios(regionURL);
      const { data } = regions;
      var keyHex = CryptoJS.enc.Base64.parse(process.env.REACT_APP_KEY);
      var decrypted = CryptoJS.DES.decrypt(
        {
          ciphertext: CryptoJS.enc.Base64.parse(data),
        },
        keyHex,
        {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        }
      );
      const actualData = JSON.parse(CryptoJS.enc.Utf8.stringify(decrypted));
      return actualData
    }

    
export const getDistricts=async(region_code)=>{
    const districtURL = `${process.env.REACT_APP_BASE_URL}webresources/district/wapp/districts/${region_code}`;
    const districts = await axios(districtURL);
      const { data } = districts;
      var keyHex = CryptoJS.enc.Base64.parse(process.env.REACT_APP_KEY);
      var decrypted = CryptoJS.DES.decrypt(
        {
          ciphertext: CryptoJS.enc.Base64.parse(data),
        },
        keyHex,
        {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        }
      );
      const actualData = JSON.parse(CryptoJS.enc.Utf8.stringify(decrypted));
      return actualData
}

export const getGender=async()=>{
    const genderURL = `${process.env.REACT_APP_BASE_URL}webresources/dropdown/wapp/dropdowns/gender`;
    const gender = await axios(genderURL);
      const { data } = gender;
      var keyHex = CryptoJS.enc.Base64.parse(process.env.REACT_APP_KEY);
      var decrypted = CryptoJS.DES.decrypt(
        {
          ciphertext: CryptoJS.enc.Base64.parse(data),
        },
        keyHex,
        {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        }
      );
      const actualData = JSON.parse(CryptoJS.enc.Utf8.stringify(decrypted));
      return actualData
}


export const sendData =()=>{
  const data= [
    {code: "AH", name: "Ahafo", country: "233", createdby: "admin", createdon: "May 12, 2020"},
    {code: "AR", name: "Ashanti", country: "233", createdby: "admin", createdon: "May 12, 2020"},
    {code: "BE", name: "Bono East", country: "233", createdby: "admin", createdon: "May 12, 2020"},
    {code: "BR", name: "Bono", country: "233", createdby: "admin", createdon: "May 12, 2020"},
    {code: "CR", name: "Central", country: "233", createdby: "admin", createdon: "May 12, 2020"},
    {code: "ER", name: "Eastern", country: "233", createdby: "admin", createdon: "May 12, 2020"},
    {code: "GA", name: "Greater Accra", country: "233", createdby: "admin", createdon: "May 12, 2020"},
    {code: "NE", name: "North East", country: "233", createdby: "admin", createdon: "May 12, 2020"},
    {code: "NR", name: "Northern", country: "233", createdby: "admin", createdon: "May 12, 2020"},
    {code: "OR", name: "Oti", country: "233", createdby: "admin", createdon: "May 12, 2020"},
    {code: "SR", name: "Savanna", country: "233", createdby: "admin", createdon: "May 12, 2020"},
    {code: "UE", name: "Upper East", country: "233", createdby: "admin", createdon: "May 12, 2020"},
    {code: "UW", name: "Upper West", country: "233", createdby: "admin", createdon: "May 12, 2020"},
    {code: "VR", name: "Volta", country: "233", createdby: "admin", createdon: "May 12, 2020"},
    {code: "WN", name: "Western North", country: "233", createdby: "admin", createdon: "May 12, 2020"},
    {code: "WR", name: "Western", country: "233", createdby: "admin", createdon: "May 12, 2020"}
  ]
  
  const actualData = CryptoJS.enc.Utf8.parse(data)
  // const met = CryptoJS.enc.Base64.stringify(actualData)
  var keyHex = process.env.REACT_APP_KEY 
  var encrypted = CryptoJS.DES.encrypt(
        {
          ciphertext: CryptoJS.enc.Base64.stringify(actualData),
    },
    keyHex,
    {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        }
      );
    console.log(encrypted,'heya')
    return encrypted   
  // console.log(met,'heya')
  // console.log(keyHex,'heya')
}
// webresources/district/wapp/districts/:region_code
// webresources/dropdown/wapp/dropdowns/gender