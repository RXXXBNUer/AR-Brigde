$(document).ready(function(){
    // 创建header元素并添加内容
    var headerContent = `
        <header>
            <div class="topBox">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-8 logo"><a href="index.html"><img src="images/logo.png" alt="AR-Bridge 官方" /></a></div>
                        <div class="col-xs-6 col-sm-3 col-md-2">
                            <div class="address"></div>
                        </div>
                        <div class="col-xs-6 col-sm-3 col-md-2">
                            <div class="tel">
                                <img src="images/tel.gif" alt="" /><br />185-6239-2302
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-static-top navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html"></a>             
                    </div>
                    <div id="navbar" class="collapse navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li><a href="index.html">网站首页</a></li>
                            <li class="dropdown">
                                <a href="about.html" class="dropdown-toggle" data-toggle="dropdown">关于我们</a><a href="#" id="app_menudown" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class='' href='about.html'>公司简介</a></li>
                                    <li><a class='' href='contact.html'>联系我们</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="article.html" class="dropdown-toggle" data-toggle="dropdown">新闻中心</a><a href="#" id="app_menudown" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class='' href='article.html'>公司新闻</a></li>
                                    <li><a class='' href='article.html'>行业新闻</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="product.html" class="dropdown-toggle" data-toggle="dropdown">产品中心</a><a href="#" id="app_menudown" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class='' href='product.html'>产品分类1</a><span>+</span>
                                        <ul>
                                            <li><a class='' href='product.html'>产品子分类1</a><ul></ul></li>
                                            <li><a class='' href='product.html'>产品子分类2</a><ul></ul></li>
                                        </ul>
                                    </li>
                                    <li><a class='' href='product.html'>产品分类2</a></li>
                                    <li><a class='' href='product.html'>产品分类3</a></li>
                                    <li><a class='' href='product.html'>产品分类4</a></li>
                                    <li><a class='' href='product.html'>产品分类5</a></li>
                                </ul>
                            </li>
                            <li><a href="album.html">案例中心</a></li>
                            <li><a href="comment.html">在线留言</a></li>
                            <li><a href="contact.html">联系我们</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `;
    
    // 将header内容添加到body开头
    $('body').prepend(headerContent);

    let customer_service = `
    <!--客服面板-->
    <!--电脑版-->
    <div id="cmsFloatPanel">

        <div class="ctrolPanel">
            <a class="service" href="#"></a>
            <a class="message" href="#"></a>
            <a class="qrcode" href="#"></a>
            <a class="arrow" title="返回顶部" href="#"></a>
        </div>

        <div class="servicePanel">
            <div class="servicePanel-inner">
                <div class="serviceMsgPanel">
                    <div class="serviceMsgPanel-hd"><a href="#"><span>关闭</span></a></div>
                    <div class="serviceMsgPanel-bd">
                        <!--在线QQ-->
                        <div class="msggroup">
                            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1014042554&site=qq&menu=yes"><img class="qqimg" src="http://wpa.qq.com/pa?p=2:593036114:52" alt="QQ在线客服" />技术支持</a>
                        </div>
                    </div>
                    <div class="serviceMsgPanel-ft"></div>
                </div>
                <div class="arrowPanel">
                    <div class="arrow02"></div>
                </div>
            </div>
        </div>

        <div class="messagePanel">
            <div class="messagePanel-inner">
                <div class="formPanel">

                    <div class="formPanel-bd">
                        <!-- JiaThis Button BEGIN -->
                        <div class="jiathis_style_32x32">
                            <a class="jiathis_button_qzone"></a>
                            <a class="jiathis_button_tsina"></a>
                            <a class="jiathis_button_tqq"></a>
                            <a class="jiathis_button_weixin"></a>
                            <a class="jiathis_button_renren"></a>
                            <a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank"></a>
                        </div>
                        <!-- JiaThis Button END -->
                        <a type="button" class="btn btn-default btn-xs" href="#" style="margin: 6px 0px 0px 10px;">关闭</a>
                    </div>

                </div>
                <div class="arrowPanel">
                    <div class="arrow01"></div>
                    <div class="arrow02"></div>
                </div>
            </div>
        </div>

        <div class="qrcodePanel">
            <div class="qrcodePanel-inner">
                <div class="codePanel">
                    <div class="codePanel-hd"><span style="float:left">用手机扫描二维码</span><a href="#"><span>关闭</span></a></div>
                    <div class="codePanel-bd">
                        <img src="images/qrcode.jpg" alt="二维码" />
                    </div>
                </div>
                <div class="arrowPanel">
                    <div class="arrow01"></div>
                    <div class="arrow02"></div>
                </div>
            </div>
        </div>

    </div>
    
    <div id="serviceBox" style="display:none">
        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=396288955&site=qq&menu=yes"><img class="qqimg" src="http://wpa.qq.com/pa?p=2:593036114:52" alt="QQ在线客服" />技术支持</a>
    </div>


    <!--电脑版 end-->

    <!--手机版-->
    <nav class="navbar-default navbar-fixed-bottom footer_nav" style="background:#fafafa;">
        <div class="foot_nav"><a href="javascript:mShare()"><span class="glyphicon glyphicon-share btn-lg" aria-hidden="true"></span>分享</a></div>
        <div class="foot_nav"><a href=""><span class="glyphicon glyphicon-phone btn-lg" aria-hidden="true"></span>电话</a></div>
        <div class="foot_nav" id="serviceBtn"><a onClick="showService()"><span class="glyphicon glyphicon glyphicon-headphones btn-lg" aria-hidden="true"></span>客服</a></div>
        <div class="foot_nav"><a id="gototop" href="#"><span class="glyphicon glyphicon-circle-arrow-up btn-lg" aria-hidden="true"></span>顶部</a></div>
        <div id="mShareBox" style="position: fixed; display: none; z-index: 999; bottom: 47px; width: 100%; height: 45px; background: #fff; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; padding: 5px;">
            <!-- JiaThis Button BEGIN -->
            <div class="jiathis_style_m"></div>
            <script type="text/javascript" src="http://v3.jiathis.com/code/jiathis_m.js" charset="utf-8"></script>
            <!-- JiaThis Button END -->
        </div>
    </nav>
    <!--手机版 end-->
    `;
    $('body').append(customer_service);

});
function mShare() {
    $("#mShareBox").toggle();
    $("#serviceBox").hide();
}

if ($(".banner .slider__wrapper li").length == 0) {
    $(".banner").addClass("emptyBanner");
}

function showService() {
    $("#mShareBox").hide();
    $("#serviceBox").toggle();
}