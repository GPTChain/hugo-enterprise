
> - additional js scripts
> - additional scss styles
> - website static resources

---

## Add js scripts

create a js file on `./assets/js`, and ensure that its name ends with `.main.js` (eg. `foo.main.js`) \
then website will inject the script automatically. \
u can create more scripts as long as its name is `*.main.js`

## Add scss styles

create a scss file on `./assets/scss`, and ensure that its name ends with `.main.scss` (eg. `foo.main.scss`) \
then website will inject the compiled css file automatically. \
u can create more scripts as long as its name is `*.main.scss`

## Add static files

> assuming I have the static file `foo.jpg` which wanted to set to uri `https://example.com/pictures/foo.jpg`

1. put your file into `./static/pictures/foo.jpg`

2. edit `./netlify.toml` for allowing access to the static resources

```toml
[[headers]]
  for = "/pictures/*.jpg"
  [headers.values]
    Access-Control-Allow-Origin = "*"
    Content-Type = "image/jpg"
```
