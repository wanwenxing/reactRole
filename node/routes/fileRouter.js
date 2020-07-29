const express = require("express");
const router = express.Router();


//路由拦截
router.post("/pros.do", (req, resp) => {
    console.log("拦截到请求");
    console.log(req);
    let data = [
        { id: 1, proName: "商品1", intro: "美丽的大自然", imgSrc: "images/1.jpg" },
        { id: 2, proName: "商品2", intro: "山川河流", imgSrc: "images/2.jpg" },
        { id: 3, proName: "商品3", intro: "自然风光", imgSrc: "images/4.jpg" }
    ].filter((item) => {
        return item.id == req.body.id;
    })
    console.log(data);
    resp.send(data);

})


//登录拦截=========================
router.post("/user/login", (req, resp) => {
    console.log("拦截到login请求");
    let userName = req.body.userName;
    let userPsw = req.body.psw;
    console.log(userName);
    console.log(userPsw);

    var userInfo = {
        "id": 7,
        "userName": "wan",
        "userHeader": "Cat.png",
        "RoleId": 1
    };


    var menuInfo = [
        {
            "menuId": 2,
            "menuName": "用户管理理",
            "menuUrl": "/index/user",
            "pathname": "userlist",/*===模块的名称==*/
            "componentPath": "user/UserManger",//---
            "menuImgClass": "el-icon-s-custom",
            "menuState": "0",
            "menuChilds": []//---------------没有子菜单
        },
        {
            "menuId": 3,
            "menuName": "角色管理理理",
            "menuUrl": "/index/role",
            "pathname": "role",
            "componentPath": "user/RoleManger",
            "menuImgClass": "el-icon-eleme",
            "menuState": "0",
            "menuChilds": [//-------------------子菜单
                {
                    "menuId": 7,
                    "menuName": "添加角色",
                    "menuUrl": "/index/role/addrole",  //----------子菜单路径
                    "pathname": "addrole",
                    "componentPath": "user/AddRole",
                    "menuImgClass": "",
                    "menuState": "0",
                    "menuChilds": [
                        {
                            "menuId": 8,
                            "menuName": "角色详情",
                            "menuUrl": "/index/role/addrole/roleInfo",
                            "pathname": "roleInfo",
                            "componentPath": "user/RoleInfo",
                            "menuImgClass": "",
                            "menuState": "0",
                            "menuChilds": []
                        }
                    ]
                },
                {
                    "menuId": 9,
                    "menuName": "角色列表",
                    "menuUrl": "/index/role/rolelist",
                    "pathname": "rolelist",
                    "componentPath": "user/RoleList",
                    "menuImgClass": "",
                    "menuState": "0",
                    "menuChilds": []
                }
            ]
        }
    ];

    let returnData={
        data:{
            userMes:userInfo,
            menuMes:menuInfo
        },
        token:"111",
        reqState:200
    };

    resp.send(returnData);


})
module.exports = router;