

> 
> - homepage folders & structure
> - homepage index.md
> 

> Wowchemy Reference:\
> https://wowchemy.com/docs/content/landing-pages/

---

folders: `content/<lang>/home`
- `content/en/home`
- `content/zh-hans/home`
- `content/zh-hant/home`

structure:

| filename                              | comment           |
|---------------------------------------|-------------------|
| `content/<lang>/home/index.md`        | widget page entry |
| `content/<lang>/home/<section_id>.md` | widget section    |

---

## index.md

in the header section, `index.md` declares that homepage is a `widget_page`, which use template `layout/partials/widget_page.html`.
so we can add some widget section for this widget_page.

```md
---
type: widget_page
headless: true
---
```

## home page sections

create section `content/<lang>/home/foo-section.md` as a `widget_section`

`weight` specifies the order of widgets.

`widget` specifies what widget template would be use. for example, `widget: blank` means that its template is `layout/partials/widgets/blank.html` 

```markdown
---
weight: 10
widget: blank
title: Foo Section
---
Descriptions
```
