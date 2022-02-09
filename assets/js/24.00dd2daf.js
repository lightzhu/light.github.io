(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{524:function(t,s,a){"use strict";a.r(s);var e=a(6),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_3d-性能优化-3d-模型-gltf-文件压缩探索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3d-性能优化-3d-模型-gltf-文件压缩探索"}},[t._v("#")]),t._v(" 3D 性能优化 | 3D 模型 glTF 文件压缩探索")]),t._v(" "),a("div",{staticClass:"center"},[a("img",{staticClass:"mcenter",staticStyle:{height:"200px"},attrs:{src:"https://gitee.com/lightzhu/picgo/raw/master/blog-thumbnail.png"}})]),t._v(" "),a("h2",{attrs:{id:"了解-gltf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解-gltf"}},[t._v("#")]),t._v(" 了解 GLTF")]),t._v(" "),a("p",[t._v("是三维场景和模型的标准文件格式，glTF 格式本质上是一个 JSON 文件。这一文件描述了整个 3D 场景的内容。它包含了对场景结构进行描述的场景图。场景中的 3D 对象通过场景结点引用网格进行定义。如下图：materials 和 meshes 分别描述了材质及网格信息")]),t._v(" "),a("div",{staticClass:"center"},[a("img",{staticStyle:{height:"350px"},attrs:{src:"https://gitee.com/lightzhu/picgo/raw/master/gltf元素json.png"}})]),t._v(" "),a("p",[t._v("glTF 文件有两种拓展形式，.gltf（JSON / ASCII）或.glb（二进制）。.gltf 文件可能是自包含的，也可能引用外部二进制和纹理资源，而 .glb 文件则是完全自包含的。一般情况下 gltf 格式的模型文件包括在同一个文件夹下的 json 描述及二进制数据.bin 和纹理贴图.png.jpg，例如下图：")]),t._v(" "),a("div",{staticClass:"center"},[a("img",{staticStyle:{height:"350px"},attrs:{src:"https://gitee.com/lightzhu/picgo/raw/master/gltf文件构成.jpg"}})]),t._v(" "),a("h2",{attrs:{id:"gltf-格式模型压缩打体可通过下面几种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gltf-格式模型压缩打体可通过下面几种方式"}},[t._v("#")]),t._v(" gltf 格式模型压缩打体可通过下面几种方式")]),t._v(" "),a("h3",{attrs:{id:"转二进制-分离贴图图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转二进制-分离贴图图片"}},[t._v("#")]),t._v(" 转二进制,分离贴图图片")]),t._v(" "),a("ul",[a("li",[t._v("gltf 自身包含二进制数据的格式，由于数据是通过 base64 位编码的形式通过 uri 的引用，会额外增加约 33%编码资源。所以初级的压缩策略：拆分二进制数据及纹理贴图，服务器开启 gzip")])]),t._v(" "),a("h3",{attrs:{id:"gltf-转成-glb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gltf-转成-glb"}},[t._v("#")]),t._v(" .gltf 转成.glb")]),t._v(" "),a("ul",[a("li",[t._v("上面的方法依然没有解决.gltf 文件编码（明文需要编码）问题所带来的增加额外空间的问题。压缩策略二：将.gltf 转成.glb（一种容器格式 Binary glTF）。\n"),a("div",{staticClass:"center"},[a("img",{staticStyle:{height:"350px"},attrs:{src:"https://gitee.com/lightzhu/picgo/raw/master/gltftoglb.png"}})])])]),t._v(" "),a("h3",{attrs:{id:"khr-mesh-quantization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#khr-mesh-quantization"}},[t._v("#")]),t._v(" KHR_mesh_quantization")]),t._v(" "),a("ul",[a("li",[t._v("向量化。顶点属性通常使用 FLOAT 类型存储，将原始始浮点值转换为 16 位或 8 位存储以适应统一的 3D 或 2D 网格，也就是我们所说的 quantization 向量化，该插件主要就是将其向量化(精度会有丢失)。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("效果：顶点POSITION\t（（x,y,z）12 字节）=> 8 字节\n\t  纹理坐标TEXCOORD（（u,v）8 字节）\t  => 4 字节\n    法线NORMAL\t\t  （（x,y,z）12 字节）=> 4 字节\n\t  切线TANGENT\t\t  （16 字节）\t        => 4 字节\n")])])]),a("div",{staticClass:"center"},[a("img",{staticStyle:{height:"350px"},attrs:{src:"https://gitee.com/lightzhu/picgo/raw/master/glbtoquantization.png"}})]),t._v(" "),a("h3",{attrs:{id:"ext-meshopt-compression"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ext-meshopt-compression"}},[t._v("#")]),t._v(" EXT_meshopt_compression")]),t._v(" "),a("ul",[a("li",[t._v("针对 GPU 效率进行了优化，除了优化压缩率之外，压缩格式还具有两个特性——非常快速的解码（MeshoptDecoder 解码器使用 WebAssembly SIMD，在现代桌面硬件上以约 1 GB/秒的速度运行），以及与通用压缩兼容的字节存储。不是尽可能地减少编码大小，而是以通用压缩器进一步压缩的方式构建比特流，基本没有数据损失。")])]),t._v(" "),a("div",{staticClass:"center"},[a("img",{staticStyle:{height:"350px"},attrs:{src:"https://gitee.com/lightzhu/picgo/raw/master/meshopt-compression.png"}})]),t._v(" "),a("h3",{attrs:{id:"draco-网格压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#draco-网格压缩"}},[t._v("#")]),t._v(" DRACO 网格压缩")]),t._v(" "),a("ul",[a("li",[t._v("采用源于谷歌的开源 Draco 算法，用于压缩和解压缩 3D 网格和点云，Edge breaker 3D 压缩算法改变了模型的网格数据的索引方法，缺少了原来的网格顺序。通过减少顶点坐标、顶点纹理坐标等信息的位数，以减少数据的存储量，压缩的使文件小得多，客户端设备上需要额外的解码器 DRACOLoader（WebAssembly wasm）和解码时间并且可能会出现较明显的画质损失，但是可以设置压缩级别减少损失。")])]),t._v(" "),a("div",{staticClass:"center"},[a("img",{staticStyle:{height:"350px"},attrs:{src:"https://gitee.com/lightzhu/picgo/raw/master/glbtodraco.png"}})]),t._v(" "),a("p",[t._v("RACO 压缩和 meshopt_compression 压缩的文件使用市需要解码器。")])])}),[],!1,null,null,null);s.default=r.exports}}]);