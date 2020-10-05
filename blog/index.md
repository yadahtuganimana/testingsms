---
layout: defaultindex.liquid
title: our blogs
morelink: url
---

{% for myblogs in collections.blog %}

<div class="card" style="width: 18rem">
  <img src="{{myblogs.data.image}}" class="card-img-top" alt="..." />
  <div class="card-body">
    <a href="{{myblogs.url}}"><h6>{{myblogs.data.title}}</h6></a>
    <p class="card-text">{{myblogs.data.summary}}
    <a href="{{myblogs.url}}" class="btn btn-link">more</a></p>
  </div>
</div>
{% endfor %}

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium earum in
  reiciendis alias, labore dolore nesciunt adipisci animi excepturi nam
  perferendis dolorem eius illo quos sequi consequuntur provident obcaecati.
  Quam.
</p>
<button class="btn btn-primary btn-lg">button</button>
