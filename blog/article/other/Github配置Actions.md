---
title: Github配置Actions
date: 2023-02-24 15:56:30
sidebar: 'auto'
tags:
 - Github
 - Actions
categories: 
 - 杂项
---

基于Github构建自己的代码不需要额外的CI服务器.

## 代码配置
代码添加CI配置,是在`.github\workflows`目录下创建`*.yml`文件就行,github会自动扫描yml结尾的文件.
```yml
name: master-build-pages
# on [push] 触发规则, [branches] 分支
on: 
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    # 依赖系统环境
    runs-on: ubuntu-latest
    # CI 流程步骤
    steps:
    # 拉取代码
    - name: Checkout
      uses: actions/checkout@master
    #  编译部署
    - name: vuepress-deploy
      uses: jenkey2011/vuepress-deploy@master
      env:
        ACCESS_TOKEN: ${{secrets.ACCESS_TOKEN}}
        BUILD_SCRIPT: npm install && npm run linux-build
        BUILD_DIR: public
        CNAME: blog.haiyinlong.cn
```

> 参考[https://github.com/jenkey2011/vuepress-deploy/](https://github.com/jenkey2011/vuepress-deploy/)


## github配置

### 生产个人token
参考 [Github搭建Maven仓库,github创建token](Github%E6%90%AD%E5%BB%BAMaven%E4%BB%93%E5%BA%93.md#github创建token)

### 配置代码仓库环境变量

![SecretEnv](/images/other/githubMaven/SecretEnv.jpg)

1. 代码仓库`Settings`
2. `secrets and variables` 关联token
3. 创建当前仓库可以使用的环境变量 `Environment secrets` 

## 测试触发
1. 本地提交代码到`master`
2. 查看触发job
![TriggerJob](/images/other/githubMaven/TriggerJob.jpg)
3. 有任务执行就说明配置好了,可以根据自己的实际情况进行修改.

