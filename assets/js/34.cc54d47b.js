(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{531:function(e,n,o){"use strict";o.r(n);var r=o(6),l=Object(r.a)({},(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"rclone-是一款的命令行工具-支持在不同对象存储、网盘间同步、上传、下载数据。"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rclone-是一款的命令行工具-支持在不同对象存储、网盘间同步、上传、下载数据。"}},[e._v("#")]),e._v(" Rclone 是一款的命令行工具，支持在不同对象存储、网盘间同步、上传、下载数据。")]),e._v(" "),o("p",[e._v("官网网址：https://rclone.org\nGithub 项目：https://github.com/ncw/rclone")]),e._v(" "),o("h2",{attrs:{id:"ubuntu-使用编译的执行文件安装"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-使用编译的执行文件安装"}},[e._v("#")]),e._v(" ubuntu 使用编译的执行文件安装")]),e._v(" "),o("ul",[o("li",[e._v("github 下载下载对应的版本\n"),o("code",[e._v("curl -O https://downloads.rclone.org/rclone-current-linux-amd64.zip unzip rclone-current-linux-amd64.zip cd rclone-*-linux-amd64")])]),e._v(" "),o("li",[e._v("copy 执行文件到 /usr/bin 目录")]),e._v(" "),o("li",[e._v("设置执行权限\n"),o("code",[e._v("sudo cp rclone /usr/bin/ sudo chown root:root /usr/bin/rclone sudo chmod 755 /usr/bin/rclone")])]),e._v(" "),o("li",[e._v("其他设置\n"),o("code",[e._v("sudo mkdir -p /usr/local/share/man/man1 sudo cp rclone.1 /usr/local/share/man/man1/ sudo mandb")])])]),e._v(" "),o("h2",{attrs:{id:"配置挂载"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#配置挂载"}},[e._v("#")]),e._v(" 配置挂载")]),e._v(" "),o("ul",[o("li",[e._v("将 mac 或者其他系统生成的 config 文件直接拷贝到 ubuntu /root/.config/rclone 的配置文件中")]),e._v(" "),o("li",[e._v("执行 rclone config 命令则可以查看到相关的网盘配置")]),e._v(" "),o("li",[e._v("挂载到系统文件夹\n"),o("code",[e._v("sudo rclone mount onedrive:light /adrive/one --copy-links --no-gzip-encoding --no-check-certificate --allow-other --allow-non-empty --umask 000")])]),e._v(" "),o("li",[e._v("解释 挂载 onedrive（remotes 的名字）下面的 light 文件夹到系统根目录/adrive/one 文件夹下面")])]),e._v(" "),o("h2",{attrs:{id:"设置开机启动挂载"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#设置开机启动挂载"}},[e._v("#")]),e._v(" 设置开机启动挂载")]),e._v(" "),o("ul",[o("li",[e._v("新建一个 rclone.service 文件：\n"),o("code",[e._v("vi /usr/lib/systemd/system/rclone.service")])]),e._v(" "),o("li",[e._v("写入\n`\n[Unit]\nDescription=rclone")])]),e._v(" "),o("p",[e._v("[Service]\nUser=root\nExecStart=/usr/bin/rclone mount onedrive:light /adrive/one --copy-links --no-gzip-encoding --no-check-certificate --allow-other --allow-non-empty --umask 000")]),e._v(" "),o("p",[e._v("[Install]\nWantedBy=multi-user.target\n`")]),e._v(" "),o("ul",[o("li",[e._v("保存退出")])]),e._v(" "),o("h2",{attrs:{id:"重载-daemon-让新的服务文件生效"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#重载-daemon-让新的服务文件生效"}},[e._v("#")]),e._v(" 重载 daemon，让新的服务文件生效")]),e._v(" "),o("p",[o("code",[e._v("systemctl daemon-reload")])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("使用 systemctl 来启动 rclone\n"),o("code",[e._v("systemctl start rclone")])])]),e._v(" "),o("li",[o("p",[e._v("设置开机启动：\n`\nsystemctl enable rclone\n// 停止、查看状态可以用：")]),e._v(" "),o("p",[e._v("systemctl stop rclone\nystemctl status rclone\n`")])]),e._v(" "),o("li",[o("p",[e._v("常用的 rclone 命令有：\n"),o("code",[e._v("rclone config - 以控制会话的形式添加rclone的配置，配置保存在.rclone.conf文件中。 rclone copy - 将文件从源复制到目的地址，跳过已复制完成的。 rclone sync - 将源数据同步到目的地址，只更新目的地址的数据。 rclone move - 将源数据移动到目的地址。 rclone delete - 删除指定路径下的文件内容。 rclone purge - 清空指定路径下所有文件数据。 rclone mkdir - 创建一个新目录。 rclone rmdir - 删除空目录。 rclone check - 检查源和目的地址数据是否匹配。 rclone ls - 列出指定路径下所有的文件以及文件大小和路径。 rclone lsd - 列出指定路径下所有的目录/容器/桶。 rclone lsl - 列出指定路径下所有文件以及修改时间、文件大小和路径。 rclone md5sum - 为指定路径下的所有文件产生一个md5sum文件。 rclone sha1sum - 为指定路径下的所有文件产生一个sha1sum文件。 rclone size - 获取指定路径下，文件内容的总大小。. rclone version - 查看当前版本。 rclone cleanup - 清空remote。 rclone dedupe - 交互式查找重复文件，进行删除/重命名操作。")])])])]),e._v(" "),o("h2",{attrs:{id:"mac-系统安装-rclone-生成配置文件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mac-系统安装-rclone-生成配置文件"}},[e._v("#")]),e._v(" Mac 系统安装 rclone,生成配置文件")]),e._v(" "),o("ul",[o("li",[e._v("安装和 ubuntu 类似")]),e._v(" "),o("li",[e._v("执行 rclone config")]),e._v(" "),o("li",[e._v("选择新建")]),e._v(" "),o("li",[e._v("前往 Azure 管理后台 https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade")]),e._v(" "),o("li",[e._v("新建一个应用，获取 client_id,新建一个密钥 client_secret")]),e._v(" "),o("li",[e._v("应用回调地址填写：http://localhost:53682/")]),e._v(" "),o("li",[e._v("浏览器会自动打开网页进行授权回去 refresh token")]),e._v(" "),o("li",[e._v("配置完成在终端可以查看到完整的 conf 信息，保存备用")]),e._v(" "),o("li",[e._v("rclone lsd onedrive: 可以查看挂载的文件")])])])}),[],!1,null,null,null);n.default=l.exports}}]);