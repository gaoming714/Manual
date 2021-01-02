# sublime

------

## key  sublime3

```
----- BEGIN LICENSE -----
sgbteam
Single User License
EA7E-1153259
8891CBB9 F1513E4F 1A3405C1 A865D53F
115F202E 7B91AB2D 0D2A40ED 352B269B
76E84F0B CD69BFC7 59F2DFEF E267328F
215652A3 E88F9D8F 4C38E3BA 5B2DAAE4
969624E7 DC9CD4D5 717FB40C 1B9738CF
20B3C4F1 E917B5B3 87C38D9C ACCE7DD8
5F7EF854 86B9743C FADC04AA FB0DA5C0
F913BE58 42FEA319 F954EFDD AE881E0B
------ END LICENSE ------
```

##  packagecontrol.io/installation

The console is accessed via the ctrl+` shortcut or the View > Show Console menu.

```
import urllib.request,os,hashlib; h = '6f4c264a24d933ce70df5dedcf1dcaee' + 'ebe013ee18cced0ef93d5f746d80ef60'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```


## packages

aterial Theme
arkdown Preview
Emmet
JsForamt
TrailingSpaces
BracketHightlighter
DocBlockr
Filediffs
Compare Side-By-Side
A File Icon
HTMLBeautify

## 配置文件

{
    "always_show_minimap_viewport": true,
    "color_scheme": "Packages/Material Theme/schemes/Material-Theme.tmTheme",
    "default_line_ending": "unix",
    "font_face": "Source Code Pro Semibold",
    "font_options":
    [
        "gray_antialias",
        "subpixel_antialias"
    ],
    "font_size": 12,
    "ignored_packages":
    [
    ],
    "indent_guide_options":
    [
        "draw_normal",
        "draw_active"
    ],
    "line_padding_bottom": 0,
    "line_padding_top": 0,
    "overlay_scroll_bars": "enabled",
    "tab_size": 4,
    "theme": "Material-Theme.sublime-theme",
    "translate_tabs_to_spaces": true,
    "word_wrap": "true"
}





