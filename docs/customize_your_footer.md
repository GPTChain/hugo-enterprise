
>
> 
> - footer notice
> - terms of service
> - social
> 

---

## footer notice

```yaml
# config/_default/params.yaml

footer:
  copyright:
    notice: 'Copyright ©{year} BP.NET. All Rights Reserved.'
```

u can config `params/<lang>.yaml` for localization of footer

```yaml
# config/_default/params.zh.yaml

footer:
  copyright:
    notice: '版权所有 ©{year} BP.NET.'
```

## terms of service

create terms page on `content/<lang>/terms.md`

```markdown
---
title: Terms of Service
date: 2018-02-22T06:32:10.708Z
---

lorem...

```

## social

add some social links at footer

```yaml
# config/_default/params.yaml
# config/_default/params.<lang>.yaml

footer:
  social:
    - type: email
      url: 'example@email'
    - type: github
      url: 'https://github.com/'
    - type: twitter
      url: 'https://twitter.com/'
    - type: linkedin
      url: 'https://www.linkedin.com/'
    - type: facebook
      url: 'https://www.facebook.com/'

```
