---
description: “以全新方式管理你的 Apple ID”
---

# 简介

这是一款基于密保问题的自动化 Apple ID 检测&解锁程序。

前端用于管理账号，支持添加多个账号，并提供展示账号页面；

支持创建包含多个账号的分享页面，并可以为分享页面设置密码与有效期。

后端定时检测账号是否被锁定，若被锁定或开启二步验证则自动解锁，修改密码并向API回报密码。

登录Apple ID并自动删除Apple ID中的设备。

启用代理池和Selenium集群，提高解锁成功率，防止风控。



以下是各个版本的功能对比。开源版已**停止更新**，如需继续使用，建议更换个人版或商业版。

商业版主要加入了销售功能，请根据需求选择。

开源版与Pro（个人版、商业版）使用的后端版本不同，开源版后端仅做关键功能修复，Pro后端会保持优化与更新

<table><thead><tr><th width="258">功能</th><th>开源版</th><th>个人版</th><th>商业版</th><th data-hidden>开源版</th><th data-hidden>商业版</th></tr></thead><tbody><tr><td>定时检测账号</td><td>✅</td><td>✅</td><td>✅</td><td><a href="https://emojipedia.org/zh/%E5%8B%BE%E5%8F%B7%E6%8C%89%E9%92%AE">✅</a></td><td><a href="https://emojipedia.org/zh/%E5%8B%BE%E5%8F%B7%E6%8C%89%E9%92%AE">✅</a></td></tr><tr><td>自动解锁&#x26;关闭二步验证</td><td>✅</td><td>✅</td><td>✅</td><td><a href="https://emojipedia.org/zh/%E5%8B%BE%E5%8F%B7%E6%8C%89%E9%92%AE">✅</a></td><td><a href="https://emojipedia.org/zh/%E5%8B%BE%E5%8F%B7%E6%8C%89%E9%92%AE">✅</a></td></tr><tr><td>多用户使用</td><td>✅</td><td>✅</td><td>✅</td><td><a href="https://emojipedia.org/zh/%E5%8B%BE%E5%8F%B7%E6%8C%89%E9%92%AE">✅</a></td><td><a href="https://emojipedia.org/zh/%E5%8B%BE%E5%8F%B7%E6%8C%89%E9%92%AE">✅</a></td></tr><tr><td>检测账号AppStore状态</td><td>❌</td><td>✅</td><td>✅</td><td></td><td></td></tr><tr><td>检测账号地区</td><td>❌</td><td>✅</td><td>✅</td><td></td><td></td></tr><tr><td>检测&#x26;修改账号语言</td><td>❌</td><td>✅</td><td>✅</td><td></td><td></td></tr><tr><td>分享页域名限制*</td><td>❌</td><td>✅</td><td>✅</td><td></td><td></td></tr><tr><td>批量添加账号</td><td>❌</td><td>✅</td><td>✅</td><td></td><td></td></tr><tr><td>密码自定义前缀</td><td>❌</td><td>✅</td><td>✅</td><td></td><td></td></tr><tr><td>分享页随机显示账号</td><td>❌</td><td>❌</td><td>✅</td><td></td><td></td></tr><tr><td>账号分类标签</td><td>❌</td><td>❌</td><td>✅</td><td></td><td></td></tr><tr><td>设置用户权限*</td><td>❌</td><td>❌</td><td>✅</td><td><a href="https://tw.piliapp.com/emojis/cross-mark/">❌</a></td><td><a href="https://emojipedia.org/zh/%E5%8B%BE%E5%8F%B7%E6%8C%89%E9%92%AE">✅</a></td></tr><tr><td>解锁套餐出售*</td><td>❌</td><td>❌</td><td>✅</td><td><a href="https://tw.piliapp.com/emojis/cross-mark/">❌</a></td><td><a href="https://emojipedia.org/zh/%E5%8B%BE%E5%8F%B7%E6%8C%89%E9%92%AE">✅</a></td></tr><tr><td>账号出租*</td><td>❌</td><td>❌</td><td>✅</td><td><a href="https://tw.piliapp.com/emojis/cross-mark/">❌</a></td><td><a href="https://emojipedia.org/zh/%E5%8B%BE%E5%8F%B7%E6%8C%89%E9%92%AE">✅</a></td></tr><tr><td>在线支付*</td><td>❌</td><td>❌</td><td>✅</td><td><a href="https://tw.piliapp.com/emojis/cross-mark/">❌</a></td><td><a href="https://emojipedia.org/zh/%E5%8B%BE%E5%8F%B7%E6%8C%89%E9%92%AE">✅</a></td></tr><tr><td>充值卡密</td><td>❌</td><td>❌</td><td>✅</td><td></td><td></td></tr><tr><td>账号兑换</td><td>❌</td><td>❌</td><td>✅</td><td></td><td></td></tr><tr><td>长期维护</td><td>❌</td><td>✅</td><td>✅</td><td><a href="https://tw.piliapp.com/emojis/cross-mark/">❌</a></td><td><a href="https://emojipedia.org/zh/%E5%8B%BE%E5%8F%B7%E6%8C%89%E9%92%AE">✅</a></td></tr><tr><td>授权方式</td><td>-</td><td>一次性授权</td><td>按时间/一次性</td><td></td><td></td></tr></tbody></table>

* **分享页域名限制：**仅授权的域名可以引用分享页，防止被盗用
* **设置用户权限：**可设置用户到期时间，最大账号数，最短解锁间隔等
* **解锁套餐出售：**网站自带商城功能，管理员可设置各套餐（周期，最短执行间隔等参数），供用户购买
* **账号出租：**管理员可将账号设为出租账号，为每个出租的账号设置价格（按天计费）。用户可以续租账号。
* **在线支付：**目前支持易支付和卡密充值



## Demo&#x20;

* [商业版](https://demo-b.appleidauto.org/)
* [个人版](https://demo-p.appleidauto.org/)

可注册账号体验\
\


