<!-- 

   name: flyrobin 组件

   description: 基于element ui 适配成长轨迹后台管理组件库

   creator:FengRui

   createTime:2021-3-18

   finallUpdateTime:2021-8-12

   wrap:组件父级包裹元素

   props:可选参数

   methods:可选方法

   slot:可选插槽

   tag:使用标签

 -->

# 1. Button

​		常用的操作按钮

## 1.1 button

- wrap
- tag     **<fr-button></fr-button>**

- props

|     参数      |        说明        |  类型   |                       可选值                       | 默认值 |     备注     |
| :-----------: | :----------------: | :-----: | :------------------------------------------------: | :----: | :----------: |
|     size      |        尺寸        | string  |               medium / small / mini                |   —    |              |
|     type      |        类型        | string  | primary / success / warning / danger / info / text |   —    |              |
|     plain     |    是否朴素按钮    | boolean |                         —                          | false  |              |
|     round     |    是否圆角按钮    | boolean |                         —                          | false  |              |
|    circle     |    是否圆形按钮    | boolean |                         —                          | false  |              |
|    loading    |   是否加载中状态   | boolean |                         —                          | false  |              |
|   disabled    |    是否禁用状态    | boolean |                         —                          | false  |              |
|     icon      |      图标类名      | string  |                         —                          |   —    |              |
|   autofocus   |    是否默认聚焦    | boolean |                         —                          | false  |              |
|  native-type  |    原生type属性    | string  |           button / submit / reset button           | button |              |
|     fill      |      填充颜色      | string  |                         —                          |   —    | 主题色传入值 |
|    stroke     |   边框与文字颜色   | string  |                         —                          |   —    |   背景透明   |
| textDirection | 文字和图标水平位置 | string  |                     ltr / rtl                      |  ltr   |              |

- methods

- slot

  

# 2. Change

​		单选切换按钮

## 2.1 change-group

- wrap

- tag      **<fr-change-group></fr-change-group>**

- props

  |     参数      |   说明   |           类型            |        可选值         | 默认值 | 备注 |
  | :-----------: | :------: | :-----------------------: | :-------------------: | :----: | :--: |
  | value/v-model |  绑定值  | string / number / boolean |           —           |   —    |      |
  |     size      |   尺寸   |          string           | medium / small / mini |   —    |      |
  |     fill      | 填充颜色 |          string           |           —           |   —    |      |
  |   textColor   | 文本颜色 |          string           |           —           |   —    |      |
  |   disabled    |   禁用   |          boolean          |           —           | false  |      |

  

- methods

  | 事件名称 |      说明      |  回调参数  |
  | :------: | :------------: | :--------: |
  |  change  | 绑定值修改触发 | 更新后的值 |

- slot

  

## 2.2 change

