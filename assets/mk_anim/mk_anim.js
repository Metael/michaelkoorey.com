(function (img, cjs, ss, an) {

var lib={};var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AoSlbIQlmJIwcXJg");
	this.shape.setTransform(19.9,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#919396").s().p("ArYKVIAAw9IQil6IGPB8IgqATIv5F2IAJQSIgBAug");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.9,-80.3,145.9,160.6);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AoSlbIQlmJIwcXJg");
	this.shape.setTransform(19.9,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#919396").s().p("ArYKVIAAw9IQil6IGPB8IgzAVIvtF2IAGQVIgBApg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.9,-80.3,145.9,160.6);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("ApdmZID7k+IPAPjIy7HMg");
	this.shape.setTransform(16.3,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#919396").s().p("AkgJlIAAxDIEKkxIE3BvIj7E/IAARxg");
	this.shape_1.setTransform(-48.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.9,-78.4,153.9,156.9);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("ApdmZID7k+IPAPjIy7HMg");
	this.shape.setTransform(16.3,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#919396").s().p("AkgJlIAAxDIEKkxIE3BvIj5FAIgCRwg");
	this.shape_1.setTransform(-48.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.9,-78.4,153.9,156.9);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("ALYaKMgALgjNItTdtIg1jOMgIjgkbMgAHAjvIkwh+MAACgq9IHdDhMAIQAgZIAIAAIKL4OIGoCIMAABAqjg");
	this.shape.setTransform(0,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#919396").s().p("AmVOFIM+89IADIoIoRS8IlHCNg");
	this.shape_1.setTransform(29.4,43.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#919396").s().p("AiqRpMAAggkSIE1ScIgJQ5IksB+g");
	this.shape_2.setTransform(-60.4,-5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#919396").s().p("AiHthInbjgIFZiDIHmDnIGGaiIjWIAg");
	this.shape_3.setTransform(-43.3,-64.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.6,-186.9,209.2,374);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("ALYaKMgALgjNItTdtIg1jOMgIjgkbMgAHAjvIkwh+MAACgq9IHdDhMAIQAgZIAIAAIKL4OIGoCIMAABAqjg");
	this.shape.setTransform(0,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#919396").s().p("AmhOgINK9YIADIqIoQS6IlHCNg");
	this.shape_1.setTransform(29.3,43.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#919396").s().p("AiaRSMAAHgjLIEuUDIgINzIksB9g");
	this.shape_2.setTransform(-58.9,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#919396").s().p("AiItdIkeiHIi8heIFZiDIHmDnIGGaiIjXICg");
	this.shape_3.setTransform(-43.3,-64.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.6,-186.9,209.2,374);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AouD1IRd48MAAAAqPg");
	this.shape.setTransform(15.6,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#919396").s().p("AFtTfIw4wxIRj4rIEzBpIgTAgIxJYeIQ1QoIAoAsg");
	this.shape_1.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-140.4,143.3,281.1);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AouD1IRd48MAAAAqPg");
	this.shape.setTransform(15.6,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#919396").s().p("AFuTgIw5wyIRj4qIE0BpIgQAZIxJYiIQ4QzIAaAbIAGAHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-140.4,143.1,281);


// stage content:
(lib.mk_anim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// M
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-153.4,77.8);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(171.5,207.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-104.5,y:97.4,alpha:0.151},0).wait(1).to({x:-66.3,y:112.7,alpha:0.268},0).wait(1).to({x:-33.7,y:125.7,alpha:0.369},0).wait(1).to({x:-4.9,y:137.2,alpha:0.457},0).wait(1).to({x:20.8,y:147.5,alpha:0.536},0).wait(1).to({x:43.6,y:156.6,alpha:0.606},0).wait(1).to({x:63.3,y:164.5,alpha:0.667},0).wait(1).to({x:79.2,y:170.9,alpha:0.716},0).wait(1).to({x:93.1,y:176.4,alpha:0.759},0).wait(1).to({x:105.7,y:181.5,alpha:0.798},0).wait(1).to({x:117.3,y:186.1,alpha:0.833},0).wait(1).to({x:128.2,y:190.5,alpha:0.867},0).wait(1).to({x:138.3,y:194.5,alpha:0.898},0).wait(1).to({x:147.8,y:198.3,alpha:0.927},0).wait(1).to({x:156.6,y:201.8,alpha:0.954},0).wait(1).to({x:164.7,y:205.1,alpha:0.979},0).to({_off:true},1).wait(23));

	// K MID
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(757.4,2.4);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(395.9,181.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:728.7,y:16.5,alpha:0.079},0).wait(1).to({x:704.3,y:28.6,alpha:0.147},0).wait(1).to({x:682.6,y:39.4,alpha:0.207},0).wait(1).to({x:662.7,y:49.2,alpha:0.262},0).wait(1).to({x:644.3,y:58.4,alpha:0.313},0).wait(1).to({x:627.1,y:66.9,alpha:0.361},0).wait(1).to({x:610.9,y:74.9,alpha:0.405},0).wait(1).to({x:595.6,y:82.5,alpha:0.448},0).wait(1).to({x:581.1,y:89.6,alpha:0.488},0).wait(1).to({x:567.5,y:96.4,alpha:0.525},0).wait(1).to({x:554.5,y:102.8,alpha:0.561},0).wait(1).to({x:542.3,y:108.8,alpha:0.595},0).wait(1).to({x:530.8,y:114.5,alpha:0.627},0).wait(1).to({x:520.3,y:119.8,alpha:0.656},0).wait(1).to({x:510.9,y:124.4,alpha:0.682},0).wait(1).to({x:502.4,y:128.6,alpha:0.705},0).wait(1).to({x:494.4,y:132.6,alpha:0.728},0).wait(1).to({x:486.9,y:136.3,alpha:0.748},0).wait(1).to({x:479.8,y:139.8,alpha:0.768},0).wait(1).to({x:473,y:143.2,alpha:0.787},0).wait(1).to({x:466.4,y:146.4,alpha:0.805},0).wait(1).to({x:460.1,y:149.6,alpha:0.822},0).wait(1).to({x:454,y:152.6,alpha:0.839},0).wait(1).to({x:448.2,y:155.5,alpha:0.855},0).wait(1).to({x:442.5,y:158.3,alpha:0.871},0).wait(1).to({x:436.9,y:161,alpha:0.886},0).wait(1).to({x:431.6,y:163.7,alpha:0.901},0).wait(1).to({x:426.4,y:166.2,alpha:0.916},0).wait(1).to({x:421.4,y:168.7,alpha:0.929},0).wait(1).to({x:416.6,y:171.1,alpha:0.943},0).wait(1).to({x:411.9,y:173.4,alpha:0.956},0).wait(1).to({x:407.5,y:175.6,alpha:0.968},0).wait(1).to({x:403.3,y:177.7,alpha:0.98},0).wait(1).to({x:399.4,y:179.6,alpha:0.99},0).to({_off:true},1).wait(5));

	// K BOTTOM
	this.instance_4 = new lib.Tween7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(655.1,445);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Tween8("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(353.1,304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:626.7,y:431.7,alpha:0.094},0).wait(1).to({x:603,y:420.7,alpha:0.172},0).wait(1).to({x:582.1,y:410.9,alpha:0.242},0).wait(1).to({x:563.1,y:402.1,alpha:0.304},0).wait(1).to({x:545.7,y:393.9,alpha:0.362},0).wait(1).to({x:529.5,y:386.4,alpha:0.416},0).wait(1).to({x:514.4,y:379.3,alpha:0.466},0).wait(1).to({x:500.2,y:372.7,alpha:0.513},0).wait(1).to({x:487,y:366.6,alpha:0.556},0).wait(1).to({x:474.7,y:360.8,alpha:0.597},0).wait(1).to({x:463.2,y:355.4,alpha:0.635},0).wait(1).to({x:453.1,y:350.7,alpha:0.669},0).wait(1).to({x:444.2,y:346.5,alpha:0.698},0).wait(1).to({x:436,y:342.7,alpha:0.725},0).wait(1).to({x:428.4,y:339.2,alpha:0.75},0).wait(1).to({x:421.3,y:335.9,alpha:0.774},0).wait(1).to({x:414.6,y:332.7,alpha:0.796},0).wait(1).to({x:408.1,y:329.7,alpha:0.818},0).wait(1).to({x:402,y:326.8,alpha:0.838},0).wait(1).to({x:396,y:324.1,alpha:0.858},0).wait(1).to({x:390.3,y:321.4,alpha:0.877},0).wait(1).to({x:384.8,y:318.8,alpha:0.895},0).wait(1).to({x:379.6,y:316.4,alpha:0.912},0).wait(1).to({x:374.5,y:314,alpha:0.929},0).wait(1).to({x:369.6,y:311.7,alpha:0.945},0).wait(1).to({x:365,y:309.6,alpha:0.96},0).wait(1).to({x:360.6,y:307.5,alpha:0.975},0).wait(1).to({x:356.6,y:305.7,alpha:0.988},0).to({_off:true},1).wait(11));

	// K TOP
	this.instance_6 = new lib.Tween9("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(551.2,-98.6);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.Tween10("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(341.2,140.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:526.9,y:-71,alpha:0.116},0).wait(1).to({x:507.2,y:-48.6,alpha:0.209},0).wait(1).to({x:490,y:-29.1,alpha:0.291},0).wait(1).to({x:474.6,y:-11.5,alpha:0.365},0).wait(1).to({x:460.6,y:4.4,alpha:0.431},0).wait(1).to({x:447.7,y:19.1,alpha:0.493},0).wait(1).to({x:435.9,y:32.5,alpha:0.549},0).wait(1).to({x:425,y:44.9,alpha:0.601},0).wait(1).to({x:415.2,y:56.1,alpha:0.647},0).wait(1).to({x:406.9,y:65.5,alpha:0.687},0).wait(1).to({x:399.6,y:73.8,alpha:0.722},0).wait(1).to({x:392.9,y:81.4,alpha:0.754},0).wait(1).to({x:386.8,y:88.4,alpha:0.783},0).wait(1).to({x:381,y:95,alpha:0.81},0).wait(1).to({x:375.5,y:101.2,alpha:0.836},0).wait(1).to({x:370.3,y:107.1,alpha:0.861},0).wait(1).to({x:365.4,y:112.7,alpha:0.885},0).wait(1).to({x:360.7,y:118.1,alpha:0.907},0).wait(1).to({x:356.2,y:123.2,alpha:0.928},0).wait(1).to({x:352,y:128,alpha:0.948},0).wait(1).to({x:348,y:132.5,alpha:0.967},0).wait(1).to({x:344.3,y:136.7,alpha:0.985},0).to({_off:true},1).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.9,21,1087.1,702.5);
// library properties:
lib.properties = {
	id: '6764D6A29F49E04193023101D742D438',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6764D6A29F49E04193023101D742D438'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var images, createjs, ss, AdobeAn;