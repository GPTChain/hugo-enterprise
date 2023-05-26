

> - logo
> - params
> - menu items

---

logo image filename: `assets/media/logo.png`

config the params below to customize your header

```yaml
# config/_default/params.yaml
header:
  navbar:
    enable: true
    align: r
    highlight_active_link: true
    show_language: true
    show_translations: true
    show_day_night: true
    show_search: true
    show_logo: true
```

config `menus.yaml` below to edit menu items

```yaml
# config/_default/menus.yaml

main:
  - name: menu_item_home
    url: /
    weight: 10

  - name: menu_item_about
    url: about/
    weight: 100
```

then config `i18n/<lang>.yaml` for localization of items name

```yaml
# i18n/zh.yaml

- id: menu_item_home
  translation: 主页
- id: menu_item_about
  translation: 关于
```
