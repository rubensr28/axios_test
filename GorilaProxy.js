const axios = require('axios');

class GorilaProxy {
    static baseUrl = "https://app.gorilainvest.com.br/api";

    constructor(fundId, token) {
        this.token = token;
        this.fundId = fundId;
        //GorilaProxy.decodeToken(token).fundId;
    }

    static decodeToken(token) {
        return JSON.parse((Buffer.from(token.split(".")[1], "base64")).toString('ascii'));
    }

    async getTrades() {
        return getData(axios.get(`${GorilaProxy.baseUrl}/booker?fundId=${this.fundId}`, this.getAuthOptions()));
    }

    async getStockProducts(name) {
        return getData(axios.get(`${GorilaProxy.baseUrl}/products?productTypeName=STOCK&firstLetters=${name}`, this.getAuthOptions()));
    }

    async getPrice(securityName, minDate, maxDate) {
        return getData(axios.get(`${GorilaProxy.baseUrl}/price?securityName=${securityName}&minDate=${minDate}&maxDate=${maxDate}`, this.getAuthOptions()));
    }

    async getPortifolio() {
        return getData(axios.get(`${GorilaProxy.baseUrl}/portfolio/${this.fundId}/positions?includeNoPrice=true`, this.getAuthOptions()));
    }

    async inserTrade(trade){
        return getData(axios.post(`${GorilaProxy.baseUrl}/booker`, trade, this.getAuthOptions()));
    }

    static filterStockTrades(accounts){
        let trades = [];
        accounts.forEach((account) => trades.push(...account.Trades));
        return trades.filter((trade) => trade.ProductTypeName === 'STOCK' && trade.ProductSubTypeName === 'STOCK_LOCAL');
    }

    static showTrade(t){
        console.log(`${t.TradeDate} ${t.SecurityName} ${t.Quantity} ${t.Price} ${t.Sice == 1 ? "BUY" : "SELL"}`);
    }

    static showPosition(p){
        console.log(`${p.RefDate} ${p.SecurityName} ${p.Quantity} ${p.Price} ${p.Total}`);
    }

    async calculatePosition(trades){
        let posicao = {};
        let date = new Date().toISOString().split('T')[0];
        posicao.SecurityName = trades[0].SecurityName;
        let prices = await this.getPrice(posicao.SecurityName, date, date);
        posicao.Quantity = trades.reduce((acumulator, trade) => acumulator + trade.Side == 2 ? -trade.Quantity : trade.Quantity, 0);
        posicao.RefDate = date;
        posicao.Price = Math.round(prices[0].PriceClose*100)/100;
        posicao.Total = posicao.Price * posicao.Quantity
        posicao.Total = Math.round(posicao.Total*100)/100;
        return posicao;
    }

    async calculateStockPositions() {
        let data = await this.getTrades();
        let stocks = GorilaProxy.filterStockTrades(data.Accounts);
        var stocksGrouped = agruparPor(stocks, "SecurityName")
        let promises = Object.keys(stocksGrouped).map((key) => this.calculatePosition(stocksGrouped[key]));
        let positions = await Promise.all(promises);
        return positions;
    }

    getAuthOptions() {
        let options = {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        }

        return options;
    }
}

async function getData(promise){
    let response = await promise;
    if(response.status == 200){
        return response.data;
    }else{
        throw response.status;
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


module.exports = GorilaProxy;