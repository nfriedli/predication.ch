---
title: Trouver une prédication en ligne
layout: base
---

Un site modeste et efficace pour trouver une prédication protestante réformée en Suisse francophone.

<ul class="cards">
{% for p in collections.perso %}
<li class="card">
    <h2><a href="{{p.data.link}}" target="_blank">{{p.data.title}}</a></h2>
    <p>{{p.data.description}}</p>
</li>
{% endfor %}

{% for e in collections.eglise %}
<li class="card">

## {{e.data.title}}

<div class="links">{% for l in e.data.links %}<a href="{{l.url}}" target="_blank">{{l.title}}</a> {% endfor %}</div>

</li>
{% endfor %}

</ul>