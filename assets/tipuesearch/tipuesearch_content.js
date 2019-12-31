---
---
{%- assign counter = site.posts.size -%}
{%- assign index = 1 -%}
{%- if counter != 0 -%}
var tipuesearch = {"pages": [
{% for post in site.posts %}
{ "title": "{{post.title}}", "tags": "{{post.tags}}", "text": "text", "url": "{{post.url | prepend: site.url}}"}{%- if index < counter -%},{% endif %}
{%- assign index = index | plus: 1 -%}
{% endfor %}
]};
{%- endif -%}
