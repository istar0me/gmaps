# 地點詳細資訊查詢
search and get place details, then navigate to the destination.
> 輸入地點，會取得他的詳細資料

## 安裝
```
git clone https://github.com/istar0me/gmaps.git
cd gmaps
npm install
```

## 測試
```
mocha
```

## 範例
資料庫中有這幾筆資料
```json
[
    { "id": "highWall", "address": "金大", "phone": "0987487987" ,"open_hours":"0~24"},
    { "id": "address", "address": "成大", "phone": "0912345678" ,
    "open_hours":"12~24"}
]
```
此時若輸入highwall會取得 金大，0987487987，0~24
```

