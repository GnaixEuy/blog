var posts=["2024/04/07/Jetbrain系列快捷键-Win版/","2024/04/02/MarkDown的基本语法使用/","2023/04/12/hello-world/","2024/04/19/Stream流操作，让代码更加的优雅/","2024/05/15/基于Quantumult X破解ChatGPTmacOS客户端强制启动/","2024/06/18/基于IOS18 Beta 1 强制开启新版Siri UI/","2024/02/22/如何做出伟大工作/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };