---
layout: page
title: Technology & Current Affairs
permalink: /tech/
---

<div class="home">
  <ul class="posts">
    {% for post in site.categories.tech %}
      <li>
        <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        <div>{{post.content}}</div>
      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>
