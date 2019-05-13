const csvToJson = require('csvtojson')
const fs = require('fs')

const fileCSV = 'customer-data.csv'

csvToJson()
    .fromFile(fileCSV)
    .then((jsonObj) => {
        //console.log(jsonObj)
        jsonContent = JSON.stringify(jsonObj, null, 2)
        console.log("Writing JSON to a file")
        fs.writeFile('customer-data.json', jsonContent,'utf-8', (error) => {
            if(error){
                console.log(`Error mientras escribia el archivo: ${error.message}`)
            }
            console.log("Data written to  customer-data.json")            
        })
    })