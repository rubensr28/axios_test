var axios = require("axios");

var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik56UXpPRGN4UVRVeVFqRTBNRE16TURkR1FUY3dOVUl3UmtSR016azVSamxEUVRGR01qUTNOQSJ9.eyJlbWFpbCI6InJ1YmVuc19yMjhAaG90bWFpbC5jb20iLCJuYW1lIjoicnViZW5zX3IyOEBob3RtYWlsLmNvbSIsIm5pY2tuYW1lIjoicnViZW5zX3IyOCIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lY2FlOGYyMjAxMDViOWViMjAzMzljNzU2MDgzZjVlND9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnJ1LnBuZyIsInVzZXJfbWV0YWRhdGEiOnsibmFtZSI6IlJ1YmVucyBSb2RyaWdvIE1hcnF1ZXMiLCJmaXJzdF9sb2dpbiI6ZmFsc2V9LCJsYXN0X3Bhc3N3b3JkX3Jlc2V0IjoiMjAyMC0wNS0xOFQxNDoyMzo1MS4wMjJaIiwiYXBwX21ldGFkYXRhIjp7ImZ1bmRJZCI6MTk0MDA0fSwiZnVuZElkIjoxOTQwMDQsImNsaWVudElEIjoiRVF5WjAzb3l3QW1nMUw2NzNXTDY5M1hscnlXcFFRdGoiLCJjcmVhdGVkX2F0IjoiMjAyMC0wNC0yN1QxODo1MToyOC41MzVaIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlkZW50aXRpZXMiOlt7InVzZXJfaWQiOiI1ZWE3MjliMDYwMTliYjBjZDRiYTAzNWIiLCJwcm92aWRlciI6ImF1dGgwIiwiY29ubmVjdGlvbiI6IlVzZXJuYW1lLVBhc3N3b3JkLUF1dGhlbnRpY2F0aW9uIiwiaXNTb2NpYWwiOmZhbHNlfV0sInVwZGF0ZWRfYXQiOiIyMDIwLTA1LTIwVDEyOjE0OjUzLjE2MFoiLCJ1c2VyX2lkIjoiYXV0aDB8NWVhNzI5YjA2MDE5YmIwY2Q0YmEwMzViIiwiaXNzIjoiaHR0cHM6Ly9nb3JpbGFpbnZlc3QtcHJvZC5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWVhNzI5YjA2MDE5YmIwY2Q0YmEwMzViIiwiYXVkIjoiRVF5WjAzb3l3QW1nMUw2NzNXTDY5M1hscnlXcFFRdGoiLCJpYXQiOjE1ODk5NzY4OTMsImV4cCI6MTU4OTk5NDg5M30.X1GoDvGY2mwNWzglJEOKLueVUMQQWY-pIBuY2JmvZjIkhYtwToP4wEiibNrOzCy1eKusPPYMJU5qjWwm9bQ-x77zCErkpEMqf2Q0EsjTkscXdhcqWSWtjBHyrXp7mgJbbYlbuS5e8tpqj5nbATOR9VUQZ6pLJCa9nqjv54NFawPoU4g5EErXLN7g-Ij76U5kl8318n6mqPbfnPmhBN5TFMc1itv4TKktq6Fh50aXHMdbxdWaK4EC0KI_SK27O51GpZlRxdoHFneyhuHzlCZqT5aIlqIfEa7YscdctBp3Q5fi9psd8cNH9muxR_H0RuAaELoyJoGLiNGAYb3eoN_Sug";
var fundId = 194004;

//getStocks().then((r) => r.forEach(t => showTrade(t)));
showPosicoes();

function getTrades() {
    return axios.get(`https://app.gorilainvest.com.br/api/booker?fundId=${fundId}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
}

function showTrade(t){
    console.log(`${t.TradeDate} ${t.SecurityName} ${t.Quantity} ${t.Price} ${t.Sice == 1 ? "BUY" : "SELL"}`);
}
async function showPosicoes(){
    let posicoes = await calculaPosicao();
    console.log(posicoes);
}

function getProducts() {
    return axios.get(`https://app.gorila.com.br/api/products?productTypeName=STOCK&firstLetters=PETR4`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
}
function getPrice(securityName, minDate, maxDate) {
    return axios.get(`https://app.gorila.com.br/api/price?securityName=${securityName}&minDate=${minDate}&maxDate=${maxDate}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
}
function getPortifolio() {
    return axios.get(`https://app.gorila.com.br/api/portfolio/194004/positions?includeNoPrice=true`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
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
}

async function getStocks() {
    try {
        var stocks = [];

        let response = await getTrades();

        response.data.Accounts.forEach(element => {
            element.Trades.forEach(trade => {
                if (trade.ProductTypeName === 'STOCK')
                    stocks.push(trade);
            })
        });

        return agruparPor(stocks, "SecurityName");

    } catch (error) {
        console.log(error);
    }
}

async function getStockPrice(securityName, refDate){
    try {
        let response = await getPrice(securityName,refDate,refDate);
        return response.data[0].PriceOpen;
    }catch(error){
        console.error(error)
    }
}

async function calculaPosicao() {
    try{

        var stocks = await getStocks();
        var posicoes = [];
        for (let key in stocks){
            let posicao = {RefDate: (new Date()).toISOString().slice(0,10).replace(/-/g,"-"), SecurityName: '', Quantity: 0, Price: 0.00, Total: 0.00 };
            posicao.SecurityName = stocks[key][0].SecurityName;
            stocks[key].forEach(trade=>{
                if(trade.Side==1){
                    posicao.Quantity+=trade.Quantity;
                }
                else{
                    posicao.Quantity-=trade.Quantity;
                }
            });
            posicao.Price = await getStockPrice(posicao.SecurityName,posicao.RefDate);
            posicao.Total = posicao.Price * posicao.Quantity;
            posicoes.push(posicao);
        }
        return posicoes;
    }catch(error){
        console.error(error);
    }
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