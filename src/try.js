var CryptoJS =require("crypto-js");
function decpt(){
   let data= {name: "Adu", surname: "Kofi"}
    data = JSON.stringify(data)
    // var keyHex = CryptoJS.enc.Base64.parse( "Fg7EZ/RRa0Y=");
      var decrypted = CryptoJS.DES.encrypt(
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

decpt()

// 0: {code: "AH", name: "Ahafo", country: "233", createdby: "admin", createdon: "May 12, 2020", …}
// 1: {code: "AR", name: "Ashanti", country: "233", createdby: "admin", createdon: "May 12, 2020", …}
// 2: {code: "BE", name: "Bono East", country: "233", createdby: "admin", createdon: "May 12, 2020"}
// 3: {code: "BR", name: "Bono", country: "233", createdby: "admin", createdon: "May 12, 2020"}
// 4: {code: "CR", name: "Central", country: "233", createdby: "admin", createdon: "May 12, 2020"}
// 5: {code: "ER", name: "Eastern", country: "233", createdby: "admin", createdon: "May 12, 2020"}
// 6: {code: "GA", name: "Greater Accra", country: "233", createdby: "admin", createdon: "May 12, 2020"}
// 7: {code: "NE", name: "North East", country: "233", createdby: "admin", createdon: "May 12, 2020"}
// 8: {code: "NR", name: "Northern", country: "233", createdby: "admin", createdon: "May 12, 2020"}
// 9: {code: "OR", name: "Oti", country: "233", createdby: "admin", createdon: "May 12, 2020"}
// 10: {code: "SR", name: "Savanna", country: "233", createdby: "admin", createdon: "May 12, 2020"}
// 11: {code: "UE", name: "Upper East", country: "233", createdby: "admin", createdon: "May 12, 2020"}
// 12: {code: "UW", name: "Upper West", country: "233", createdby: "admin", createdon: "May 12, 2020"}
// 13: {code: "VR", name: "Volta", country: "233", createdby: "admin", createdon: "May 12, 2020"}
// 14: {code: "WN", name: "Western North", country: "233", createdby: "admin", createdon: "May 12, 2020"}
// 15: {code: "WR", name: "Western", country: "233", createdby: "admin", createdon: "May 12, 2020"}


const data= [
  {code: "AH", name: "Ahafo", country: "233", createdby: "admin", createdon: "May 12, 2020"},
  {code: "AR", name: "Ashanti", country: "233", createdby: "admin", createdon: "May 12, 2020"},
  {code: "BE", name: "Bono East", country: "233", createdby: "admin", createdon: "May 12, 2020"}
]