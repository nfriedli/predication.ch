project = html_title = "predication.ch"
copyright = "2022, Nicolas Friedli"
author = "Nicolas Friedli"

release = "0.2.0"

# Problèmes de canonical + pages genre opensearch...
#extensions = [ "sphinx_sitemap"]
#sitemap_url_scheme = "https://predication.ch/{link}"

templates_path = ["_templates"]

root_doc = "index"

language = "fr"

exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

today_fmt = "%A %-d %B %Y"

html_extra_path = ["_rootfiles"]
html_favicon = "_rootfiles/apple-touch-icon.png"
html_logo = "_static/logo.jpg"
html_permalinks = False
html_show_sourcelink = False
html_static_path = ["_static"]
html_theme = "alabaster"
html_use_index = False
html_use_opensearch = "https://predication.ch"

html_theme_options = {
    "show_powered_by": "True",
    "font_family": "PublicSans, Georgia, serif",
    #"head_font_family": "Roboto Slab, Roboto, system-ui, sans-serif",
    #"code_font_family": "Roboto Mono, monospace"
}