- wrap    [<fr-change-group></fr-change-group>](# 2.1)

- tag    **<fr-change></fr-change>**

- props    

  |   参数   |     说明      |           类型            | 可选值 | 默认值 | 备注 |
  | :------: | :-----------: | :-----------------------: | :----: | :----: | :--: |
  |  label   | change的value | string / number / boolean |   —    |   —    |      |
  | disabled |     禁用      |          boolean          |   —    | false  |      |

- methods

  | 事件名称 |      说明      |  回调参数  |
  | :------: | :------------: | :--------: |
  |  change  | 绑定值修改触发 | 更新后的值 |

- slot



# 3. Icon

​		iconfont图标，示例  <i class="fr-icon-close"></i>

## 3.1 icon

- wrap
- tag    **<i></i>**
- props
- methods
- slot

# 4. Radio

​		在一组备选项中进行单选

## 4.1 radio-group

- wrap

- tag    **<fr-radio-group></fr-change-group>**

- props

  |     参数      |   说明   |           类型            |        可选值         | 默认值 | 备注 |
  | :-----------: | :------: | :-----------------------: | :-------------------: | :----: | :--: |
  | value/v-model |  绑定值  | string / number / boolean |           —           |   —    |      |
  |     size      |   尺寸   |          string           | medium / small / mini |   —    |      |
  |     fill      | 填充颜色 |          string           |           —           |   —    |      |
  |   textColor   | 文本颜色 |          string           |           —           |   —    |      |
  |   disabled    |   禁用   |          boolean          |           —           | false  |      |

- methods

  | 事件名称 |      说明      |  回调参数  |
  | :------: | :------------: | :--------: |
  |  change  | 绑定值修改触发 | 更新后的值 |

- slot

  

## 4.2 radio

- wrap    [<fr-radio-group></fr-radio-group>](#4.1)

- tag        **<fr-radio></fr-radio>**

- props

  |     参数      |     说明     |           类型            |        可选值         | 默认值 | 备注 |
  | :-----------: | :----------: | :-----------------------: | :-------------------: | :----: | :--: |
  | value/v-model |    绑定值    | string / number / boolean |           —           |   —    |      |
  |     label     | radio的value | string / number / boolean |           —           |   —    |      |
  |     fill      |   填充颜色   |          string           |           —           |   —    |      |
  |    border     | 是否显示边框 |          boolean          |           —           | false  |      |
  |     size      |     尺寸     |          string           | medium / small / mini |   —    |      |
  |   disabled    |     禁用     |          boolean          |           —           | false  |      |

- methods

  | 事件名称 |      说明      |  回调参数  |
  | :------: | :------------: | :--------: |
  |  change  | 绑定值修改触发 | 更新后的值 |

- slot

  

## 4.3 radio-check

- wrap    [<fr-radio-group></fr-radio-group>](#4.1)

- tag        **<fr-radio-check></fr-radio-check>**

- props

  |     参数      |     说明     |           类型            |        可选值         | 默认值 | 备注 |
  | :-----------: | :----------: | :-----------------------: | :-------------------: | :----: | :--: |
  | value/v-model |    绑定值    | string / number / boolean |           —           |   —    |      |
  |     label     | radio的value | string / number / boolean |           —           |   —    |      |
  |     fill      |   填充颜色   |          string           |           —           |   —    |      |
  |    border     | 是否显示边框 |          boolean          |           —           | false  |      |
  |     size      |     尺寸     |          string           | medium / small / mini |   —    |      |
  |   disabled    |     禁用     |          boolean          |           —           | false  |      |

- methods

  | 事件名称 |      说明      |  回调参数  |
  | :------: | :------------: | :--------: |
  |  change  | 绑定值修改触发 | 更新后的值 |

- slot



# 5. Timeline

​		可视化地呈现时间流信息

## 5.1 timeline

- wrap    

- tag    **<fr-timeline></fr-timeline>**

- props

  |  参数   |      说明      |  类型   |         可选值          | 默认值 |         备注         |
  | :-----: | :------------: | :-----: | :---------------------: | :----: | :------------------: |
  | reverse | 是否时间线反转 | boolean |            —            |   —    |                      |
  |  align  |  内容对齐方式  | string  | left  / right / justify | right  | 居左、居右或两端布局 |

- methods

- slot



## 5.2 timeline-item

- wrap     [<fr-timeline></fr-timeline>](#5.1)

- tag    **<fr-timeline-item></fr-timeline-item>**

- props

  |     参数      |    说明    |  类型   |                   可选值                    | 默认值 | 备注 |
  | :-----------: | :--------: | :-----: | :-----------------------------------------: | :----: | :--: |
  |   timestamp   |   时间戳   | string  |                      —                      |   —    |      |
  | hideTimestamp | 隐藏时间戳 | boolean |                      —                      | false  |      |
  |   placement   | 时间戳位置 | string  |                top / bottom                 | bottom |      |
  |     type      |  节点类型  | string  | primary / success / warning / danger / info |   —    |      |
  |     color     |  节点颜色  | string  |                      —                      |   —    |      |
  |     size      |  节点尺寸  | string  |               normal / large                | normal |      |
  |     icon      |  节点图标  | string  |                      —                      |   —    |      |

- methods

- slot

  | 名称 |    说明    |
  | :--: | :--------: |
  | dot  | 自定义节点 |



# 6. Viewer

​		图片、视频和音频预览

## 6.1 image-viewer

- wrap

- tag    **<fr-image-viewer></fr-image-viewer>**

- props

  |     参数      |          说明          |   类型   | 可选值  | 默认值 |                      备注                       |
  | :-----------: | :--------------------: | :------: | :-----: | :----: | :---------------------------------------------: |
  |    urlList    |    预览图片地址合集    |  string  |    —    |   —    |                                                 |
  |    zIndex     |        预览层级        |  number  |    —    |  2000  |                                                 |
  | initialIndex  |      默认预览下标      |  number  |    —    |   0    |                                                 |
  | appendToBody  |   是否插入body元素中   | boolean  |    —    |  true  |                                                 |
  | maskClosable  | 点击遮罩层是否可以关闭 | boolean  |    —    |  true  |                                                 |
  | arrowPosition |    左右切换图标位置    |  string  | actions |   —    | 默认在预览左右两端，actions代表在下方的功能按钮 |
  |   onSwitch    | 预览切换时触发钩子函数 | function |    —    |   —    |                                                 |
  |    onClose    | 预览关闭时触发钩子函数 | function |    —    |   —    |                                                 |

- methods

- slot



## 6.2 video-viewer

- wrap

- tag    **<fr-video-viewer></fr-video-viewer>**

- props

  |     参数      |          说明          |   类型   | 可选值  | 默认值 |                      备注                       |
  | :-----------: | :--------------------: | :------: | :-----: | :----: | :---------------------------------------------: |
  |    urlList    |    预览视频地址合集    |  string  |    —    |   —    |                                                 |
  |    zIndex     |        预览层级        |  number  |    —    |  2000  |                                                 |
  | initialIndex  |      默认预览下标      |  number  |    —    |   0    |                                                 |
  | appendToBody  |   是否插入body元素中   | boolean  |    —    |  true  |                                                 |
  | maskClosable  | 点击遮罩层是否可以关闭 | boolean  |    —    |  true  |                                                 |
  | arrowPosition |    左右切换图标位置    |  string  | actions |   —    | 默认在预览左右两端，actions代表在下方的功能按钮 |
  |   onSwitch    | 预览切换时触发钩子函数 | function |    —    |   —    |                                                 |
  |    onClose    | 预览关闭时触发钩子函数 | function |    —    |   —    |                                                 |

- methods

- slot



## 6.3 audio-viewer

- wrap

- tag    **<fr-audio-viewer></fr-audio-viewer>**

- props

  |     参数      |          说明          |   类型   | 可选值  | 默认值 |                      备注                       |
  | :-----------: | :--------------------: | :------: | :-----: | :----: | :---------------------------------------------: |
  |    urlList    |    预览音频地址合集    |  string  |    —    |   —    |                                                 |
  |    zIndex     |        预览层级        |  number  |    —    |  2000  |                                                 |
  | initialIndex  |      默认预览下标      |  number  |    —    |   0    |                                                 |
  | appendToBody  |   是否插入body元素中   | boolean  |    —    |  true  |                                                 |
  | maskClosable  | 点击遮罩层是否可以关闭 | boolean  |    —    |  true  |                                                 |
  | arrowPosition |    左右切换图标位置    |  string  | actions |   —    | 默认在预览左右两端，actions代表在下方的功能按钮 |
  |   onSwitch    | 预览切换时触发钩子函数 | function |    —    |   —    |                                                 |
  |    onClose    | 预览关闭时触发钩子函数 | function |    —    |   —    |                                                 |

- methods

- slot