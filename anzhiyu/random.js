var posts=["2024/04/02/MarkDown的基本语法使用/","2024/04/19/Stream流操作，让代码更加的优雅/","2024/03/31/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };