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
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-133,y:86,alpha:0.063},0).wait(1).to({x:-115.1,y:93.1,alpha:0.118},0).wait(1).to({x:-99,y:99.6,alpha:0.168},0).wait(1).to({x:-84.1,y:105.5,alpha:0.213},0).wait(1).to({x:-70.2,y:111.1,alpha:0.256},0).wait(1).to({x:-57.2,y:116.3,alpha:0.296},0).wait(1).to({x:-44.8,y:121.3,alpha:0.334},0).wait(1).to({x:-33,y:126,alpha:0.371},0).wait(1).to({x:-21.7,y:130.5,alpha:0.405},0).wait(1).to({x:-11,y:134.8,alpha:0.438},0).wait(1).to({x:-0.7,y:138.9,alpha:0.47},0).wait(1).to({x:9.2,y:142.9,alpha:0.5},0).wait(1).to({x:18.6,y:146.6,alpha:0.529},0).wait(1).to({x:27.6,y:150.3,alpha:0.557},0).wait(1).to({x:36.3,y:153.7,alpha:0.584},0).wait(1).to({x:44.6,y:157,alpha:0.609},0).wait(1).to({x:52.4,y:160.2,alpha:0.634},0).wait(1).to({x:59.7,y:163.1,alpha:0.656},0).wait(1).to({x:66.3,y:165.7,alpha:0.676},0).wait(1).to({x:72.5,y:168.2,alpha:0.695},0).wait(1).to({x:78.2,y:170.5,alpha:0.713},0).wait(1).to({x:83.7,y:172.7,alpha:0.73},0).wait(1).to({x:89,y:174.8,alpha:0.746},0).wait(1).to({x:94,y:176.8,alpha:0.762},0).wait(1).to({x:98.9,y:178.7,alpha:0.776},0).wait(1).to({x:103.6,y:180.6,alpha:0.791},0).wait(1).to({x:108.1,y:182.4,alpha:0.805},0).wait(1).to({x:112.5,y:184.2,alpha:0.819},0).wait(1).to({x:116.8,y:185.9,alpha:0.832},0).wait(1).to({x:121,y:187.6,alpha:0.845},0).wait(1).to({x:125.1,y:189.2,alpha:0.857},0).wait(1).to({x:129.1,y:190.8,alpha:0.869},0).wait(1).to({x:133,y:192.4,alpha:0.881},0).wait(1).to({x:136.8,y:193.9,alpha:0.893},0).wait(1).to({x:140.5,y:195.4,alpha:0.905},0).wait(1).to({x:144.1,y:196.8,alpha:0.916},0).wait(1).to({x:147.6,y:198.2,alpha:0.926},0).wait(1).to({x:151,y:199.6,alpha:0.937},0).wait(1).to({x:154.3,y:200.9,alpha:0.947},0).wait(1).to({x:157.6,y:202.2,alpha:0.957},0).wait(1).to({x:160.7,y:203.5,alpha:0.967},0).wait(1).to({x:163.6,y:204.7,alpha:0.976},0).wait(1).to({x:166.5,y:205.8,alpha:0.985},0).wait(1).to({x:169.1,y:206.8,alpha:0.993},0).to({_off:true},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// K TOP
	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(551.2,-98.6);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(341.2,140.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:541.5,y:-87.7,alpha:0.046},0).wait(1).to({x:532.8,y:-77.8,alpha:0.087},0).wait(1).to({x:524.8,y:-68.7,alpha:0.125},0).wait(1).to({x:517.4,y:-60.3,alpha:0.161},0).wait(1).to({x:510.4,y:-52.3,alpha:0.194},0).wait(1).to({x:503.7,y:-44.7,alpha:0.226},0).wait(1).to({x:497.4,y:-37.5,alpha:0.256},0).wait(1).to({x:491.3,y:-30.5,alpha:0.285},0).wait(1).to({x:485.4,y:-23.9,alpha:0.313},0).wait(1).to({x:479.8,y:-17.5,alpha:0.34},0).wait(1).to({x:474.4,y:-11.3,alpha:0.366},0).wait(1).to({x:469.1,y:-5.3,alpha:0.391},0).wait(1).to({x:464,y:0.5,alpha:0.415},0).wait(1).to({x:459.1,y:6.1,alpha:0.438},0).wait(1).to({x:454.3,y:11.6,alpha:0.461},0).wait(1).to({x:449.7,y:16.8,alpha:0.483},0).wait(1).to({x:445.2,y:21.9,alpha:0.505},0).wait(1).to({x:440.8,y:26.9,alpha:0.525},0).wait(1).to({x:436.6,y:31.7,alpha:0.546},0).wait(1).to({x:432.5,y:36.4,alpha:0.565},0).wait(1).to({x:428.5,y:40.9,alpha:0.584},0).wait(1).to({x:424.7,y:45.2,alpha:0.602},0).wait(1).to({x:421,y:49.5,alpha:0.62},0).wait(1).to({x:417.4,y:53.5,alpha:0.637},0).wait(1).to({x:414,y:57.4,alpha:0.653},0).wait(1).to({x:410.9,y:60.9,alpha:0.668},0).wait(1).to({x:408,y:64.3,alpha:0.682},0).wait(1).to({x:405.2,y:67.5,alpha:0.695},0).wait(1).to({x:402.5,y:70.5,alpha:0.708},0).wait(1).to({x:399.9,y:73.5,alpha:0.72},0).wait(1).to({x:397.4,y:76.3,alpha:0.732},0).wait(1).to({x:395,y:79.1,alpha:0.744},0).wait(1).to({x:392.6,y:81.7,alpha:0.755},0).wait(1).to({x:390.3,y:84.3,alpha:0.766},0).wait(1).to({x:388.1,y:86.9,alpha:0.776},0).wait(1).to({x:385.9,y:89.4,alpha:0.787},0).wait(1).to({x:383.8,y:91.8,alpha:0.797},0).wait(1).to({x:381.7,y:94.2,alpha:0.807},0).wait(1).to({x:379.7,y:96.5,alpha:0.817},0).wait(1).to({x:377.7,y:98.8,alpha:0.826},0).wait(1).to({x:375.7,y:101,alpha:0.835},0).wait(1).to({x:373.8,y:103.2,alpha:0.845},0).wait(1).to({x:371.9,y:105.3,alpha:0.854},0).wait(1).to({x:370,y:107.4,alpha:0.863},0).wait(1).to({x:368.2,y:109.5,alpha:0.871},0).wait(1).to({x:366.4,y:111.6,alpha:0.88},0).wait(1).to({x:364.6,y:113.6,alpha:0.888},0).wait(1).to({x:362.9,y:115.5,alpha:0.896},0).wait(1).to({x:361.2,y:117.5,alpha:0.905},0).wait(1).to({x:359.5,y:119.4,alpha:0.912},0).wait(1).to({x:357.9,y:121.3,alpha:0.92},0).wait(1).to({x:356.3,y:123.1,alpha:0.928},0).wait(1).to({x:354.7,y:124.9,alpha:0.935},0).wait(1).to({x:353.2,y:126.6,alpha:0.943},0).wait(1).to({x:351.6,y:128.4,alpha:0.95},0).wait(1).to({x:350.2,y:130,alpha:0.957},0).wait(1).to({x:348.7,y:131.7,alpha:0.964},0).wait(1).to({x:347.3,y:133.3,alpha:0.971},0).wait(1).to({x:346,y:134.8,alpha:0.977},0).wait(1).to({x:344.7,y:136.3,alpha:0.983},0).wait(1).to({x:343.4,y:137.7,alpha:0.989},0).wait(1).to({x:342.2,y:139.1,alpha:0.995},0).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(63).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// K BOTTOM
	this.instance_4 = new lib.Tween7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(655.1,445);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Tween8("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(353.1,304);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:644.1,y:439.9,alpha:0.036},0).wait(1).to({x:634.1,y:435.2,alpha:0.069},0).wait(1).to({x:624.8,y:430.9,alpha:0.1},0).wait(1).to({x:616,y:426.8,alpha:0.129},0).wait(1).to({x:607.7,y:422.9,alpha:0.157},0).wait(1).to({x:599.7,y:419.2,alpha:0.183},0).wait(1).to({x:592.1,y:415.6,alpha:0.208},0).wait(1).to({x:584.8,y:412.2,alpha:0.233},0).wait(1).to({x:577.7,y:408.9,alpha:0.256},0).wait(1).to({x:570.9,y:405.7,alpha:0.279},0).wait(1).to({x:564.2,y:402.6,alpha:0.301},0).wait(1).to({x:557.8,y:399.6,alpha:0.322},0).wait(1).to({x:551.6,y:396.7,alpha:0.343},0).wait(1).to({x:545.5,y:393.8,alpha:0.363},0).wait(1).to({x:539.5,y:391.1,alpha:0.382},0).wait(1).to({x:533.8,y:388.4,alpha:0.402},0).wait(1).to({x:528.1,y:385.7,alpha:0.42},0).wait(1).to({x:522.6,y:383.2,alpha:0.438},0).wait(1).to({x:517.3,y:380.7,alpha:0.456},0).wait(1).to({x:512,y:378.2,alpha:0.474},0).wait(1).to({x:506.9,y:375.8,alpha:0.49},0).wait(1).to({x:501.9,y:373.5,alpha:0.507},0).wait(1).to({x:497.1,y:371.2,alpha:0.523},0).wait(1).to({x:492.3,y:369,alpha:0.539},0).wait(1).to({x:487.7,y:366.8,alpha:0.554},0).wait(1).to({x:483.1,y:364.7,alpha:0.569},0).wait(1).to({x:478.7,y:362.7,alpha:0.584},0).wait(1).to({x:474.4,y:360.7,alpha:0.598},0).wait(1).to({x:470.2,y:358.7,alpha:0.612},0).wait(1).to({x:466.1,y:356.8,alpha:0.626},0).wait(1).to({x:462.1,y:354.9,alpha:0.639},0).wait(1).to({x:458.4,y:353.2,alpha:0.651},0).wait(1).to({x:454.9,y:351.5,alpha:0.663},0).wait(1).to({x:451.5,y:350,alpha:0.674},0).wait(1).to({x:448.2,y:348.4,alpha:0.685},0).wait(1).to({x:445.1,y:347,alpha:0.695},0).wait(1).to({x:442.1,y:345.6,alpha:0.705},0).wait(1).to({x:439.2,y:344.2,alpha:0.715},0).wait(1).to({x:436.3,y:342.9,alpha:0.724},0).wait(1).to({x:433.5,y:341.6,alpha:0.734},0).wait(1).to({x:430.8,y:340.3,alpha:0.742},0).wait(1).to({x:428.2,y:339.1,alpha:0.751},0).wait(1).to({x:425.6,y:337.9,alpha:0.76},0).wait(1).to({x:423,y:336.7,alpha:0.768},0).wait(1).to({x:420.6,y:335.5,alpha:0.776},0).wait(1).to({x:418.1,y:334.4,alpha:0.785},0).wait(1).to({x:415.7,y:333.3,alpha:0.792},0).wait(1).to({x:413.4,y:332.2,alpha:0.8},0).wait(1).to({x:411,y:331.1,alpha:0.808},0).wait(1).to({x:408.8,y:330,alpha:0.816},0).wait(1).to({x:406.5,y:329,alpha:0.823},0).wait(1).to({x:404.3,y:327.9,alpha:0.83},0).wait(1).to({x:402.1,y:326.9,alpha:0.838},0).wait(1).to({x:400,y:325.9,alpha:0.845},0).wait(1).to({x:397.8,y:324.9,alpha:0.852},0).wait(1).to({x:395.7,y:323.9,alpha:0.859},0).wait(1).to({x:393.7,y:323,alpha:0.865},0).wait(1).to({x:391.7,y:322,alpha:0.872},0).wait(1).to({x:389.6,y:321.1,alpha:0.879},0).wait(1).to({x:387.7,y:320.2,alpha:0.885},0).wait(1).to({x:385.7,y:319.3,alpha:0.892},0).wait(1).to({x:383.8,y:318.4,alpha:0.898},0).wait(1).to({x:381.9,y:317.5,alpha:0.905},0).wait(1).to({x:380,y:316.6,alpha:0.911},0).wait(1).to({x:378.2,y:315.7,alpha:0.917},0).wait(1).to({x:376.3,y:314.9,alpha:0.923},0).wait(1).to({x:374.6,y:314,alpha:0.929},0).wait(1).to({x:372.8,y:313.2,alpha:0.935},0).wait(1).to({x:371,y:312.4,alpha:0.94},0).wait(1).to({x:369.3,y:311.6,alpha:0.946},0).wait(1).to({x:367.7,y:310.8,alpha:0.952},0).wait(1).to({x:366,y:310,alpha:0.957},0).wait(1).to({x:364.4,y:309.3,alpha:0.962},0).wait(1).to({x:362.8,y:308.6,alpha:0.968},0).wait(1).to({x:361.3,y:307.8,alpha:0.973},0).wait(1).to({x:359.8,y:307.1,alpha:0.978},0).wait(1).to({x:358.3,y:306.4,alpha:0.983},0).wait(1).to({x:356.9,y:305.8,alpha:0.987},0).wait(1).to({x:355.5,y:305.2,alpha:0.992},0).wait(1).to({x:354.2,y:304.6,alpha:0.996},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(81).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// K MID
	this.instance_6 = new lib.Tween3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(757.4,2.4);
	this.instance_6.alpha = 0;

	this.instance_7 = new lib.Tween4("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(395.9,181.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:746.7,y:7.6,alpha:0.03},0).wait(1).to({x:736.8,y:12.6,alpha:0.057},0).wait(1).to({x:727.4,y:17.2,alpha:0.083},0).wait(1).to({x:718.6,y:21.6,alpha:0.107},0).wait(1).to({x:710.1,y:25.7,alpha:0.131},0).wait(1).to({x:702.1,y:29.8,alpha:0.153},0).wait(1).to({x:694.3,y:33.6,alpha:0.175},0).wait(1).to({x:686.8,y:37.3,alpha:0.195},0).wait(1).to({x:679.5,y:40.9,alpha:0.216},0).wait(1).to({x:672.4,y:44.4,alpha:0.235},0).wait(1).to({x:665.6,y:47.8,alpha:0.254},0).wait(1).to({x:658.9,y:51.1,alpha:0.272},0).wait(1).to({x:652.4,y:54.3,alpha:0.29},0).wait(1).to({x:646.1,y:57.5,alpha:0.308},0).wait(1).to({x:639.9,y:60.5,alpha:0.325},0).wait(1).to({x:633.8,y:63.5,alpha:0.342},0).wait(1).to({x:627.9,y:66.5,alpha:0.358},0).wait(1).to({x:622.1,y:69.3,alpha:0.374},0).wait(1).to({x:616.4,y:72.2,alpha:0.39},0).wait(1).to({x:610.9,y:74.9,alpha:0.405},0).wait(1).to({x:605.4,y:77.6,alpha:0.42},0).wait(1).to({x:600.1,y:80.3,alpha:0.435},0).wait(1).to({x:594.8,y:82.8,alpha:0.45},0).wait(1).to({x:589.7,y:85.4,alpha:0.464},0).wait(1).to({x:584.7,y:87.9,alpha:0.478},0).wait(1).to({x:579.7,y:90.3,alpha:0.491},0).wait(1).to({x:574.9,y:92.7,alpha:0.505},0).wait(1).to({x:570.1,y:95.1,alpha:0.518},0).wait(1).to({x:565.5,y:97.4,alpha:0.531},0).wait(1).to({x:560.9,y:99.6,alpha:0.544},0).wait(1).to({x:556.4,y:101.9,alpha:0.556},0).wait(1).to({x:552,y:104,alpha:0.568},0).wait(1).to({x:547.7,y:106.2,alpha:0.58},0).wait(1).to({x:543.5,y:108.3,alpha:0.592},0).wait(1).to({x:539.4,y:110.3,alpha:0.603},0).wait(1).to({x:535.3,y:112.3,alpha:0.614},0).wait(1).to({x:531.4,y:114.3,alpha:0.625},0).wait(1).to({x:527.5,y:116.2,alpha:0.636},0).wait(1).to({x:523.8,y:118,alpha:0.646},0).wait(1).to({x:520.3,y:119.8,alpha:0.656},0).wait(1).to({x:516.9,y:121.4,alpha:0.665},0).wait(1).to({x:513.6,y:123.1,alpha:0.674},0).wait(1).to({x:510.5,y:124.6,alpha:0.683},0).wait(1).to({x:507.4,y:126.1,alpha:0.692},0).wait(1).to({x:504.4,y:127.6,alpha:0.7},0).wait(1).to({x:501.6,y:129,alpha:0.708},0).wait(1).to({x:498.7,y:130.4,alpha:0.716},0).wait(1).to({x:496,y:131.8,alpha:0.723},0).wait(1).to({x:493.3,y:133.1,alpha:0.731},0).wait(1).to({x:490.6,y:134.5,alpha:0.738},0).wait(1).to({x:488,y:135.7,alpha:0.745},0).wait(1).to({x:485.4,y:137,alpha:0.752},0).wait(1).to({x:482.9,y:138.3,alpha:0.759},0).wait(1).to({x:480.5,y:139.5,alpha:0.766},0).wait(1).to({x:478,y:140.7,alpha:0.773},0).wait(1).to({x:475.7,y:141.9,alpha:0.779},0).wait(1).to({x:473.3,y:143,alpha:0.786},0).wait(1).to({x:471,y:144.2,alpha:0.792},0).wait(1).to({x:468.7,y:145.3,alpha:0.799},0).wait(1).to({x:466.4,y:146.4,alpha:0.805},0).wait(1).to({x:464.2,y:147.5,alpha:0.811},0).wait(1).to({x:462,y:148.6,alpha:0.817},0).wait(1).to({x:459.8,y:149.7,alpha:0.823},0).wait(1).to({x:457.7,y:150.8,alpha:0.829},0).wait(1).to({x:455.5,y:151.8,alpha:0.835},0).wait(1).to({x:453.4,y:152.9,alpha:0.841},0).wait(1).to({x:451.4,y:153.9,alpha:0.847},0).wait(1).to({x:449.3,y:154.9,alpha:0.852},0).wait(1).to({x:447.3,y:155.9,alpha:0.858},0).wait(1).to({x:445.3,y:156.9,alpha:0.863},0).wait(1).to({x:443.3,y:157.9,alpha:0.869},0).wait(1).to({x:441.3,y:158.9,alpha:0.874},0).wait(1).to({x:439.4,y:159.8,alpha:0.88},0).wait(1).to({x:437.5,y:160.8,alpha:0.885},0).wait(1).to({x:435.6,y:161.7,alpha:0.89},0).wait(1).to({x:433.7,y:162.6,alpha:0.895},0).wait(1).to({x:431.9,y:163.5,alpha:0.901},0).wait(1).to({x:430,y:164.5,alpha:0.906},0).wait(1).to({x:428.2,y:165.4,alpha:0.911},0).wait(1).to({x:426.4,y:166.2,alpha:0.916},0).wait(1).to({x:424.6,y:167.1,alpha:0.921},0).wait(1).to({x:422.9,y:168,alpha:0.925},0).wait(1).to({x:421.2,y:168.8,alpha:0.93},0).wait(1).to({x:419.4,y:169.7,alpha:0.935},0).wait(1).to({x:417.8,y:170.5,alpha:0.94},0).wait(1).to({x:416.1,y:171.4,alpha:0.944},0).wait(1).to({x:414.4,y:172.2,alpha:0.949},0).wait(1).to({x:412.8,y:173,alpha:0.953},0).wait(1).to({x:411.2,y:173.8,alpha:0.958},0).wait(1).to({x:409.7,y:174.5,alpha:0.962},0).wait(1).to({x:408.1,y:175.3,alpha:0.966},0).wait(1).to({x:406.6,y:176,alpha:0.97},0).wait(1).to({x:405.1,y:176.8,alpha:0.974},0).wait(1).to({x:403.7,y:177.5,alpha:0.978},0).wait(1).to({x:402.3,y:178.2,alpha:0.982},0).wait(1).to({x:400.9,y:178.9,alpha:0.986},0).wait(1).to({x:399.6,y:179.5,alpha:0.99},0).wait(1).to({x:398.3,y:180.2,alpha:0.993},0).wait(1).to({x:397.1,y:180.8,alpha:0.997},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.9,21,1087.1,702.5);
// library properties:
lib.properties = {
	id: '858D7A5AC38F4343AB218BE291FC1CE3',
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
an.compositions['858D7A5AC38F4343AB218BE291FC1CE3'] = {
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