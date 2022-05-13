---
title: Trouver une prédication protestante en ligne
description: Liens directs vers des sites personnels et institutionnels qui proposent régulièrement des prédications en ligne. 
layout: base
---

<ul class="cards">

{% for p in collections.perso %}
<li class="card">
    <h2><a href="{{p.data.link}}" target="_blank">{{p.data.title}}</a></h2>
    <p>{{p.data.description}}</p>
    <a href="{{ p.url }}" title="Page: {{ p.data.title }}" class="permalink">#</a>
</li>
{% endfor %}

{% for e in collections.eglise %}
<li class="card">
    <h2>{{e.data.title}}</h2>
    <p class="links">
        {% for l in e.data.links -%}
            <a href="{{l.url}}" target="_blank">{{l.title}}</a>  
        {% endfor -%}
    </p>
    <a href="{{ e.url }}" title="Page: {{ e.data.title }}" class="permalink">#</a>
</li>
{% endfor %}

</ul>
