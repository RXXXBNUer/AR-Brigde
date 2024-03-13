const ARB = {
	informations : [
		{
			date : '202306080936',
			name : '校园科技节掀起AR热！ Rokid AR眼镜开启教学新体验'
		},
		{
			date : '202307202102',
			name : 'AR赋能让党员教育更加“身临其境”'
		},
		{
			date : '202308021509',
			name : '湖北教育新闻｜大学生原创AR绘本 助力糖塑传承'
		},
		{
			date : '202311091957',
			name : '戴上AR眼镜 大学携手小学一起进行消防安全主题教育活动'
		},
		{
			date : '202311151729',
			name : '助力学生拓宽视野 接触学科前沿 这所高职院校邀请“VR/AR+ 教育”知名专家来校授课'
		}
	],
	news : [
		{
			date : '202403081314',
			name : 'AR教育桥工作室今日成立！'
		},
		{
			date : '202403141200',
			name : 'AR技术在教育领域的应用或将迎来新生机'
		}
	]
};

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
								<a href="article.html" class="dropdown-toggle" data-toggle="dropdown">新闻中心</a><a href="#" id="app_menudown" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs"></span></a>
								<ul class="dropdown-menu" role="menu">
									<li><a class='' href='article.html'>公司新闻</a></li>
									<li><a class='' href='information.html'>行业资讯</a></li>
								</ul>
							</li>
							<li class="dropdown">
								<a href="product.html" class="dropdown-toggle" data-toggle="dropdown">产品中心</a><a href="#" id="app_menudown" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs"></span></a>
								<ul class="dropdown-menu" role="menu">
									<li><a class='' href='product.html'>数学学科</a></li>
									<li><a class='' href='product.html'>物理学科</a></li>
									<li><a class='' href='product.html'>化学学科</a></li>
									<li><a class='' href='product.html'>其它</a>
										<span>+</span>
										<ul>
											<li><a class='' href='product.html'>其它学科内容</a><ul></ul></li>
											<li><a class='' href='product.html'>非学科内容</a><ul></ul></li>
										</ul>
									</li>
								</ul>
							</li>
							<li><a href="about.html">公司简介</a></li>
							<li><a href="contact.html">联系我们</a></li>
							<li><a href="comment.html">在线留言</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
		<!-- Banner -->
		<div class="banner">
			<div class="slider">
				<ul class="slider__wrapper">
					<li class="slider__item"><a target="_blank" title="1" href="" style="background-image:url(images/1.png)"><img src="images/banner-2.png" alt="ARBridge 官方" /></a></li>
					<li class="slider__item"><a target="_blank" title="2" href="" style="background-image:url(images/2.png)"><img src="images/banner-2.png" alt="ARBridge 官方" /></a></li>
				</ul>
			</div>
		</div>`;
    
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
                            <a href="www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank"></a>
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
                    <div class="codePanel-hd"><span style="float:left">微信扫描二维码</span><a href="#"><span>关闭</span></a></div>
                    <div class="codePanel-bd" style="padding: 0">
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
	
	<footer>
	
	    <div class="copyright">
	        <p>
	            <a href="about.html">公司简介</a>&nbsp;&nbsp;|&nbsp;&nbsp;
	            <a href="article.html">新闻中心</a>&nbsp;&nbsp;|&nbsp;&nbsp;
	            <a href="product.html">产品中心</a>&nbsp;&nbsp;|&nbsp;&nbsp;
	            <a href="contact.html">联系我们</a>
	        </p>
	        <p class="copyright_p">© 2024- ARBridge All Rights Reserved.</p>
	    </div>
	
	</footer>
    `;
    $('body').append(customer_service);
	
	var glide = $('.slider').glide();
	
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
	$('.leftContactBox').append(`
	<div class="content">
	    <p>联系人：<strong>刘登攀</strong></p>
	    <p>手机：<br><strong>18562392302</strong></p>
	    <p>邮箱：<br><strong>202111998045@mail.bnu.edu.cn</strong></p>
	    <p>地址：<br><strong>北京市海淀区新街口外大街19号北京师范大学</strong></p>
	</div>`)
});