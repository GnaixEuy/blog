var posts=["2024/04/07/Jetbrain系列快捷键-Win版/","2024/10/24/Macos_Linux命令行操作总结归纳/","2024/04/02/MarkDown的基本语法使用/","2024/09/02/RBAC鉴权模式概论简述/","2024/04/19/Stream流操作，让代码更加的优雅/","2023/04/12/hello-world/","2024/06/18/基于IOS18 Beta 1 强制开启新版Siri UI/","2024/05/15/基于Quantumult X破解ChatGPTmacOS客户端强制启动/","2025/02/06/基于macOS的Docker化企业级知识库部署——DeepSeek-RAGFlow深度集成实践/","2024/09/10/江西武功山游记 | 迷雾与小雨中的山巅探险/","2024/02/22/如何做出伟大工作/","2024/09/30/谷歌效率秘诀-每天只工作四小时，如何做到？macOS-Linux命令行操作总结归纳-💻/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };