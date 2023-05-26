>
> - content structure
> - general content metadata
> - content background

---

## content header

content files always starts with a header which is yaml format, its structure be like:

```markdown
---

# here is header content

title: Title
weight: 10
---
here is markdown content
```

header config some metadata for the content. \
when hugo build the page, metadata will be used in wowchemy's template by `.Params` such as `.Params.title`. \
to learn more about content's header, please visit
website: [Wowchemy Docs](https://wowchemy.com/docs/content/front-matter/)

---

## general metadata

> https://wowchemy.com/docs/content/page-features/

| name     | comment                                            |
|----------|----------------------------------------------------|
| title    | title of the page                                  |
| subtitle | optional subtile that will display under the title |
| summary  | a summary of content which is benefit for seo      |
| tag      | tagging your content for searching and archive     |
| date     | the RFC 3339 date that the page was published      |
| lastmod  | the RFC 3339 date that the page was last modified  |
| draft    | if true, the page will be invisible in prod mode   |

---

## background 

> https://wowchemy.com/docs/getting-started/page-builder/#background

### background-color

```yaml
design: 
  background:
    # Choose a color such as from https://html-color-codes.info
    color: 'navy'
    text_color_light: true
```

### background-gradient-color

```yaml
design: 
  background:
    gradient_start: '#4bb4e3'
    gradient_end: '#2b94c3'
    gradient_angle: 180
    text_color_light: true
```

### background-image

```yaml
design:
  background:
    image:
      # Name of image in `assets/media/`.
      filename: background.jpg
      # Apply image filters?
      filters:
        # Darken the image? Range 0-1 where 1 is transparent and 0 is opaque.
        brightness: 0.6
      #  Image fit. Options are `cover` (default), `contain`, or `actual` size.
      size: cover
      # Image focal point. Options include `left`, `center` (default), or `right`.
      position: center
      # Use a fun parallax-like fixed background effect on desktop? true/false
      parallax: true
      # Text color (true=light, false=dark, or remove for the dynamic theme color).
      text_color_light: true
```

### background-video

```yaml
design: 
  background:
    text_color_light: true
    video:
      # Name of video in `assets/media/`.
      filename: background-video.mp4
      # Post-processing: flip the video horizontally?
      flip: false
```
