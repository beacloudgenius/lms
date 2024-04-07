```
docker run -v $PWD/cloudflared:/.cloudflared erisamoe/cloudflared tunnel login
docker run -v $PWD/cloudflared:/etc/cloudflared erisamoe/cloudflared tunnel create dev
docker run -v $PWD/cloudflared:/etc/cloudflared erisamoe/cloudflared tunnel route dns dev dev.thecloudseminar.com

docker compose -f cloudflared/docker-compose-cloudflared.yaml down --remove-orphans
docker compose -f cloudflared/docker-compose-cloudflared.yaml up -d --force-recreate
docker compose -f cloudflared/docker-compose-cloudflared.yaml logs -f

```

config.yaml

```
# tunnel: dev
tunnel: GUID
credentials-file: /etc/cloudflared/GUID.json
ingress:
  - hostname: dev.thecloudseminar.com
    service: http://some-internal-location:3000
  - service: http_status:404
```

Run this on the host

https://github.com/Erisa/cloudflared-docker/issues/12
https://github.com/quic-go/quic-go/wiki/UDP-Buffer-Sizes

```
sudo sysctl -w net.core.rmem_max=2500000
sudo sysctl -w net.core.wmem_max=2500000
```
