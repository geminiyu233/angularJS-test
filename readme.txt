从远程仓库克隆到本地
1、git clone http地址
2、本地创建自己得分支 git branch name,git pull origin name 与远程自分支同步
3、切换到要做操作得自分支 git checkout name 
4、提交修改git add 文件名 ，git commit -m "提示"
5、与远程自分支同步 git push origin name
6、切换到本地develop分支 git checkout develop
7、本地develop分支与远程的develop分支同步 git pull origin develop
8、将本地自分支合并到本地develop分支 git merge yu.shuang,产生冲突则切换到本地自分支手动修改然后add commit push到远程自分支，切换到本地develop
9、将本地develop分支push到远程develop分支
10、切换到本地自分支，合并develop分支到本地自分支 merge develop ,push到远程自分支