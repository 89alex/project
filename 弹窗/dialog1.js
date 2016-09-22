// 对话框

define(function (require, exports, module) {
    var $ = require("$"),
        shield = require("./shield"),
        dialogHtml = [
            '<div class="com-dialog">',
                '<div class="com-dialog-bd">',
                    '<h3 class="com-dialog-hd"><strong></strong></h3>',
                    '<div class="com-dialog-content h-auto"></div>',
                '</div>',
                '<a href="javascript:;" class="com-dialog-close"></a>',
            '</div>'
        ].join("");
    
    var Dialog = function(conf) {
        var that = this;
        
        if(!(that instanceof Dialog)) {
            return new Dialog(conf);
        };
        
        that._init(conf);
    };
    
    // 私有方法：初始化方法
    Dialog.prototype._init = function(conf) {
        var that = this;
        var defaultConf = {
            title:"",            // 对话框标题
            position:"fixed",    // 窗口定位方式
            mask:true            // 是否显示遮罩背景
        };
        
        conf = $.extend(defaultConf, conf);
        that._conf = conf;
        
        that.winEle = $(dialogHtml);
        that.winContentEle = that.winEle.find("div.com-dialog-content");
        that.closeBtnEle = that.winEle.find("a.com-dialog-close");

        // 小尺寸对话框宽度为270px
        if(conf.size === "small") {
            that.winEle.css({width:"270px"});
        }
        
        that.setTitle(conf.title);
    };

    // 方法：设置尺寸
    Dialog.prototype.setSize = function (width, height) {
        var that = this;

        width = width || 270;
        height = height || "auto";

        width = parseInt(width, 10) || 270;
        height = parseInt(height, 10) || "auto";

        that.winEle.css({width: width, height: height});

        return that;
    };
    
    // 方法：设置标题栏
    Dialog.prototype.setTitle = function(txt) {
        var that = this;
        
        that.winEle.find("h3.com-dialog-hd").html(txt || "");
        
        return that;
    };
    
    // 方法：设置对话框坐标（无参数是，自动将对话框位置设定到视窗中间）
    Dialog.prototype.setPosition = function(pos) {
        var that = this;
        var $win = $(window);
        var left = 0,
        	top = 0;
        
        if(pos) {
            left = pos.left;
            top = pos.top;
        } else {
        	// 没有指定坐标参数pos，则自行计算，将窗口放到视窗中间

            left = ($win.width() - that.winEle.width()) / 2;
            left = parseInt(left);
            top = ($win.height() - that.winEle.height()) / 2;

            if(that._conf.position === "absolute") {
                top += $win.scrollTop();
            } else {
                if($.browser.msie && ($.browser.version == "6.0")) {
                    top += $win.scrollTop();
                    that._conf.position = "absolute";
                }
            }
            top = parseInt(top);
        }
        if(left < 0) {
            left = 0;
        }
        if(top < 0) {
            top = 0;
        }
        
        that.winEle.css({left:left,top:top,position:that._conf.position});

        return that;
    };
    
    // 方法：显示对话框
    Dialog.prototype.show = function() {
        var that = this;
        
        $(document.body).append(that.winEle);
        that.winEle.show();
        
        if(that._conf.mask) {
            shield.show();
        }

        that.winEle.find("a.com-dialog-close").unbind("click").click(function() {
            that.hide();
        });

        return that;
    };
    
    // 方法：隐藏对话框
    Dialog.prototype.hide = function() {
        var that = this;
        
        that.winEle.remove();
        if(that._conf.mask) {
            shield.hide();
        }
        
        return that;
    };

    // 方法：添加关闭时触发的回调函数
    Dialog.prototype.onClose = function(callback) {
        if(typeof callback === "function") {
            this.closeBtnEle.click(function() {
                callback();
            });
        }
    };
    
    // 方法：往对话框主题部分添加DOM
    Dialog.prototype.append = function(el) {
        var that = this;
        
        that.winContentEle.append(el);
        
        return that;
    };


    return Dialog;
});