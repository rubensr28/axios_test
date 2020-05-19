var axios = require("axios");

var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik56UXpPRGN4UVRVeVFqRTBNRE16TURkR1FUY3dOVUl3UmtSR016azVSamxEUVRGR01qUTNOQSJ9.eyJlbWFpbCI6InJ1YmVuc19yMjhAaG90bWFpbC5jb20iLCJuYW1lIjoicnViZW5zX3IyOEBob3RtYWlsLmNvbSIsIm5pY2tuYW1lIjoicnViZW5zX3IyOCIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lY2FlOGYyMjAxMDViOWViMjAzMzljNzU2MDgzZjVlND9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnJ1LnBuZyIsInVzZXJfbWV0YWRhdGEiOnsibmFtZSI6IlJ1YmVucyBSb2RyaWdvIE1hcnF1ZXMiLCJmaXJzdF9sb2dpbiI6ZmFsc2V9LCJsYXN0X3Bhc3N3b3JkX3Jlc2V0IjoiMjAyMC0wNS0xOFQxNDoyMzo1MS4wMjJaIiwiYXBwX21ldGFkYXRhIjp7ImZ1bmRJZCI6MTk0MDA0fSwiZnVuZElkIjoxOTQwMDQsImNsaWVudElEIjoiRVF5WjAzb3l3QW1nMUw2NzNXTDY5M1hscnlXcFFRdGoiLCJjcmVhdGVkX2F0IjoiMjAyMC0wNC0yN1QxODo1MToyOC41MzVaIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlkZW50aXRpZXMiOlt7InVzZXJfaWQiOiI1ZWE3MjliMDYwMTliYjBjZDRiYTAzNWIiLCJwcm92aWRlciI6ImF1dGgwIiwiY29ubmVjdGlvbiI6IlVzZXJuYW1lLVBhc3N3b3JkLUF1dGhlbnRpY2F0aW9uIiwiaXNTb2NpYWwiOmZhbHNlfV0sInVwZGF0ZWRfYXQiOiIyMDIwLTA1LTE5VDE3OjI1OjU2LjkzN1oiLCJ1c2VyX2lkIjoiYXV0aDB8NWVhNzI5YjA2MDE5YmIwY2Q0YmEwMzViIiwiaXNzIjoiaHR0cHM6Ly9nb3JpbGFpbnZlc3QtcHJvZC5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWVhNzI5YjA2MDE5YmIwY2Q0YmEwMzViIiwiYXVkIjoiRVF5WjAzb3l3QW1nMUw2NzNXTDY5M1hscnlXcFFRdGoiLCJpYXQiOjE1ODk5MDkxNTcsImV4cCI6MTU4OTkyNzE1N30.QRaJo37zzJ5knVL5KchzNWTUAd_31iAzcCAYkuH-mkZU651a0FQwf6sqbBzAUXGU6BzMKACTRsj500yXRWHcfxl2DDCHY0OXAJmCRCB1gDxBnOgi6TjuQpcVLggZaLKqLvxOb2JrwF3SAGsPToU6eYX5bkqPMesAYotkwYYoqgK-UKVAHhHy2HtLv292lUQnSyjYADL1zKDtXJlnRuxJ_6rXJ4GoM9c_Dk7fUV4NIWIIxCdo5R-MJx9FbwNJdfw6SuUL8Ep5pYVeaZn_VOJCR_0ExtfXnuJ_v5iXB-36toiUdsq-yQyol-M0tT-c7jDEqQP0LZUmV3Ug5137PmYYrA";
var fundId = 194004;

getStocks().then((r) => r.forEach(t => showTrade(t)));
calculaPosicao();

//getTrades()
//getPortifolio()
//getPrice()
//getProducts()
//postTrade()

function getTrades() {
    return axios.get(`https://app.gorilainvest.com.br/api/booker?fundId=${fundId}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    // .then(function (response) {
    //     console.log(response.data);
    //     return response.data;
    // }).catch(function (error) {
    //     console.log(error);
    // }).then(function () {
    //     // always executed
    // });
}

function showTrade(t){
    console.log(`${t.TradeDate} ${t.SecurityName} ${t.Quantity} ${t.Price} ${t.Sice == 1 ? "BUY" : "SELL"}`);
}

function getProducts() {
    return axios.get(`https://app.gorila.com.br/api/products?productTypeName=STOCK&firstLetters=PETR4`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    // .then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.log(error);
    // }).then(function () {
    //     // always executed
    // });
}
function getPrice(securityName, minDate, maxDate) {
    return axios.get(`https://app.gorila.com.br/api/price?securityName=${securityName}&minDate=${minDate}&maxDate=${maxDate}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    //.then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.log(error);
    // }).then(function () {
    //     // always executed
    // });
}
function getPortifolio() {
    return axios.get(`https://app.gorila.com.br/api/portfolio/194004/positions?includeNoPrice=true`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        }).then(function () {
            // always executed
        });

}

function postTrade() {
    return axios.post('http://app.gorila.com.br/api/booker',
        {
            "BrokerID": 226,
            "BrokerName": "XP INVESTIMENTOS CCTVM",
            "FundID": "194004",
            "Price": 22.38,
            "ProductSubTypeID": 1,
            "ProductSubTypeName": "STOCK_LOCAL",
            "ProductTypeName": "STOCK",
            "Quantity": 20,
            "SecurityID": 227,
            "SecurityName": "ITUB4",
            "Side": 1,
            "Source": "M",
            "TradeDate": "2020-05-11"
        }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

async function getStocks() {
    try {
        var stocks = [];

        let response = await getTrades();

        response.data.Accounts.forEach(element => {
            element.Trades.forEach(trade => {
                if (trade.ProductTypeName === 'STOCK' && trade.ProductSubTypeName === 'STOCK_LOCAL')
                    stocks.push(trade);
            })
        });

        return stocks;

    } catch (error) {
        console.log(error);
    }
}

function calculaPosicao() {
    var stocks = [];
    getTrades().then(function (response) {
        response.data.Accounts.forEach(element => {
            element.Trades.forEach(trade => {
                if (trade.ProductTypeName === 'STOCK' && trade.ProductSubTypeName === 'STOCK_LOCAL')
                    stocks.push(trade);
            })
        });
        var stocksGrouped = agruparPor(stocks, "SecurityName")
        var posicoes = [];
        for (let key in stocksGrouped) {
            let posicao = { RefDate: new Date().toLocaleDateString(), SecurityName: '', Quantity: 0, Price: 0.00, Total: 0.00 }
            let quant = 0
            let trades = stocksGrouped[key];
            posicao.SecurityName = trades[0].SecurityName;
            trades.forEach((trade) => {
                if (trade.Side == 2) {
                    quant -= trade.Quantity;
                }
                else {
                    quant += trade.Quantity
                }
                posicao.Quantity = quant;

            });
            let date = new Date(posicao.RefDate).toISOString().split('T')[0]
            posicao.RefDate=date;
            getPrice(posicao.SecurityName, date, date).then((response) => {
                posicao.Price=response.data[0].PriceOpen;
                posicao.Total = posicao.Price * posicao.Quantity
                posicoes.push(posicao)
                console.log(posicoes)
            }).catch(function (error) {
                console.log(error)
            });
        }
    }
    ).catch(function (error) {
        console.log(error)
    });
}

function agruparPor(objetoArray, propriedade) {
    return objetoArray.reduce(function (acc, obj) {
        let key = obj[propriedade];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}