#基于React——天气查询网页

###1.简要介绍

实现一个简单的天气查询功能，使用了 **聚合数据** 的API接口，
注意：只限于国内城市的天气查询，城市名称仅限中文。

---

###2.使用事项
1. clone项目/下载压缩包 到本地

2. 安装项目所需的包 
> npm install

3. 使用webpack打包并启动项目(！注意：占用8080端口)
>npm run build

5. 最终结果,访问页面
>localhost:8080

---


###3.更新日志

>2016-8-28 内容：对webpack打包做了优化处理，包括异步加载和第三方依赖分离，修复了图片打包问题。


---

###4.更多细节

**1.项目结构说明**

```text
    app -- 前端项目代码
        app/components -- 基本组件
        app/config -- 前端路由
        app/container -- 组合组件
        app/utils -- 前端API接口/其他
        index.js -- 前端JavaScript入口
    
    assets -- 前端图片等资源
    config -- webpack打包配置文件
    node_modules -- 第三方依赖库
    
    server -- 后端代码
        server/public -- 后端静态资源
        server/server.js -- 简单的后端服务器
        server/weatherAPI.js -- 后端WebSocket接口
    
    .babelrc -- babel配置文件
    .package.json -- 项目配置文件
    .webpack.config.js -- webpack入口
```

**2.API接口说明**

 **吐槽点：** 聚合数据对JavaScript的支持度不友好，大多数不支持JSONP
 
 **解决办法：** 在前端页面直接GET数据引起跨域的问题，且考虑到数据接口的个人账户问题。
 果断将API数据请求放在了服务端，并通过前端去请求。因为考虑到服务器请求数据是个耗时过
 程，前端必须等待服务端先拿到数据再处理，第一个想到的办法就是轮询。最后决定用WebSocket
 来替代轮询（这里使用Socket.io库）。
 
 **3.技术难点：实现两个独立组件之间的通信**
 
 **问题原因：**
 说到这里，我很惭愧。这完全是因为我的水平问题造成的。限于狭隘的思想，我一开始执着于
 为这两个独立组件添加共同父级组件，然后通过父级向子集传递回调函数的方法来实现信息传
 递。造成的结果是，组件嵌套加深进而导致了代码构建难度大大增加。
 
 **解决办法：**
 其实这个问题很容易解决，我专注于自己的思想而没有在合适的时间去进行合理的问题搜索。
 前辈早有戒言，了解一番后。比较合适的有 **触发器/广播** 这两种解决方式。这里我采用
 了 **event-emitter** 的模块实现触发器，从而用简单的代码实现了两个独立组件的通讯
 
 **4.更多改进**
 
 这一部分是我设想的，我会在较短的时间去实现它。
 
 **缺点一：现在的城市名必须完全匹配，且为中文**
 
 **缺点二：没有实现自动提示的功能**
 
 
 我希望改进后，能做到简单的模糊搜索，类似于输入hangzhou，hz等都能识别，且能在输入时
 动态的更新天气。
 
 还有值得提到的一点，就是安全监测的功能，考虑到监测到的问题会反馈到
 我的邮箱，我还是将这部分代码给删除了。这个是一个安全监测的网站，非常不错。
 >https://getsentry.com
 
 ---
 
###5.其他说明###
 
 首先推荐一个国外的课程 ReactJS Program,基础课程是免费的.
 >http://courses.reactjsprogram.com/
 
 我很感谢它将我领进React的大门。顺便一提，它的其他课程并
 不便宜，不过个人有合买的倾向（留言就行）。
 
 

 
 
 
 
 
 
 
 
 
 




  
  
 
