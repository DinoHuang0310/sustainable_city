# sustainable_city
 
 ### Follow the rules when you git
  1. feat: 新功能 (feature)
  2. fix: 修補bug
  3. doc: 文件 (documentation)
  4. style: 樣式 (不影響程式碼運行之異動)
  5. refactor: 重構 (未新增功能或修補bug之程式碼異動)
  6. test: 增加測試
  7. chore: 構建過程或輔助工具之異動


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run-script build
```
## data format

 ### data.json 規格

```
{
    "navList": [
        {
            "name": "選單名稱 (html)",
            "class": "定義class (選)",
            "url": "url或錨點",
            "isAnchor": 是否為錨點 (布林)
        }
    ],
    "chartdata_poll": {
        "details": [
            {
                "name": "表單標題",
                "keyword": [key, key2],
                "value": [
                    [val, val, val, val, val, val],
                    [val2, val2, val2, val2, val2, val2],
                ],
                "description": "表單描述"
            }
        ],
        "unit": "單位 (選)",
        "url": "連結 (選)"
    },
    "chartdata_statistics": {
        "details": [
            {
                "name": "表單標題",
                "value": [val, val, val, val, val, val],
                "description": "表單描述"
            }
        ],
        "url": "連結 (選)"
    },
    "ranking": {
        "url": "連結 (選)",
        "rankingList": [
            {
                "tagname": "slider頁籤名稱",
                "title": "主標",
                "image": "圖檔url",
                "content": "內文 (html)",
                "url": "",
                "chartdata": {
                    "keyword": [key, key2],
                    "value": [
                        [val, val, val, val, val, val],
                        [val2, val2, val2, val2, val2, val2],
                    ],
                    "unit": "單位 (選)",
                    "max": "x軸最大值 type為val (選)"
                }
            }
        ]
    },
    "media": {
        "mediaTitle": "影片標題 (選)",
        "mediaId": "影片ID (選)"
    },
    "specialAwards": {
        "url": "連結 (選)",
        "rankingList": [
            {
                "tagname": "slider頁籤名稱",
                "title": "主標",
                "image": "圖檔url",
                "content": "內文 (html)",
                "url": "",
                "chartdata": {
                    "keyword": [key, key2],
                    "value": [
                        [val, val, val, val, val, val],
                        [val2, val2, val2, val2, val2, val2],
                    ],
                    "unit": "單位 (選)",
                    "max": "x軸最大值 type為val (選)"
                }
            }
        ]
    },
    "mayors": [
        {
            "image": "圖檔url",
            "name": "標題",
            "description": ["描述"],
            "url": "連結 (選)",
            "mediaId": "影片ID (選)"
        }
    ],
    "slider": [
        {
            "title": "標題",
            "url": "url",
            "image": "圖檔url"
        }
    ]
}
```
