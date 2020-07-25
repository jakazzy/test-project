import axios from "axios";
import CryptoJS from "crypto-js";

export const getRegions=async()=>{
    const regionURL = `${process.env.REACT_APP_BASE_URL}/webresources/region/wapp/regions`;
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

export const getDistrict=async(region_code)=>{
    const districtURL = `${process.env.REACT_APP_BASE_URL}webresources/district/wapp/districts/:${region_code}`;
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

// webresources/district/wapp/districts/:region_code
// webresources/dropdown/wapp/dropdowns/gender