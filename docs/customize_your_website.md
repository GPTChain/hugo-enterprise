
> - favicon
> - baseurl
> - title
> - localization
> - fontSize

---

favicon filename: `assets/media/icon.png`

baseurl: 

```yaml
# config/_default/config.yaml

baseurl: 'https://bp.net/' # Website URL
```

title

```yaml
# config/_default/languages.yaml

en:
  title: BP.NET Website
  contentDir: content/en

zh:
  title: BP.NET 中文官网
  contentDir: content/zh-hans

zh-Hant:
  title: BP.NET 中文官網
  contentDir: content/zh-hant
```


localization

```yaml
# config/_default/params.yaml
locale:
  date_format: 'Jan 2, 2006'
  time_format: '3:04 PM'
```

fontSize (default: `l`): `xs, s, m, l, xl`

```yaml
# config/_default/params.yaml
font_size: l
```

