Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    title: "危险品应急指导",
    showProgressBar: "bottom",
    firstPageIsStarted: true,
    startSurveyText: "开始",
    
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "<h2><b>注意！！！！！！</b></h2>\
                            <h3>禁止盲目采取行动</h3></br>\
                            <h3>从逆风、上坡和/或上游接近事故时，应远离所有泄漏、蒸汽、烟雾、烟雾和潜在危险</h3></br>\
                            <h3>如果涉及多个危险物质/危险物品，则不要使用本流程图。立即拨打本指南内置封面上列出的适当的应急响应机构电话号码。</h3></br>\
                            <a href='assets/ERG2020-WEB.pdf'>从此获取原版指南(Emergency Response Guidebook)</a>，其官网为<a href='https://www.phmsa.dot.gov/hazmat/erg/emergency-response-guidebook-erg'>https://www.phmsa.dot.gov/hazmat/erg/emergency-response-guidebook-erg</a></br>\
                    您即将开始分析当前危险品处置方法<br/>请按<b>'开始'</b>键继续。"
                }
            ]
        },

        {
            questions: [
                {
                    type: "radiogroup",
                    name: "explosive_label",
                    title: "你是否看到一个爆炸物上的爆炸物指示标牌或标签？",
                    choices: [
                        "是", "否"
                    ],
                },
                {
                    "type": "panel",
                    "innerIndent": 1,
                    "name": "panel1",
                    "title": "危险品分类帮助",
                    "elements": [
                        {
                            type: "html",
                            html: "<details>\
                                        <summary>\
                                            <font size='3' color='darkgreen'><b>展开查看</b></font>\
                                        </summary>\
                                        <style type='text/css'>\
                                            .tg {\
                                                border-collapse: collapse;\
                                                border-color: black;\
                                                border-spacing: 1;\
                                                border-style: solid;\
                                                border-width: 1px;\
                                            }\
                                    \
                                            .tg td {\
                                                border-style: solid;\
                                                border-width: 0px;\
                                                font-family: Arial, sans-serif;\
                                                font-size: 14px;\
                                                overflow: hidden;\
                                                padding: 10px 5px;\
                                                word-break: normal;\
                                            }\
                                    \
                                            .tg th {\
                                                border-style: solid;\
                                                border-width: 0px;\
                                                font-family: Arial, sans-serif;\
                                                font-size: 14px;\
                                                font-weight: normal;\
                                                overflow: hidden;\
                                                padding: 10px 5px;\
                                                word-break: normal;\
                                            }\
                                    \
                                            .tg .tg-0lax {\
                                                text-align: left;\
                                                vertical-align: top\
                                            }\
                                        </style>\
                                        <table class='tg'>\
                                            <tbody>\
                                                <tr>\
                                                    <td class='tg-0lax' rowspan='6'>第一类：爆炸品</td>\
                                                    <td class='tg-0lax'>第1.1类:有整体爆炸危险的物质和物品</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第1.2类:有进射危险,但无整体爆炸的物质和物品</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第1.3类:有燃烧危险并有局部爆炸危险或局部迸射危险或这两种危险都有,但无整体爆炸危险的物质和物品</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第1.4类:不呈现重大危险的物质和物品</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第1.5类:有整体爆炸危险的非常不敏感物质</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第1.6类:无整体爆炸危险的极端不敏感物品</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax' rowspan='2'>第二类：气体</td>\
                                                    <td class='tg-0lax'>第2.1类:易燃气体</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第2.2类:非易燃无毒气体</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第三类：易燃液体</td>\
                                                    <td class='tg-0lax'></td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax' rowspan='3'>第四类：易燃固体、易于自燃的物质、遇水放出易燃气体的物质</td>\
                                                    <td class='tg-0lax'>第4.1类:易燃固体</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第4.2类:易于自燃的物质</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第4.3类:遇水放出易燃气体的物质</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax' rowspan='2'>第五类：氧化性物质和有机过氧化物</td>\
                                                    <td class='tg-0lax'>第5.1类:氧化性物质</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第5.2类:有机过氧化物</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax' rowspan='2'>第六类：毒物质和感染性物质</td>\
                                                    <td class='tg-0lax'>第6.1类:毒性物质</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第6.2类:感染性物质</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax' rowspan='3'>第七类：放射性物质及裂变性物质</td>\
                                                    <td class='tg-0lax'>I级——白色</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>II级——黄色</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>III级——黄色</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第八类：腐蚀性物质</td>\
                                                    <td class='tg-0lax'></td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第九类：杂项危险物质和物品</td>\
                                                    <td class='tg-0lax'></td>\
                                                </tr>\
                                            </tbody>\
                                        </table>\
                                    </details>"
                        }
                    ]
                }
            ]
        },

        {
            questions: [
                {
                    type: "radiogroup",
                    name: "which_explosive",
                    title: "是哪一类爆炸物",
                    "visibleIf": "{explosive_label}='是'",
                    choices: [
                        "1.1, 1.2, 1.3,  1.5类中的一种", "1.4, 1.6类中的一种"
                    ],
                },
                {
                    "type": "panel",
                    "innerIndent": 1,
                    "name": "panel1",
                    "title": "危险品分类帮助",
                    "visibleIf": "{explosive_label}='是'",
                    "elements": [
                        {
                            type: "html",
                            html: "<details>\
                                        <summary>\
                                            <font size='3' color='darkgreen'><b>展开查看</b></font>\
                                        </summary>\
                                        <style type='text/css'>\
                                            .tg {\
                                                border-collapse: collapse;\
                                                border-color: black;\
                                                border-spacing: 1;\
                                                border-style: solid;\
                                                border-width: 1px;\
                                            }\
                                    \
                                            .tg td {\
                                                border-style: solid;\
                                                border-width: 0px;\
                                                font-family: Arial, sans-serif;\
                                                font-size: 14px;\
                                                overflow: hidden;\
                                                padding: 10px 5px;\
                                                word-break: normal;\
                                            }\
                                    \
                                            .tg th {\
                                                border-style: solid;\
                                                border-width: 0px;\
                                                font-family: Arial, sans-serif;\
                                                font-size: 14px;\
                                                font-weight: normal;\
                                                overflow: hidden;\
                                                padding: 10px 5px;\
                                                word-break: normal;\
                                            }\
                                    \
                                            .tg .tg-0lax {\
                                                text-align: left;\
                                                vertical-align: top\
                                            }\
                                        </style>\
                                        <table class='tg'>\
                                            <tbody>\
                                                <tr>\
                                                    <td class='tg-0lax' rowspan='6'>第一类：爆炸品</td>\
                                                    <td class='tg-0lax'>第1.1类:有整体爆炸危险的物质和物品</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第1.2类:有进射危险,但无整体爆炸的物质和物品</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第1.3类:有燃烧危险并有局部爆炸危险或局部迸射危险或这两种危险都有,但无整体爆炸危险的物质和物品</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第1.4类:不呈现重大危险的物质和物品</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第1.5类:有整体爆炸危险的非常不敏感物质</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第1.6类:无整体爆炸危险的极端不敏感物品</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax' rowspan='2'>第二类：气体</td>\
                                                    <td class='tg-0lax'>第2.1类:易燃气体</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第2.2类:非易燃无毒气体</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第三类：易燃液体</td>\
                                                    <td class='tg-0lax'></td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax' rowspan='3'>第四类：易燃固体、易于自燃的物质、遇水放出易燃气体的物质</td>\
                                                    <td class='tg-0lax'>第4.1类:易燃固体</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第4.2类:易于自燃的物质</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第4.3类:遇水放出易燃气体的物质</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax' rowspan='2'>第五类：氧化性物质和有机过氧化物</td>\
                                                    <td class='tg-0lax'>第5.1类:氧化性物质</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第5.2类:有机过氧化物</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax' rowspan='2'>第六类：毒物质和感染性物质</td>\
                                                    <td class='tg-0lax'>第6.1类:毒性物质</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第6.2类:感染性物质</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax' rowspan='3'>第七类：放射性物质及裂变性物质</td>\
                                                    <td class='tg-0lax'>I级——白色</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>II级——黄色</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>III级——黄色</td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第八类：腐蚀性物质</td>\
                                                    <td class='tg-0lax'></td>\
                                                </tr>\
                                                <tr>\
                                                    <td class='tg-0lax'>第九类：杂项危险物质和物品</td>\
                                                    <td class='tg-0lax'></td>\
                                                </tr>\
                                            </tbody>\
                                        </table>\
                                    </details>"
                        }
                    ]
                }
            ]
        },

        {
            questions: [
                {
                    type: "html",
                    "visibleIf": "{which_explosive}=='1.1, 1.2, 1.3,  1.5类中的一种'&&{explosive_label}='是'",
                    html: "<h2>请使用<a href='http://yhsxz.cn/erg_guidance/guidance/guidance112'>应急指导112号</a>作为参考</h2>"
                }
            ]
        },

        {
            questions: [
                {
                    type: "html",
                    "visibleIf": "{which_explosive}=='1.4, 1.6类中的一种'&&{explosive_label}='是'",
                    html: "<h2>请使用<a href='http://yhsxz.cn/erg_guidance/guidance/guidance114'>应急指导114号</a>作为参考</h2>"
                }
            ]
        },

        {
            questions: [
                {
                    type: "radiogroup",
                    name: "UN_name",
                    title: "你知道危险品的UN/NA ID编号吗？",
                    "visibleIf": "{explosive_label}='否'",
                    choices: [
                        "是", "否"
                    ]
                }
            ]
        },

        {
            questions: [
                {
                    type: "html",
                    visibleIf: "{explosive_label}='否'&&{UN_name}=='是'",
                    html: "<h2>请前往<a href='http://yhsxz.cn/erg_guidance-unid/'>应急指导查询网</a>根据UN/UA ID查询对应的指南方法</h2>"
                }
            ]
        },

        {
            questions: [
                {
                    type: "radiogroup",
                    name: "material_name",
                    title: "你知道危险品的名称吗？",
                    "visibleIf": "{explosive_label}='否'&&{UN_name}=='否'",
                    choices: [
                        "是", "否"
                    ]
                }
            ]
        },

        {
            questions: [
                {
                    type: "html",
                    visibleIf: "{explosive_label}='否'&&{UN_name}=='否'&&{material_name}=='是'",
                    html: "<h2>请前往<a href='http://yhsxz.cn/erg_guidance-material/'>应急指导查询网</a>根据物质名字查询对应的指南方法</h2>"
                }
            ]
        },

        {
            questions: [
                {
                    type: "radiogroup",
                    name: "placard_exist",
                    title: "你是否看到一个危险品标牌或标签？",
                    "visibleIf": "{explosive_label}='否'&&{UN_name}=='否'&&{material_name}=='否'",
                    choices: [
                        "是", "否"
                    ]
                },
                {
                    "type": "panel",
                    "innerIndent": 1,
                    "name": "panel1",
                    "title": "危险品标记，标牌以及对应应急指导编号查询表",
                    "visibleIf": "{explosive_label}='否'&&{UN_name}=='否'&&{material_name}=='否'",
                    "elements": [
                        {
                            type: "html",
                            html: "<details>\
                                        <summary>\
                                            <font size='3' color='darkgreen'><b>展开查看</b></font>\
                                        </summary>\
                                            <img src='assets/erg1.png' style='height: 40%; width: 40%; object-fit= contain'\>\
                                            <img src='assets/erg2.png' style='height: 40%; width: 40%; object-fit= contain'\>\
                                    </details>"
                        }
                    ]
                }
            ]
        },

        {
            questions: [
                {
                    type: "html",
                    visibleIf: "{explosive_label}='否'&&{UN_name}=='否'&&{material_name}=='否'&&{placard_exist}='是'",
                    html: "<h2>请看以下图表根据已知的危险品标记或标牌等信息，判断应参考的应急指南编号。</h2></br>\
                            <h2>然后前往<a href='http://yhsxz.cn/erg_guidance-guidance/'>应急指南查询网</a>根据编号查询相应的应急指南</h2>\
                            <img src='assets/erg1.png' style='height: 40%; width: 40%; object-fit= contain'\>\
                            <img src='assets/erg2.png' style='height: 40%; width: 40%; object-fit= contain'\>"
                }
            ]
        },

        {
            questions: [
                {
                    type: "radiogroup",
                    name: "railcar",
                    title: "你是否看到一辆铁路车或公路拖车？",
                    "visibleIf": "{explosive_label}='否'&&{UN_name}=='否'&&{material_name}=='否'&&{placard_exist}='否'",
                    choices: [
                        "是", "否"
                    ]
                },
                {
                    "type": "panel",
                    "innerIndent": 1,
                    "name": "panel1",
                    "title": "铁路车或公路拖车对应应急指南编号图",
                    "visibleIf": "{explosive_label}='否'&&{UN_name}=='否'&&{material_name}=='否'&&{placard_exist}='否'",
                    "elements": [
                        {
                            type: "html",
                            html: "<details>\
                                        <summary>\
                                            <font size='3' color='darkgreen'><b>展开查看</b></font>\
                                        </summary>\
                                        <img src='assets/railcar_1.png' style='height: 40%; width: 40%; object-fit= contain'\>\
                                        <img src='assets/railcar_2.png' style='height: 40%; width: 40%; object-fit= contain'\>\
                                        <img src='assets/railcar_3.png' style='height: 40%; width: 40%; object-fit= contain'\>\
                                        <img src='assets/railcar_4.png' style='height: 40%; width: 40%; object-fit= contain'\>\
                                        <img src='assets/railcar_5.png' style='height: 40%; width: 40%; object-fit= contain'\>\
                                    </details>"
                        }
                    ]
                }
            ]
        },

        {
            questions: [
                {
                    type: "html",
                    visibleIf: "{explosive_label}='否'&&{UN_name}=='否'&&{material_name}=='否'&&{placard_exist}='否'&&{railcar}=='是'",
                    html: "<h2>请看以下图表根据已知的铁路车或拖车形状类型等信息，判断应参考的应急指南编号。</h2></br>\
                            <h2>然后前往<a href='http://yhsxz.cn/erg_guidance-guidance/'>应急指南查询网</a>根据编号查询相应的应急指南</h2>\
                            <img src='assets/railcar_1.png' style='height: 40%; width: 40%; object-fit= contain'\>\
                            <img src='assets/railcar_2.png' style='height: 40%; width: 40%; object-fit= contain'\>\
                            <img src='assets/railcar_3.png' style='height: 40%; width: 40%; object-fit= contain'\>\
                            <img src='assets/railcar_4.png' style='height: 40%; width: 40%; object-fit= contain'\>\
                            <img src='assets/railcar_5.png' style='height: 40%; width: 40%; object-fit= contain'\>"
                }
            ]
        },

        {
            questions: [
                {
                    type: "html",
                    visibleIf: "{explosive_label}='否'&&{UN_name}=='否'&&{material_name}=='否'&&{placard_exist}='否'&&{railcar}=='否'",
                    html: "<h2>请前往<a href='http://yhsxz.cn/erg_guidance/guidance/guidance111'>应急指南查询网Guide 111</a>作为参考</h2>"
                }
            ]
        }

    ],
    completedHtml: "<h4>你现在应该前往查阅<a href='http://yhsxz.cn/erg_guidance'>ERG指导</a></h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (sender) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
    });

$("#surveyElement").Survey({ model: survey });;