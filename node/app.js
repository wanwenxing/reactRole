
//=======================简单搭建服务器===========================================
const express=require("express");
const logger=require("morgan");//日志模块
const favicon=require("serve-favicon");//小图标

//引入session和cookie 模块
const session=require("express-session");
const cookieParser=require("cookie-parser");
//引入自己的路由
const route4=require("./routes/fileRouter");
//引用post模块
const bodyParser=require("body-parser");


//引用mysql
const mysql=require("mysql");

//引用path
const path=require("path");

const app=express();//执行express全局函数，返回一个express服务器对象

//=============框架的配置
//2.日志模块，能够记录每次请求信息，并在调试台看到
app.use(logger("dev"));//调用日志，配置为dev模式

//使用post模块
app.use(bodyParser.urlencoded({limit:"50mb",extended:true,parameterLimit:50000}));
app.use(bodyParser.json({limit:"50mb"}));

//================================对cookie进行设置==========================
app.use(cookieParser());
app.use(session({
    name:"aa",
    secret:"123123",
    resave:true,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60*24,
        rolling:true
    }
}));
//=======CORS拦截所有进入的请求，允许所有来源访问
app.use("*",(req,resp,next)=>{
    resp.header("Access-Control-Allow-Origin","*");//允许所有来源访问
    resp.header("Access-Control-Allow-Headers","X-Requested-With");//响应头设置
    resp.header("Access-Control-Allow-Headers","Origin");//响应头设置
    resp.header("Access-Control-Allow-Headers","Content-Type");//响应头设置
    resp.header('Access-Control-Allow-Methods:GET,POST, PUT,DELETE,OPTIONS,PATCH');//允许访问的形式
    resp.header("Content-Type","application/json;charset=utf-8");//针对post请求

    next();//在设置完成之后，请求什么就给什么 ，即进行下一步操作
});
//使用自己定义的路由
app.use(route4);
//===================配置ejs视图引擎===================
app.set("views",path.join(__dirname,"view"));//配置视图路径

app.set("view engine","ejs");//配置视图引擎


//1.设置静态资源路径（可以是任何可能运行的文件路径，它会一次执行，找到指定运行的文件）
app.use(express.static(__dirname+"/public"));//_dirname指向当前文件的根目录
app.use(express.static(__dirname+"/public/css"));
app.use(express.static(__dirname+"/public/js"));
app.use(express.static(__dirname+"/public/images"));
//app.use(express.static(__dirname+"/public/html"));


//3.设置小图标
app.use(favicon(__dirname+"/public/favicon.ico"));


//设置端口
app.set("port",8080);

app.listen(8080,()=>{
    console.log("服务启动"+app.get("port"));
})

