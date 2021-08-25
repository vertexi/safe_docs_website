
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
                    html: "您即将开始分析当前危险品处置方法<br/>请按<b>'开始'</b>键继续。"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "explosive_label",
                    title: "你是否看到一个爆炸性的标牌或标签？",
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
                            html: "<details>    <summary>    <font size='3' color='darkgreen'><b>展开查看</b></font></summary>                                         <style type='text/css'>.tg  {border-collapse:collapse;border-color:black;border-spacing:0;border-style:solid;border-width:1px;}.tg td{border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;  padding:10px 5px;word-break:normal;}.tg th{border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;  overflow:hidden;padding:10px 5px;word-break:normal;}.tg .tg-0lax{text-align:left;vertical-align:top}</style><table class='tg'><tbody>  <tr>    <td class='tg-0lax' rowspan='6'>第一类：爆炸品</td>    <td class='tg-0lax'>第1.1类:有整体爆炸危险的物质和物品</td>  </tr>  <tr>    <td class='tg-0lax'>第1.2类:有进射危险,但无整体爆炸的物质和物品</td>  </tr>  <tr>    <td class='tg-0lax'>第1.3类:有燃烧危险并有局部爆炸危险或局部迸射危险或这两种危险都有,但无整体爆炸危险的物质和物品</td>  </tr>  <tr>    <td class='tg-0lax'>第1.4类:不呈现重大危险的物质和物品</td>  </tr>  <tr>    <td class='tg-0lax'>第1.5类:有整体爆炸危险的非常不敏感物质</td>  </tr>  <tr>    <td class='tg-0lax'>第1.6类:无整体爆炸危险的极端不敏感物品</td>  </tr>  <tr>    <td class='tg-0lax' rowspan='2'>第二类：气体</td>    <td class='tg-0lax'>第2.1类:易燃气体</td>  </tr>  <tr>    <td class='tg-0lax'>第2.2类:非易燃无毒气体</td>  </tr>  <tr>    <td class='tg-0lax'>第三类：易燃液体</td>    <td class='tg-0lax'></td>  </tr>  <tr>    <td class='tg-0lax' rowspan='3'>第四类：易燃固体、易于自燃的物质、遇水放出易燃气体的物质</td>    <td class='tg-0lax'>第4.1类:易燃固体</td>  </tr>  <tr>    <td class='tg-0lax'>第4.2类:易于自燃的物质</td>  </tr>  <tr>    <td class='tg-0lax'>第4.3类:遇水放出易燃气体的物质</td>  </tr>  <tr>    <td class='tg-0lax' rowspan='2'>第五类：氧化性物质和有机过氧化物</td>    <td class='tg-0lax'>第5.1类:氧化性物质</td>  </tr>  <tr>    <td class='tg-0lax'>第5.2类:有机过氧化物</td>  </tr>  <tr>    <td class='tg-0lax' rowspan='2'>第六类：毒物质和感染性物质</td>    <td class='tg-0lax'>第6.1类:毒性物质</td>  </tr>  <tr>    <td class='tg-0lax'>第6.2类:感染性物质</td>  </tr>  <tr>    <td class='tg-0lax' rowspan='3'>第七类：放射性物质及裂变性物质</td>    <td class='tg-0lax'>I级——白色</td>  </tr>  <tr>    <td class='tg-0lax'>II级——黄色</td>  </tr>  <tr>    <td class='tg-0lax'>III级——黄色</td>  </tr>  <tr>    <td class='tg-0lax'>第八类：腐蚀性物质</td>    <td class='tg-0lax'></td>  </tr>  <tr>    <td class='tg-0lax'>第九类：杂项危险物质和物品</td>    <td class='tg-0lax'></td>  </tr></tbody></table>"
                        }
                    ]
                }
            ]
        }, {
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
                    "elements": [
                        {
                            type: "html",
                            html: "<details>    <summary>    <font size='3' color='darkgreen'><b>展开查看</b></font></summary>                                         <style type='text/css'>.tg  {border-collapse:collapse;border-color:black;border-spacing:0;border-style:solid;border-width:1px;}.tg td{border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;  padding:10px 5px;word-break:normal;}.tg th{border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;  overflow:hidden;padding:10px 5px;word-break:normal;}.tg .tg-0lax{text-align:left;vertical-align:top}</style><table class='tg'><tbody>  <tr>    <td class='tg-0lax' rowspan='6'>第一类：爆炸品</td>    <td class='tg-0lax'>第1.1类:有整体爆炸危险的物质和物品</td>  </tr>  <tr>    <td class='tg-0lax'>第1.2类:有进射危险,但无整体爆炸的物质和物品</td>  </tr>  <tr>    <td class='tg-0lax'>第1.3类:有燃烧危险并有局部爆炸危险或局部迸射危险或这两种危险都有,但无整体爆炸危险的物质和物品</td>  </tr>  <tr>    <td class='tg-0lax'>第1.4类:不呈现重大危险的物质和物品</td>  </tr>  <tr>    <td class='tg-0lax'>第1.5类:有整体爆炸危险的非常不敏感物质</td>  </tr>  <tr>    <td class='tg-0lax'>第1.6类:无整体爆炸危险的极端不敏感物品</td>  </tr>  <tr>    <td class='tg-0lax' rowspan='2'>第二类：气体</td>    <td class='tg-0lax'>第2.1类:易燃气体</td>  </tr>  <tr>    <td class='tg-0lax'>第2.2类:非易燃无毒气体</td>  </tr>  <tr>    <td class='tg-0lax'>第三类：易燃液体</td>    <td class='tg-0lax'></td>  </tr>  <tr>    <td class='tg-0lax' rowspan='3'>第四类：易燃固体、易于自燃的物质、遇水放出易燃气体的物质</td>    <td class='tg-0lax'>第4.1类:易燃固体</td>  </tr>  <tr>    <td class='tg-0lax'>第4.2类:易于自燃的物质</td>  </tr>  <tr>    <td class='tg-0lax'>第4.3类:遇水放出易燃气体的物质</td>  </tr>  <tr>    <td class='tg-0lax' rowspan='2'>第五类：氧化性物质和有机过氧化物</td>    <td class='tg-0lax'>第5.1类:氧化性物质</td>  </tr>  <tr>    <td class='tg-0lax'>第5.2类:有机过氧化物</td>  </tr>  <tr>    <td class='tg-0lax' rowspan='2'>第六类：毒物质和感染性物质</td>    <td class='tg-0lax'>第6.1类:毒性物质</td>  </tr>  <tr>    <td class='tg-0lax'>第6.2类:感染性物质</td>  </tr>  <tr>    <td class='tg-0lax' rowspan='3'>第七类：放射性物质及裂变性物质</td>    <td class='tg-0lax'>I级——白色</td>  </tr>  <tr>    <td class='tg-0lax'>II级——黄色</td>  </tr>  <tr>    <td class='tg-0lax'>III级——黄色</td>  </tr>  <tr>    <td class='tg-0lax'>第八类：腐蚀性物质</td>    <td class='tg-0lax'></td>  </tr>  <tr>    <td class='tg-0lax'>第九类：杂项危险物质和物品</td>    <td class='tg-0lax'></td>  </tr></tbody></table>"
                        }
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarta",
                    title: "What is the Magna Carta?",
                    choicesOrder: "random",
                    choices: [
                        "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"
                    ],
                    correctAnswer: "The foundation of the British parliamentary system"
                }
            ]
        }
    ],
    completedHtml: "<h4>你现在应该查阅<a href='http://yhsxz.cn/erg_guidance'>ERG指导</a></h4>"
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