# Cloudflare Proxy

- Cloudflare worker를 이용한 프록시

## 사용방법

사용례

```
POST https://*.*.workers.dev/

{
    "url": "https://www.zara.com/us/en/pants-with-a-high-waist-p01608431.html",
    "method": "GET",
    "header": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
    }
}
```
