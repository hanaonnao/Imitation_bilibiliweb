  $("#danmup").DanmuPlayer({
    src:"level5.mp4",
    height: "696px", //区域的高度
    width: "1160px" //区域的宽度
    ,urlToGetDanmu:"query.php"
    ,urlToPostDanmu:"stone.php"
  });

  $("#danmup .danmu-div").danmu("addDanmu",[
    { "text":"这是滚动弹幕" ,color:"white",size:1,position:0,time:2}
    ,{ "text":"我是帽子绿" ,color:"green",size:1,position:0,time:3}
    ,{ "text":"哈哈哈啊哈" ,color:"black",size:1,position:0,time:10}
    ,{ "text":"这是顶部弹幕" ,color:"yellow" ,size:1,position:1,time:3}
    ,{ "text":"这是底部弹幕" , color:"red" ,size:1,position:2,time:9}
    ,{ "text":"大家好，我是伊藤橙" ,color:"orange",size:1,position:1,time:3}

  ])