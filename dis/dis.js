const apiKey = 'PB3KPXIT23WYMTWQPZWZ4SM742PFGJPYJP'

const peterAddress = '0x846b5cc335b57ffa37f9498847c3ebc7fb52cf7b'
const peter2Address = '0x2b58ac621224579f770191326cbfceb844b98455'
const florisAddress = '0xb1bb4cc9f86296b7591f18564ab48c691fc9ed59'
const floris2Address = '0xd54298ee13e5cdaac33a0b6ab2cfc86e3b8772f2'
const floris3Address = '0x16fb9e83a58474e04af009d57eb26895430e5d6d'
const tobiAddress = '0x7a5657eb91ce2b85260b600c61d34be10e608978'
const tobi2Address = '0x4ec5e70484ed762d884b29729d33dc73e74a5927'

const addresses = {'peter': [peterAddress, peter2Address], 'floris':[florisAddress, floris2Address, floris3Address], 'tobias':[tobiAddress, tobi2Address]}

const address = floris3Address

const contractAddress = '0x6ee9dfd64a7cf1eb4da2c3d79579f56da3b7eb1a'

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#address').innerHTML = `Address: ${address}`

    fetch(`https://api.ftmscan.com/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        document.querySelector('#ftm').innerHTML = `FTM amount: ${data.result / 10 ** 18}`
    })

    fetch(`https://api.ftmscan.com/api?module=account&action=tokentx&address=${address}&startblock=0&endblock=999999999&sort=asc&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        let result = data.result
        let amountDis = 0

        result.slice().reverse().forEach((transaction) => {
            let amount = transaction.value / (10**18)
            let tokenName = transaction.tokenName
            let addressFrom = transaction.from 
            let addressTo = transaction.to
            let timestamp = transaction.timeStamp

            date = timeConverter(timestamp)
    
            let table = document.querySelector('#tokens')
            let newRow = table.insertRow()
            addCell(tokenName, newRow)
            addCell(amount, newRow)
            addCell(addressFrom, newRow)
            addCell(addressTo, newRow)
            addCell(date, newRow)

            if (tokenName === 'TosDis' && addressFrom != contractAddress && addressTo != contractAddress) {
                if (addressFrom === address) {
                    amountDis -= amount
                }
                if (addressTo === address) {
                    amountDis += amount
                }
            }
        })
        document.querySelector('#dis').innerHTML = `DIS amount: ${amountDis}`    
    })

    function addCell(text, newRow) {
        let newCell = newRow.insertCell()
        let newText = document.createTextNode(text)
        newCell.append(newText)
    }

    function timeConverter(timestamp) {
        let date = new Date(timestamp * 1000);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = date.getFullYear();
        let month = months[date.getMonth()];
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        let formattedTime = year + ' ' + month + ' ' + day + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        return formattedTime
    }

})