create theme file on `data/theme/<theme-name>.yaml` \
then config `params.yaml` to use the theme

> eg: data/theme/bp_net.yaml

```yaml
# config/_default/params.yaml
appearance:
  theme_day: bp_net
  theme_night: bp_net
```

```yaml
# theme/bp_net.yaml

name: bp_net

font: minimal

light:
  primary: "#3d72b8"
  background: "#efefef"

#  home_section_odd: "transparent"
#  home_section_even: "transparent"

  menu_primary: "#f9f9f9"
  menu_text_active: "#3d72b8"
  menu_text: "#242424"
  menu_title: "#242424"

dark:
  primary: "#2e88ff"
  background: "#141414"

#  home_section_odd: "transparent"
#  home_section_even: "transparent"

  menu_primary: "#242424"
  menu_text_active: "#2e88ff"
  menu_text: "#efefef"
  menu_title: "#efefef"


menu_hover: true
menu_border: true
menu_shadow: false
menu_blur: false
```
