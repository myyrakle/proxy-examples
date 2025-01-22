# Naver Proxy

## 배포

설치
```bash
cd ncp
npm i
```

압축
```bash
cd naver-proxy
zip -r naver.zip ./*
```

그리고 대시보드에 가서 Action에 파일 올려서 수정하기

## 사용방법

사용례

```
POST https://*.apigw.ntruss.com/*/dev/

{
    "url": "https://www.zara.com/us/en/pants-with-a-high-waist-p01608431.html",
    "method": "GET",
    "header": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
    }
}
```
