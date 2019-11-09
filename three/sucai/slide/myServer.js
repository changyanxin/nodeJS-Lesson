const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
var qs=require("querystring");
//对象
const chapter = require('./detail');
var chosenChapter={};
var params=0;
// console.log(chapterList.chapterList);
/**
博客详情页：通过点击博客列表的阅读全文打开 ，访问地址类似 http://localhost:8083/detail?chapterId=4    对应静态页chapter.html
 */
/**
 * 1. 访问特定资源路径显示对应页面
 * 
 * 2. 博客列表数据从服务端获取
 * 通过ajax发起请求从服务端获取数据
 * $.get("",function(data){
 * })
 * 
 * 3. 动态生成超链接
 * http://localhost:8083/detail?chapterId=
 * 
 * 4. 文章详情页
 * $.get
 */
http.createServer(function(req,res){
    console.log(chapterList);
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(pathName == '/list'){
        var chapterList = "chapterList";
        showHTML(res,chapterList);
    }else if(pathName == '/login'){
        var login = "login";
        showHTML(res,login);
    }else if(pathName == '/listmanager'){
        var list = 'list';
        showHTML(res,list);
    }else if(pathName == '/addChapter'){
        var addChapter = "addChapter";
        showHTML(res,addChapter);
    }else if(pathName.indexOf("css")>=0){
        showCSS(res,pathName);
    }else if(pathName.indexOf("images")>=0){
        showImages(res,pathName);
    }else if(pathName.indexOf("js")>=0){
        showJS(res,pathName);
    }else if(pathName.indexOf("login")>=0){
        //登录页面图片
        showImages(res,pathName);
    }else if(pathName == '/getuserdata'){
        check(req,res);
    }else if(pathName == '/detail'){
        //阅读全文
        // console.log(JSON.stringify(chapter.chapterList));
        // console.log('/detail mySever.js');
        params = url.parse(req.url, true).query.chapterId; 
        res.write(JSON.stringify(chapter.chapterList));
        res.end();
    }else if(pathName == '/getdetail'){
        res.writeHead(200,{'Content-Type':'text/json'});
        chosenChapter=chapter.chapterList[params];  
        res.end(JSON.stringify(chosenChapter));
    }else if(req.url == '/add'){
        console.log("收到");
        var newChapter = {};
        
        var postData = ""; 
        // 数据块接收中
         req.addListener("data", function (postDataChunk) {
            postData += postDataChunk;

            var title=qs.parse(postData).title;
            var content=qs.parse(postData).content;
            console.log(qs.parse(postData));

            newChapter.chapterId=chapter.chapterList.length+1;
            newChapter.chapterName=title;
            newChapter.chapterDes=content;
            newChapter.chapterContent=content;
            newChapter.publishTimer= "2019-08-19";
            newChapter.author="admin";
            newChapter.views=1022;
            newChapter.imgPath='';
            chapter.chapterList.push(newChapter);
        })
    }
        
}).listen(8083);
console.log(8083);

function check(req,res){
    // console.log("check");
    var params = url.parse(req.url, true).query;
    // console.log(params);
    // console.log(params.username);
    var userList = [
        {username: "admin", pwd: "admin"}
    ];
    // console.log(userList[0].username);
    var result = false;
    for(var item in params){
        // console.log(params[item]);
        // console.log(userList[0][item]);
        if(params[item] == userList[0][item]){
            result = true;
        }else{
            result = false;
        }
    }
    if(result == true){
        console.log("正确");
    }else{
        console.log("错误");
    }
}
function showJS(res,pathName){
    var JSFilePath = path.join(__dirname,pathName);
    // console.log(pathName);
    // console.log(JSFilePath);
    var JSFileContent = fs.readFileSync(JSFilePath);
    res.writeHead(200,{"Content-Type":"application/js"});
    res.write(JSFileContent);
    res.end();
}
function showCSS(res,pathName){
    // console.log(pathName);
    var CSSFilePath = path.join(__dirname,pathName);
    // console.log(CSSFilePath);
    var CSSContent = fs.readFileSync(CSSFilePath);
    res.writeHead(200,{'Content-Type':'text/css'});
    res.write(CSSContent);
    res.end();
}
function showHTML(res,pathName){
    var htmlPath = path.join(__dirname,'/'+pathName+'.html');
    // console.log(htmlPath);
    var htmlContent = fs.readFileSync(htmlPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
}
function showImages(res,pathName){
    var imgPath = path.join(__dirname,pathName);
    // console.log(pathName);
    // console.log(imgPath);
    fs.readFile(imgPath,'binary',function(err,data){
        if(err){
            console.log("输出错误");
        }else{
            res.write(data,'binary');
            res.end();
        }
    })
}
// function showList(res){
//     var listPath = path.join(__dirname,'/list.html');
//     var listContent = fs.readFileSync(listPath);
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write(listContent);
//     res.end();
// }
// function showAddChapter(res){
//     var addChapterPath = path.join(__dirname,'./addChapter.html');
//     var addChapterContent = fs.readFileSync(addChapterPath);
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write(addChapterContent);
//     res.end();
// }
