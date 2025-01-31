# Proxy on AWS Lambda

- AWS Lambda를 이용한 API 프록시

## 요구사항

- Runtime: Node.js 18.x
- handler: index.handler
- Function URL
- layer 사용 (./axios.zip)

## 사용방법

사용례

```
POST https://*.lambda-url.ap-northeast-2.on.aws/

{
    "url": "https://www.zara.com/us/en/pants-with-a-high-waist-p01608431.html",
    "method": "GET",
    "header": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
    }
}
```
