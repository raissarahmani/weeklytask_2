function getDataFromServer(status,callback) {
    setTimeout(function() {
        if(status) {
            callback(['product 1', 'product 2', 'product 3'], null)
        } else {
            const err = new Error('Failed to fetch data')
            err.name = 'Error'
            callback(null,err)
        }
    }, 3000)
}

function processData (successMsg) {
    console.log(successMsg)
}

getDataFromServer(true,processData)

