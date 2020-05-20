var GorilaProxy = require('./GorilaProxy');


var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik56UXpPRGN4UVRVeVFqRTBNRE16TURkR1FUY3dOVUl3UmtSR016azVSamxEUVRGR01qUTNOQSJ9.eyJlbWFpbCI6InJ1YmVuc19yMjhAaG90bWFpbC5jb20iLCJuYW1lIjoicnViZW5zX3IyOEBob3RtYWlsLmNvbSIsIm5pY2tuYW1lIjoicnViZW5zX3IyOCIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lY2FlOGYyMjAxMDViOWViMjAzMzljNzU2MDgzZjVlND9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnJ1LnBuZyIsInVzZXJfbWV0YWRhdGEiOnsibmFtZSI6IlJ1YmVucyBSb2RyaWdvIE1hcnF1ZXMiLCJmaXJzdF9sb2dpbiI6ZmFsc2V9LCJsYXN0X3Bhc3N3b3JkX3Jlc2V0IjoiMjAyMC0wNS0xOFQxNDoyMzo1MS4wMjJaIiwiYXBwX21ldGFkYXRhIjp7ImZ1bmRJZCI6MTk0MDA0fSwiZnVuZElkIjoxOTQwMDQsImNsaWVudElEIjoiRVF5WjAzb3l3QW1nMUw2NzNXTDY5M1hscnlXcFFRdGoiLCJjcmVhdGVkX2F0IjoiMjAyMC0wNC0yN1QxODo1MToyOC41MzVaIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlkZW50aXRpZXMiOlt7InVzZXJfaWQiOiI1ZWE3MjliMDYwMTliYjBjZDRiYTAzNWIiLCJwcm92aWRlciI6ImF1dGgwIiwiY29ubmVjdGlvbiI6IlVzZXJuYW1lLVBhc3N3b3JkLUF1dGhlbnRpY2F0aW9uIiwiaXNTb2NpYWwiOmZhbHNlfV0sInVwZGF0ZWRfYXQiOiIyMDIwLTA1LTE5VDE3OjI1OjU2LjkzN1oiLCJ1c2VyX2lkIjoiYXV0aDB8NWVhNzI5YjA2MDE5YmIwY2Q0YmEwMzViIiwiaXNzIjoiaHR0cHM6Ly9nb3JpbGFpbnZlc3QtcHJvZC5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWVhNzI5YjA2MDE5YmIwY2Q0YmEwMzViIiwiYXVkIjoiRVF5WjAzb3l3QW1nMUw2NzNXTDY5M1hscnlXcFFRdGoiLCJpYXQiOjE1ODk5MDkxNTcsImV4cCI6MTU4OTkyNzE1N30.QRaJo37zzJ5knVL5KchzNWTUAd_31iAzcCAYkuH-mkZU651a0FQwf6sqbBzAUXGU6BzMKACTRsj500yXRWHcfxl2DDCHY0OXAJmCRCB1gDxBnOgi6TjuQpcVLggZaLKqLvxOb2JrwF3SAGsPToU6eYX5bkqPMesAYotkwYYoqgK-UKVAHhHy2HtLv292lUQnSyjYADL1zKDtXJlnRuxJ_6rXJ4GoM9c_Dk7fUV4NIWIIxCdo5R-MJx9FbwNJdfw6SuUL8Ep5pYVeaZn_VOJCR_0ExtfXnuJ_v5iXB-36toiUdsq-yQyol-M0tT-c7jDEqQP0LZUmV3Ug5137PmYYrA";
var fundId = "194004";



let trade = {
    "BrokerID": 226,
    "BrokerName": "XP INVESTIMENTOS CCTVM",
    "FundID": fundId+"",
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
};

async function main() {
    let gorilaProxy = new GorilaProxy(fundId, token);
    let positions = await gorilaProxy.calculateStockPositions();
    positions.forEach((p)=> GorilaProxy.showPosition(p));

    let result;
    //result = await gorilaProxy.getTrades();
    //result = await gorilaProxy.getPortifolio();
    //result = await gorilaProxy.getPrice("PETR4","2020-05-20","2020-05-20");
    //result = await gorilaProxy.getStockProducts("PETR4");
    //result = await gorilaProxy.inserTrade(trade);
    console.log(result);
}

main();