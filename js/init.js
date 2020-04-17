var da=
[
  "juruo",
  "27946",
  "4",
  "akioi",
  "slfn",
  "34886",
  "250637",
  "45dinotlep1000",
  "你通关了！",
];

var main=document.getElementById("main");
function init(str)
{
  main.innerHTML="";
  if(str==-1)
  {
    main.innerHTML+="恭喜！你通关了！<br/>\n";
    main.innerHTML+="后面可能还会更新，请耐心等待！！！<br/>\n";
    main.innerHTML+="最后放一张<s>珂爱</s>帅气的银角宝宝：<br/>\n";
    main.innerHTML+="<img src=\"https://cdn.luogu.com.cn/upload/image_hosting/latx7kx1.png\"><br/>\n";
  }
  else if(str==1)
  {
    main.innerHTML+="欢迎来到45dino Nazo。<br/>\n";
    main.innerHTML+="我想你应该拿到了一个exe文件，只要输入每一关的答案，就会显示下一关的网址。<br/>\n";
    main.innerHTML+="请不要跳关。<br/>\n";
    main.innerHTML+="建议不要关掉这个exe文件，否则你就会从头开始。<br/>\n";
    main.innerHTML+="如果你输入网址后变乘了404，说明你写错了。<br/>\n";
    main.innerHTML+="所有关卡的答案都是英文小写字母或数字，<b>没有空格</b>，如果是中文请把它写成拼音，而且会在关卡号上有所标记，比如这一关。<br/>\n";
    main.innerHTML+="会出现Hint之类的东西，对解题很有帮助！<br/>\n";
    main.innerHTML+="Hint：蒟蒻<br/>\n";
    main.innerHTML+="有<img src=\"http://www.hit-counts.com/counter.php?t=MTQ0NzUxOA==\">人来过这里<br/>\n";
  }
  else if(str==2)
  {
    main.innerHTML+="恭喜你，通过了第一关！！！<br/>\n";
    main.innerHTML+="谁线段树做A+B？<br/>\n";
    main.innerHTML+="Hint：这个人出过两次个人公开赛，并且答案是数字。<br/>\n";
    main.innerHTML+="有<img src=\"http://www.hit-counts.com/counter.php?t=MTQ0NzUyMg==\">人来过这里<br/>\n";
  }
  else if(str==3)
  {
    main.innerHTML+="45dino有几个号？<br/>\n";
    main.innerHTML+="Hint:或许你需要在洛谷上找一个有很多人名的地方。<br/>\n";
    main.innerHTML+="有<img src=\"http://www.hit-counts.com/counter.php?t=MTQ0NzUyMw\">人来过这里<br/>\n";
  }
  else if(str==4)
  {
    main.innerHTML+="25945<br/>\n";
    main.innerHTML+="Hint：想想洛谷什么功能有5位数字。<br/>\n";
    main.innerHTML+="在侧边栏可以找到哦，答案要改成小写英文字母，不要有空格。<br/>\n";
  }
  else if(str==5)
  {
    main.innerHTML+="？的校学个哪是onid54<br/>\n";
    main.innerHTML+="！式格案答意注：tniH<br/>\n";
  }
  else if(str==6)
  {
    main.innerHTML+="45dino开始恶搞管理（狗头保命<br/>\n";
    main.innerHTML+="如果你是一个买飞机（飞机模型）的，你应该去找那个管理推销？（危<br/>\n";
    main.innerHTML+="#define 那 哪<br/>\n";
    main.innerHTML+="Hint：Take it serious,print out numbers.<br/>\n";
  }
  else if(str==7)
  {
    main.innerHTML+="<s>继续恶搞管理</s>算了不敢了<br/>\n";
    main.innerHTML+="套套套套娃娃娃娃<br/>\n";
    main.innerHTML+="Hint：这是一个用户，他是谁呢？答案是数字。<br/>\n";
  }
  else if(str==8)
  {
    main.innerHTML+="45dino打算出一些毒瘤题。<br/>\n";
    main.innerHTML+="但首先你要先找到它。<br/>\n";
    main.innerHTML+="3 83 457<br/>\n";
    main.innerHTML+="Hint：思考一下，什么东西是和6位数有关，或是……什么东西与这六个数字（3个数）有关<br/>\n";
    main.innerHTML+="请按照格式输出答案。<br/>\n";
  }
  else if(str==9)
  {
    main.innerHTML+="我想你已经知道，45dino连P1000都会TLE。<br/>\n";
    main.innerHTML+="Hint：<img src=\"https://cdn.luogu.com.cn/upload/image_hosting/51d80tin.png\"><br/>\n"; 
    main.innerHTML+="或许你需要一些工具，比如<a href=\"http://tool.uixsj.cn/\">这个</a><br/>\n";
  }
}