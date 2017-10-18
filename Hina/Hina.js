(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Hina_atlas_", frames: [[3923,1130,88,88],[3572,2896,383,98],[3619,932,196,196],[3636,466,230,231],[3386,554,230,231],[3636,0,231,231],[2784,2563,195,195],[3386,1019,208,82],[0,0,1390,822],[3714,1239,230,230],[3769,2699,196,82],[3769,2783,177,81],[2981,2958,192,82],[2981,3042,187,81],[1392,2472,1390,822],[3643,2167,280,136],[1392,1648,1390,822],[0,2472,1390,822],[1392,0,1390,822],[0,824,1390,822],[1392,824,1390,822],[0,1648,1390,822],[0,3296,1390,822],[3386,787,231,230],[3178,2529,195,195],[3017,1239,230,231],[3016,1704,230,230],[3712,1703,230,230],[3376,2365,195,195],[2784,1471,230,231],[3178,2923,193,195],[3868,466,228,230],[1392,3296,1390,822],[2981,2564,195,195],[2784,1704,230,230],[3481,1471,230,230],[3643,2305,195,195],[3480,1703,230,230],[3967,2502,125,126],[3713,1471,230,230],[3840,2305,195,195],[3248,1472,230,230],[3016,1472,230,230],[3619,699,230,231],[3851,699,230,231],[3869,0,195,196],[3869,198,196,195],[2784,1239,231,230],[3770,2502,195,195],[2784,1936,230,230],[2982,2168,195,196],[3249,1239,230,231],[3375,2562,195,195],[3248,1704,230,230],[3178,2726,195,195],[3712,1935,230,230],[2784,2168,196,195],[3481,1239,231,230],[3248,1936,195,196],[3480,1935,230,230],[2981,2761,195,195],[3573,2502,195,195],[2784,2760,195,195],[3636,233,231,231],[2784,2957,195,195],[2784,554,600,600],[3248,2134,196,195],[3375,2759,195,195],[3016,1936,230,230],[3446,2167,195,196],[3817,932,196,196],[3179,2331,195,196],[3373,2996,383,97],[2981,2366,195,196],[2784,2365,195,196],[3572,2699,195,195],[2784,1156,1137,81],[2784,0,850,552]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
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



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap102 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap105 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap106 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap107 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap109 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11copy = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap110 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap111 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap113 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap114 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap115 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap115copy = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap116 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap117 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap118 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap119 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap120 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap121 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap124 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap125 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29copy = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30copy = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap31copy = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap37 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap38 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap39 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43copy = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap47 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap48 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap49 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap51 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap52 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap53 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap54 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap55 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap56 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap57copy = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap60 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap63 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap66 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap68 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap69 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap72 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap79 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap82 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap86 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap89 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9copy = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap92 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap97 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.Squeare = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.Title = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.tray2 = function() {
	this.spriteSheet = ss["Hina_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.z_d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap102();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-44.1,0.45,0.45);

	this.instance_1 = new lib.Bitmap68();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-53,-53,0.455,0.455);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-44.1,88.2,88.2);


(lib.us_c5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap66();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-44.1,0.452,0.452);

	this.instance_1 = new lib.Bitmap6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-53,-52,0.457,0.457);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-44.1,88.2,88.2);


(lib.Tray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tray2();
	this.instance.parent = this;
	this.instance.setTransform(-274,-235,1,0.876);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274,-235,850,483.6);


(lib.t_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap111();
	this.instance.parent = this;
	this.instance.setTransform(-98,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-41,196,82);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap43();
	this.instance.parent = this;
	this.instance.setTransform(-97.5,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-98,195,196);


(lib.Squareforfood = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Squeare();
	this.instance.parent = this;
	this.instance.setTransform(-98,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-97,195,195);


(lib.smusa_b5_t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap52();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-52.5,0.457,0.457);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.smusa_b5_t, new cjs.Rectangle(-52.5,-52.5,105,105), null);


(lib.sm_d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap97();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-44.3,0.452,0.452);

	this.instance_1 = new lib.Bitmap105();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-53,-53,0.457,0.456);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-44.3,88.2,88.7);


(lib.sm_c6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap69();
	this.instance.parent = this;
	this.instance.setTransform(-97.5,-97.5);

	this.instance_1 = new lib.Bitmap8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-114,-115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-97.5,195,195);


(lib.sk_b3_t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap47();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-52.5,0.457,0.457);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sk_b3_t, new cjs.Rectangle(-52.5,-52.5,105,105), null);


(lib.Sinun1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap9copy();
	this.instance.parent = this;
	this.instance.setTransform(-116.4,-29.5,0.608,0.608);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.4,-29.5,232.9,59);


(lib.sa_d7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap79();
	this.instance.parent = this;
	this.instance.setTransform(-97.5,-97.5);

	this.instance_1 = new lib.Bitmap21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-115,-115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-97.5,195,195);


(lib.s_d6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap82();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-52.7,0.538,0.539);

	this.instance_1 = new lib.Bitmap34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62,-63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-52.7,105,105.6);


(lib.restart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap116();
	this.instance.parent = this;
	this.instance.setTransform(-110,-86);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ARmJAQhCBkhZBbQloFyn8AAQn8AAlolyQlolzAAoLQAAoNFolzQA8g+BAgz");
	this.shape.setTransform(-6.7,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtkN/QlolyAAoNQAAmLDNk1QBDhkBYhaQFplzH7AAQH9AAFnFzQFpFzAAILQAAINlpFyQg7A+hAAzQlBECmoAAQn7AAlplzg");
	this.shape_1.setTransform(31.5,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.3,-133.4,290.3,284.5);


(lib.pre_a2_t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap25();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-52.7,0.457,0.456);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-52.7,105,105.5);


(lib.matok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap114();
	this.instance.parent = this;
	this.instance.setTransform(-92,-41);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AyDjTMAkHAAAIAAGnMgkHAAAg");
	this.shape.setTransform(-0.6,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AyCDUIAAmnMAkFAAAIAAGng");
	this.shape_1.setTransform(-0.6,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.2,-41,233.1,82);


(lib.marokait_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(-104,-41);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0QD6IAAnzMAogAAAIAAHzg");
	this.shape.setTransform(-3.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.8,-41,259.3,82);


(lib.maluah = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap115();
	this.instance.parent = this;
	this.instance.setTransform(-83,-41);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwND3IAAntMAgbAAAIAAHtg");
	this.shape.setTransform(7.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AwNj2MAgbAAAIAAHtMggbAAAg");
	this.shape_1.setTransform(0.3,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-41,216.2,81);


(lib.malavah_b7_t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap56();
	this.instance.parent = this;
	this.instance.setTransform(-115.5,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.malavah_b7_t, new cjs.Rectangle(-115.5,-115,231,230), null);


(lib.makrod_b4_t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap49();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-52.7,0.457,0.456);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.makrod_b4_t, new cjs.Rectangle(-52.5,-52.7,105,105.5), null);


(lib.m_b6_t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap54();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-52.5,0.457,0.457);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-52.5,105,105);


(lib.lukum_a6_t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap37();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-52.5,0.457,0.457);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-52.5,105,105);


(lib.lado_b2_t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap44();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-52.2,0.455,0.455);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lado_b2_t, new cjs.Rectangle(-52.5,-52.2,105,104.6), null);


(lib.kuban_a3_t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap28();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-52.9,0.461,0.46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-52.9,105,105.9);


(lib.k_d4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap89();
	this.instance.parent = this;
	this.instance.setTransform(-97.5,-98);

	this.instance_1 = new lib.Bitmap42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-115,-115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-98,195,196);


(lib.k_c2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap57copy();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-44.3,0.452,0.452);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-52,-52,0.457,0.456);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-44.3,88.2,88.7);


(lib.jahnun_b1_t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap41();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-52.7,0.457,0.456);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.jahnun_b1_t, new cjs.Rectangle(-52.5,-52.7,105,105.5), null);


(lib.info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.info = new cjs.Text("i", "170px 'Arial Rounded MT Bold'");
	this.info.name = "info";
	this.info.textAlign = "center";
	this.info.lineHeight = 199;
	this.info.lineWidth = 120;
	this.info.parent = this;
	this.info.setTransform(-9,-112.1);

	this.timeline.addTween(cjs.Tween.get(this.info).wait(1));

}).prototype = getMCSymbolPrototype(lib.info, new cjs.Rectangle(-71,-114.1,124,200.7), null);


(lib.halve_a1_t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-115,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-115,230,230);


(lib.h_c7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap72();
	this.instance.parent = this;
	this.instance.setTransform(-98,-97.5);

	this.instance_1 = new lib.Bitmap15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-115,-114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-97.5,196,195);


(lib.h_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap113();
	this.instance.parent = this;
	this.instance.setTransform(-56.1,-25.7,0.635,0.635);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-25.7,112.3,51.4);


(lib.gg_a5_t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap32();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-52.5,0.457,0.457);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-52.5,105,105);


(lib.f_c3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap60();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-44.1,0.452,0.452);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-53,-53,0.457,0.457);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-44.1,y:-44.1}}]}).to({state:[{t:this.instance,p:{x:-45,y:-45}},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-44.1,88.2,88.2);


(lib.close_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-4,-8,0.018,0.018);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiVB4Qg2grgHg8IgBgRQAAhFA+gyQA+gyBXAAQBYAAA+AyQA+AyAABFIgBASQgBAOgFAOQgOApgpAhQg+AyhYAAQhXAAg+gyg");
	this.shape.setTransform(1.9,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADUhAQgEA/g5AtQg+AyhZAAQhXAAg+gyQg+gxAAhGQAAgJABgJ");
	this.shape_1.setTransform(1.2,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-19.4,44.4,37.8);


(lib.ap_a4_t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap30copy();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-52.5,0.457,0.457);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-52.5,105,105);


(lib.ag_a7_t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap39();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-52.5,0.457,0.457);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ag_a7_t, new cjs.Rectangle(-52.5,-52.5,105,105), null);


(lib.teimanit_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t_b();
	this.instance.parent = this;
	this.instance.setTransform(-1.8,-1.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0QD7IAAn1MAohAAAIAAH1g");
	this.shape.setTransform(-9.4,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.1,-42.1,259.3,82);


(lib.smusa_b5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap51();
	this.instance.parent = this;
	this.instance.setTransform(-97.5,-97.5);

	this.instance_1 = new lib.info();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.1,-28.7,0.172,0.172,0,0,0,-148,148);

	this.instance_2 = new lib.smusa_b5_t("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,0.1,2.19,2.19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-97.5,195,195);


(lib.sk_b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap45();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-44.1,0.452,0.452);

	this.instance_1 = new lib.sk_b3_t("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-44.1,88.2,88.2);


(lib.s_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(-254.2,-129.3,1.517,1.517,0,0,0,-0.2,-0.1);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.instance = new lib.Bitmap125();
	this.instance.parent = this;
	this.instance.setTransform(-303,-179.1,0.436,0.436);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.close_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.s_text, new cjs.Rectangle(-303,-179.1,606,358.4), null);


(lib.rl_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(-258.3,-132.6,1.517,1.517,0,0,0,-0.2,-0.1);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.instance = new lib.Bitmap121();
	this.instance.parent = this;
	this.instance.setTransform(-303,-179.1,0.436,0.436);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.close_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rl_text, new cjs.Rectangle(-303,-179.1,606,358.4), null);


(lib.pre_a2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap23();
	this.instance.parent = this;
	this.instance.setTransform(-97.5,-97.5);

	this.instance_1 = new lib.pre_a2_t("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,2.19,2.19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-97.5,195,195);


(lib.malavah_b7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap55();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-43.8,0.45,0.45);

	this.malavah_b7_t = new lib.malavah_b7_t();
	this.malavah_b7_t.parent = this;
	this.malavah_b7_t.setTransform(0,0,0.455,0.454);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.malavah_b7_t}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-43.8,88.2,87.8);


(lib.makrod_b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap48();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-44.3,0.452,0.452);

	this.instance_1 = new lib.info();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.8,-26.1,0.071,0.071);

	this.instance_2 = new lib.makrod_b4_t("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-44.3,88.2,88.7);


(lib.m_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(-258.3,-131.6,1.517,1.517,0,0,0,-0.2,-0.1);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.instance = new lib.Bitmap120();
	this.instance.parent = this;
	this.instance.setTransform(-303,-178,0.436,0.436);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.close_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m_text, new cjs.Rectangle(-303,-178,606,358.4), null);


(lib.m_b6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap53();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-44.1,0.452,0.452);

	this.instance_1 = new lib.m_b6_t("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-44.1,88.2,88.2);


(lib.lukum_a6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-44,-44);

	this.instance_1 = new lib.info();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.7,-24.5,0.071,0.071,0,0,0,0,0.7);

	this.instance_2 = new lib.lukum_a6_t("synched",0);
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-44,88,88);


(lib.lp_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(-258.3,-128.9,1.517,1.517,0,0,0,-0.2,-0.1);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.instance = new lib.Bitmap119();
	this.instance.parent = this;
	this.instance.setTransform(-303,-179.1,0.436,0.436);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.close_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lp_text, new cjs.Rectangle(-303,-179.1,606,358.4), null);


(lib.lp_c4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap63();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-44.1,0.452,0.452);

	this.instance_1 = new lib.info();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.9,-26.6,0.071,0.071,0,0,0,0,0.7);

	this.instance_2 = new lib.Bitmap4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-52,-53,0.457,0.457);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-44.1,88.2,88.2);


(lib.lado_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(-257.5,-132.8,1.517,1.517,0,0,0,-0.2,-0.1);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.instance = new lib.Bitmap115copy();
	this.instance.parent = this;
	this.instance.setTransform(-303,-179.1,0.436,0.436);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.close_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lado_text, new cjs.Rectangle(-303,-179.1,606,358.4), null);


(lib.lado_b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap43copy();
	this.instance.parent = this;
	this.instance.setTransform(-98,-97.5);

	this.instance_1 = new lib.info();
	this.instance_1.parent = this;
	this.instance_1.setTransform(64.4,-60.1,0.13,0.13,0,0,0,0,0.8);

	this.instance_2 = new lib.lado_b2_t("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.1,-0.1,2.19,2.19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-97.5,196,195);


(lib.kuban_a3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap27();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-44.5,0.457,0.457);

	this.instance_1 = new lib.kuban_a3_t("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-44.5,88.2,89.1);


(lib.jahnun_b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(114.5,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.info();
	this.instance_1.parent = this;
	this.instance_1.setTransform(148.7,-29.1,0.172,0.172,0,0,0,-148,148);

	this.instance_2 = new lib.jahnun_b1_t("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(115,0.8,2.19,2.19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17,-98,195,196);


(lib.hodit_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.h_b();
	this.instance.parent = this;
	this.instance.setTransform(3.2,-0.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArQCyIAAljIWgAAIAAFjg");
	this.shape.setTransform(-5.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.3,-26,144.1,51.4);


(lib.halve_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(-1669,-1040.2,3.511,3.511);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.instance = new lib.Bitmap29();
	this.instance.parent = this;
	this.instance.setTransform(-1773,-1149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.close_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1773,-1149,1390,822);


(lib.halve_a1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap16();
	this.instance.parent = this;
	this.instance.setTransform(-97.5,-97.5);

	this.instance_1 = new lib.info();
	this.instance_1.parent = this;
	this.instance_1.setTransform(58.3,-58.7,0.172,0.172,0,0,0,0,0.6);

	this.instance_2 = new lib.halve_a1_t("synched",0);
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-97.5,195,195);


(lib.h_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(-259.6,-135.1,1.517,1.517,0,0,0,-0.2,-0.1);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.instance = new lib.Bitmap118();
	this.instance.parent = this;
	this.instance.setTransform(-303,-179.1,0.436,0.436);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.close_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.h_text, new cjs.Rectangle(-303,-179.1,606,358.4), null);


(lib.h_d5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap86();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-44.1,0.45,0.45);

	this.instance_1 = new lib.info();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.4,-26,0.071,0.071,0,0,0,0,0.7);

	this.instance_2 = new lib.Bitmap107();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-53,-53,0.455,0.455);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-44.1,88.2,88.2);


(lib.gg_a5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap31copy();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-44.1,0.452,0.452);

	this.instance_1 = new lib.gg_a5_t("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-44.1,88.2,88.2);


(lib.g_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(-256.2,-131.3,1.517,1.517,0,0,0,-0.2,-0.1);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.instance = new lib.Bitmap124();
	this.instance.parent = this;
	this.instance.setTransform(-303,-179.1,0.436,0.436);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.close_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.g_text, new cjs.Rectangle(-303,-179.1,606,358.4), null);


(lib.dusa_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(-578.2,-204.8,1.544,1.544,0,0,0,-0.1,-0.3);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.instance = new lib.Bitmap11copy();
	this.instance.parent = this;
	this.instance.setTransform(-624,-245,0.436,0.436);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.close_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-624,-245,606.7,358.8);


(lib.dusa_c1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap109();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-44.1,0.452,0.452);

	this.instance_1 = new lib.info();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.4,-25.9,0.071,0.071,0,0,0,0,0.7);

	this.instance_2 = new lib.Bitmap110();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-53,-52,0.457,0.457);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-44.1,y:-44.1}}]}).to({state:[{t:this.instance,p:{x:-44,y:-43}},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-44.1,88.2,88.2);


(lib.b_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.close_mc = new lib.close_mc();
	this.close_mc.parent = this;
	this.close_mc.setTransform(-259.3,-135.4,1.517,1.517,0,0,0,-0.2,-0.1);
	new cjs.ButtonHelper(this.close_mc, 0, 1, 1);

	this.instance = new lib.Bitmap117();
	this.instance.parent = this;
	this.instance.setTransform(-303,-179.1,0.436,0.436);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.close_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.b_text, new cjs.Rectangle(-303,-179.1,606,358.4), null);


(lib.b_d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap92();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-44.3,0.452,0.452);

	this.instance_1 = new lib.info();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.9,-25.5,0.071,0.071,0,0,0,0,0.7);

	this.instance_2 = new lib.Bitmap106();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-52,-52,0.457,0.456);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-44.3,88.2,88.7);


(lib.ap_a4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap29copy();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-44.1,0.452,0.452);

	this.instance_1 = new lib.ap_a4_t("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-44.1,88.2,88.2);


(lib.ag_a7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap38();
	this.instance.parent = this;
	this.instance.setTransform(-44.1,-44.1,0.452,0.452);

	this.ag_a7_t = new lib.ag_a7_t();
	this.ag_a7_t.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.ag_a7_t}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-44.1,88.2,88.2);


// stage content:
(lib.Hina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var wasclicked=0
		var Marokaitwasclicked=0
		var Hoditwasclicked=0
		var Teimanitwasclicked=0
		var Matokwasclicked=0
		var Maluahwasclicked=0
		
		
		
		
		//הסתרת תיבות טקסט
		this.halve_text.alpha=0;
		this.dusa_text.alpha=0;
		this.lado_text.alpha=0;
		this.b_text.alpha=0;
		this.h_text.alpha=0;
		this.lp_text.alpha=0;
		this.m_text.alpha=0;
		this.rl_text.alpha=0;
		this.g_text.alpha=0;
		this.s_text.alpha=0;
		
		//הוספת ארוע לפתיחת תיבת טקסט
		this.halve_a1.addEventListener("click", f_MouseClickhalve.bind(this));
		this.dusa_c1.addEventListener("click", f_MouseClickdusa.bind(this));
		this.lado_b2.addEventListener("click", f_MouseClicklado.bind(this));
		this.b_d3.addEventListener("click", f_MouseClickbaklava.bind(this));
		this.h_d5.addEventListener("click", f_MouseClickhumus.bind(this));
		this.lp_c4.addEventListener("click", f_MouseClicklehem.bind(this));
		this.makrod_b4.addEventListener("click", f_MouseClickmakrod.bind(this));
		this.lukum_a6.addEventListener("click", f_MouseClicklukum.bind(this));
		this.smusa_b5.addEventListener("click", f_MouseClicksmusa.bind(this));
		this.jahnun_b1.addEventListener("click", f_MouseClickjahnun.bind(this));
		
		//פונקציות לצורך ארועי פתיחת טיבט טקסט
		function f_MouseClickhalve(event)
		{
			this.halve_text.alpha=1;
			wasclicked=1
			console.log(wasclicked);
		}
		
		function f_MouseClickdusa(event)
		{
			this.dusa_text.alpha=1;
			wasclicked=1
			console.log(wasclicked);
		}
		
		function f_MouseClicklado(event)
		{
			this.lado_text.alpha=1;
			wasclicked=1
			console.log(wasclicked);
		}
		
		function f_MouseClickbaklava(event)
		{
			this.b_text.alpha=1;
			wasclicked=1
			console.log(wasclicked);
		}
		
		function f_MouseClickhumus(event)
		{
			this.h_text.alpha=1;
			wasclicked=1
			console.log(wasclicked);
		}
		
		function f_MouseClicklehem(event)
		{
			this.lp_text.alpha=1;
			wasclicked=1
			console.log(wasclicked);
		}
		
		function f_MouseClickmakrod(event)
		{
			this.m_text.alpha=1;
			wasclicked=1
			console.log(wasclicked);
		}
		
		function f_MouseClicklukum(event)
		{
			this.rl_text.alpha=1;
			wasclicked=1
			console.log(wasclicked);
		}
		
		function f_MouseClicksmusa(event)
		{
			this.s_text.alpha=1;
			wasclicked=1
			console.log(wasclicked);
		}
		
		function f_MouseClickjahnun(event)
		{
			this.g_text.alpha=1;
			wasclicked=1
			console.log(wasclicked);
		}
		
		// ארועי סגירה של תיבות טקסט
		this.dusa_text.close_mc.addEventListener("click", f_closedusa.bind(this));
		this.halve_text.close_mc.addEventListener("click", f_closehalve.bind(this));
		this.lado_text.close_mc.addEventListener("click", f_closelado.bind(this));
		this.b_text.close_mc.addEventListener("click", f_closebaklava.bind(this));
		this.h_text.close_mc.addEventListener("click", f_closehumus.bind(this));
		this.lp_text.close_mc.addEventListener("click", f_closelehem.bind(this));
		this.m_text.close_mc.addEventListener("click", f_closemakrod.bind(this));
		this.rl_text.close_mc.addEventListener("click", f_closelukum.bind(this));
		this.g_text.close_mc.addEventListener("click", f_closejahnun.bind(this));
		this.s_text.close_mc.addEventListener("click", f_closesmusa.bind(this));
		
		
		
		//פונקציות סגירה של טיבות טקסט
		function f_closedusa()
		{
			this.dusa_text.alpha=0;
			wasclicked=0
			console.log(wasclicked);
			
		}
		
		function f_closehalve()
		{
			this.halve_text.alpha=0;
			wasclicked=0
			console.log(wasclicked);
			
		}
		
		function f_closelado()
		{
			this.lado_text.alpha=0;
			wasclicked=0
			console.log(wasclicked);
			
		}
		
		function f_closebaklava()
		{
			this.b_text.alpha=0;
			wasclicked=0
			console.log(wasclicked);
			
		}
		
		function f_closehumus()
		{
			this.h_text.alpha=0;
			wasclicked=0
			console.log(wasclicked);
			
		}
		
		function f_closelehem()
		{
			this.lp_text.alpha=0;
			wasclicked=0
			console.log(wasclicked);
			
		}
		
		function f_closemakrod()
		{
			this.m_text.alpha=0;
			wasclicked=0
			console.log(wasclicked);
			
		}
		
		function f_closelukum()
		{
			this.rl_text.alpha=0;
			wasclicked=0
			console.log(wasclicked);
			
		}
		
		function f_closesmusa()
		{
			this.s_text.alpha=0;
			wasclicked=0
			console.log(wasclicked);
			
		}
		function f_closejahnun()
		{
			this.g_text.alpha=0;
			wasclicked=0
			console.log(wasclicked);
			
		}
		
		
		//מסננים://
		
		
		//מסנן של מרוקאיות במצב מעבר עכבר
		
		this.marokait_btn.addEventListener("mouseover", fh_marokait.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fh_marokait()
		{
			if(Marokaitwasclicked==0)
			{
			console.log("hit")
		    fadeelsebutnotmarokait.bind(this)();
			this.marokait_btn.alpha=1
		}
		
		}
		
		//מסנן של מרוקאיות לאחר מעבר עכבר
		
		this.marokait_btn.addEventListener("mouseout", fh_marokaitout.bind(this));
		
		function fh_marokaitout()
		{
			if(Marokaitwasclicked==0)
			{
			console.log("hit")
			showelse.bind(this)();
			this.marokait_btn.alpha=0.33
		}
			
		}
		
		//מסנן של מרוקאיות בלחיצה
		
		this.marokait_btn.addEventListener("click", fl_MouseClickOnMarokaitOn.bind(this));
		
		function fl_MouseClickOnMarokaitOn()
		{
			if(Marokaitwasclicked==0)
				{
				fadeelsebutnotmarokait.bind(this)();
				this.marokait_btn.alpha=1
				Marokaitwasclicked=1;
				}
					else if(Marokaitwasclicked==1)
					{
					showelse.bind(this)();
					this.marokait_btn.alpha=0.33
					Marokaitwasclicked=0;
					}
		}
		
		
		
		function fadeelsebutnotmarokait()
		{
			this.halve_a1.alpha=0.1
			this.pre_a2.alpha=0.1
			this.kuban_a3.alpha=0.1
			this.ap_a4.alpha=0.1
			this.gg_a5.alpha=0.1
			this.lukum_a6.alpha=0.1
			this.ag_a7.alpha=0.1
			this.jahnun_b1.alpha=0.1
			this.lado_b2.alpha=0.1
			this.sk_b3.alpha=0.1
			this.smusa_b5.alpha=0.1
			this.m_b6.alpha=0.1
			this.malavah_b7.alpha=0.1
			this.dusa_c1.alpha=0.1
			this.k_c2.alpha=0.1
			this.f_c3.alpha=0.1
			this.sm_c6.alpha=0.1	
			this.h_c7.alpha=0.1
			this.z_d1.alpha=0.1
			this.k_d4.alpha=0.1
			this.sa_d7.alpha=0.1
		}
		
		function showelse()
		{
			this.halve_a1.alpha=1
			this.pre_a2.alpha=1
			this.kuban_a3.alpha=1
			this.ap_a4.alpha=1
			this.gg_a5.alpha=1
			this.lukum_a6.alpha=1
			this.ag_a7.alpha=1
			this.jahnun_b1.alpha=1
			this.lado_b2.alpha=1
			this.sk_b3.alpha=1
			this.makrod_b4.alpha=1
			this.smusa_b5.alpha=1
			this.m_b6.alpha=1
			this.malavah_b7.alpha=1
			this.dusa_c1.alpha=1
			this.k_c2.alpha=1
			this.f_c3.alpha=1
			this.lp_c4.alpha=1
			this.us_c5.alpha=1
			this.sm_c6.alpha=1
			this.h_c7.alpha=1
			this.z_d1.alpha=1
			this.sm_d2.alpha=1
			this.b_d3.alpha=1
			this.k_d4.alpha=1
			this.h_d5.alpha=1
			this.s_d6.alpha=1
			this.sa_d7.alpha=1
			wasclicked=0
			Marokaitwasclicked=0
			Hoditwasclicked=0
			Teimanitwasclicked=0
			Matokwasclicked=0
			Maluahwasclicked=0
			this.marokait_btn.alpha=0.33
			this.teimanit_btn.alpha=0.33
			this.hodit_btn.alpha=0.33
			this.matok.alpha=0.33
			this.maluah.alpha=0.33
		}
		
		
		
		
		
		
		
		//מסנן של תימנית
		
		this.teimanit_btn.addEventListener("click", fl_MouseClickOnTeimanit.bind(this));
		
		function fl_MouseClickOnTeimanit()
		{
			if( Teimanitwasclicked==0 )
				{
				fadeelsebutnotteimanit.bind(this)();
				this.teimanit_btn.alpha=1
				Teimanitwasclicked=1;
				}
					else if(Teimanitwasclicked==1)
					{
					showelse.bind(this)();
					this.teimanit_btn.alpha=0.33
					Teimanitwasclicked=0;
					}
		}
		
		function fadeelsebutnotteimanit()
		{
			this.halve_a1.alpha=0.1
			this.pre_a2.alpha=0.1
			this.ap_a4.alpha=0.1
			this.gg_a5.alpha=0.1
			this.ag_a7.alpha=0.1
			this.lado_b2.alpha=0.1
			this.makrod_b4.alpha=0.1
			this.smusa_b5.alpha=0.1
			this.m_b6.alpha=0.1
			this.dusa_c1.alpha=0.1
			this.k_c2.alpha=0.1
			this.f_c3.alpha=0.1
			this.lp_c4.alpha=0.1
			this.us_c5.alpha=0.1
			this.sm_c6.alpha=0.1
			this.h_d5.alpha=0.1
			this.sm_d2.alpha=0.1
			this.b_d3.alpha=0.1
			this.s_d6.alpha=0.1
		
		}
		
		
		//מסנן של תימנית במצב מעבר עכבר
		
		this.teimanit_btn.addEventListener("mouseover", fh_teimanit.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fh_teimanit()
		{
			if( Teimanitwasclicked==0 )
			{
			console.log("hit")
			fadeelsebutnotteimanit.bind(this)();
			this.teimanit_btn.alpha=1
		}
		
		}
		
		//מסנן של תימנית לאחר מעבר עכבר
		
		this.teimanit_btn.addEventListener("mouseout", fh_teimanitout.bind(this));
		
		function fh_teimanitout()
		{
			if(Teimanitwasclicked==0)
			{
			showelse.bind(this)();
			this.teimanit_btn.alpha=0.33
		}
			
		}
		
		
		
		
		//מסנן של הודית במצב מעבר עכבר
		
		this.hodit_btn.addEventListener("mouseover", fh_hodit.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fh_hodit()
		{
			if(Hoditwasclicked==0)
			{
			console.log("hit")
		    fadeelsebutnothodit.bind(this)();
			this.hodit_btn.alpha=1
		}
		
		}
		
		//מסנן של הודית לאחר מעבר עכבר
		
		this.hodit_btn.addEventListener("mouseout", fh_hoditout.bind(this));
		
		function fh_hoditout()
		{
			if( Hoditwasclicked==0 )
			{
			console.log("hit")
			showelse.bind(this)();
			this.hodit_btn.alpha=0.33
		}
			
		}
		
		//מסנן של מרוקאיות בלחיצה
		
		this.hodit_btn.addEventListener("click", fl_MouseClickOnHodit.bind(this));
		
		function fl_MouseClickOnHodit()
		{
			if(Hoditwasclicked==0)
				{
				fadeelsebutnothodit.bind(this)();
				this.hodit_btn.alpha=1
				Hoditwasclicked=1;
				}
					else if(Hoditwasclicked==1)
					{
					showelse.bind(this)();
					this.hodit_btn.alpha=0.33
					Hoditwasclicked=0;
					}
		}
		
		
		
		function fadeelsebutnothodit()
		{
			this.kuban_a3.alpha=0.1
			this.lukum_a6.alpha=0.1
			this.jahnun_b1.alpha=0.1
			this.sk_b3.alpha=0.1
			this.makrod_b4.alpha=0.1
			this.malavah_b7.alpha=0.1
			this.lp_c4.alpha=0.1
			this.us_c5.alpha=0.1
			this.h_c7.alpha=0.1
			this.z_d1.alpha=0.1
			this.sm_d2.alpha=0.1
			this.b_d3.alpha=0.1
			this.k_d4.alpha=0.1
			this.h_d5.alpha=0.1
			this.s_d6.alpha=0.1
			this.sa_d7.alpha=0.1
		}
		
		
		
		
		//מסנן של מתוקים במצב מעבר עכבר
		
		this.matok.addEventListener("mouseover", fh_matok.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fh_matok()
		{
			if(Matokwasclicked==0)
			{
				if(Maluahwasclicked==1)
				{
						this.halve_a1.alpha=1
			this.pre_a2.alpha=1
			this.kuban_a3.alpha=1
			this.ap_a4.alpha=1
			this.gg_a5.alpha=1
			this.lukum_a6.alpha=1
			this.ag_a7.alpha=1
			this.jahnun_b1.alpha=1
			this.lado_b2.alpha=1
			this.sk_b3.alpha=1
			this.makrod_b4.alpha=1
			this.smusa_b5.alpha=1
			this.m_b6.alpha=1
			this.malavah_b7.alpha=1
			this.dusa_c1.alpha=1
			this.k_c2.alpha=1
			this.f_c3.alpha=1
			this.lp_c4.alpha=1
			this.us_c5.alpha=1
			this.sm_c6.alpha=1
			this.h_c7.alpha=1
			this.z_d1.alpha=1
			this.sm_d2.alpha=1
			this.b_d3.alpha=1
			this.k_d4.alpha=1
			this.h_d5.alpha=1
			this.s_d6.alpha=1
			this.sa_d7.alpha=1
				this.matok.alpha=1
					}
				else
				{
			console.log("hit")
		    fadeelsebutnotmatok.bind(this)();
			this.matok.alpha=1
				}
		}
		
		}
		
		
		
		//מסנן של מתוקים בלחיצה
		
		this.matok.addEventListener("click", fl_MouseClickOnMatok.bind(this));
		
		function fl_MouseClickOnMatok()
		{
			if(Matokwasclicked==0)
				{
				fadeelsebutnotmatok.bind(this)();
				this.matok.alpha=1
				Matokwasclicked=1;
				}
					else if(Matokwasclicked==1)
					{
					showelse.bind(this)();
					this.matok.alpha=0.33
					Matokwasclicked=0;
					}
		}
		
		
		
		function fadeelsebutnotmatok()
		{
			this.jahnun_b1.alpha=0.1
			this.smusa_b5.alpha=0.1
			this.ap_a4.alpha=0.1
			this.ag_a7.alpha=0.1
			this.dusa_c1.alpha=0.1
			this.f_c3.alpha=0.1
			this.sm_d2.alpha=0.1
			this.h_d5.alpha=0.1
			this.lp_c4.alpha=0.1
			this.sm_c6.alpha=0.1
			this.z_d1.alpha=0.1
			this.k_d4.alpha=0.1
			this.malavah_b7.alpha=0.1
			this.sa_d7.alpha=0.1
			this.kuban_a3.alpha=0.1
		}
		
		
		//מסנן של מתוקים לאחר מעבר עכבר
		
		this.matok.addEventListener("mouseout", fh_matokout.bind(this));
		
		function fh_matokout()
		{
			if(Matokwasclicked==0)
			{
			console.log("hit")
			showelse.bind(this)();
			this.matok.alpha=0.33
		}
			
		}
		
		
		//מסנן של מלוחים במצב מעבר עכבר
		
		this.maluah.addEventListener("mouseover", fh_maluah.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fh_maluah()
		{
			if(Maluahwasclicked==0)
			{
						if(Matokwasclicked==1)
						{
						this.halve_a1.alpha=1
						this.pre_a2.alpha=1
						this.kuban_a3.alpha=1
						this.ap_a4.alpha=1
						this.gg_a5.alpha=1
						this.lukum_a6.alpha=1
						this.ag_a7.alpha=1
						this.jahnun_b1.alpha=1
						this.lado_b2.alpha=1
						this.sk_b3.alpha=1
						this.makrod_b4.alpha=1
						this.smusa_b5.alpha=1
						this.m_b6.alpha=1
						this.malavah_b7.alpha=1
						this.dusa_c1.alpha=1
						this.k_c2.alpha=1
						this.f_c3.alpha=1
						this.lp_c4.alpha=1
						this.us_c5.alpha=1
						this.sm_c6.alpha=1
						this.h_c7.alpha=1
						this.z_d1.alpha=1
						this.sm_d2.alpha=1
						this.b_d3.alpha=1
						this.k_d4.alpha=1
						this.h_d5.alpha=1
						this.s_d6.alpha=1
						this.sa_d7.alpha=1
						this.matok.alpha=1				
						}
				else
				{
				console.log("hit")
				fadeelsebutnotmaluah.bind(this)();
				this.maluah.alpha=1
				}
		
		}
		}
		
		//מסנן של מלוחים לאחר מעבר עכבר
		
		this.maluah.addEventListener("mouseout", fh_maluahout.bind(this));
		
		function fh_maluahout()
		{
			if(Maluahwasclicked==0)
			{
			console.log("hit")
			showelse.bind(this)();
			this.maluah.alpha=0.33
		}
			
		}
		
		//מסנן של מלוחים בלחיצה
		
		this.maluah.addEventListener("click", fl_MouseClickOnMaluah.bind(this));
		
		function fl_MouseClickOnMaluah()
		{
			if(Maluahwasclicked==0)
				{
				fadeelsebutnotmaluah.bind(this)();
				this.maluah.alpha=1
				Maluahwasclicked=1;
				}
					else if(Maluahwasclicked==1)
					{
					showelse.bind(this)();
					this.maluah.alpha=0.33
					Maluahwasclicked=0;
					}
		}
		
		
		
		function fadeelsebutnotmaluah()
		{
			this.halve_a1.alpha=0.1
			this.pre_a2.alpha=0.1
			this.gg_a5.alpha=0.1
			this.lukum_a6.alpha=0.1
			this.lado_b2.alpha=0.1
			this.sk_b3.alpha=0.1
			this.makrod_b4.alpha=0.1
			this.m_b6.alpha=0.1
			this.k_c2.alpha=0.1
			this.us_c5.alpha=0.1
			this.h_c7.alpha=0.1
			this.b_d3.alpha=0.1
			this.s_d6.alpha=0.1
		
		}
		
		
		//כפתור נקה סינון//
		
		this.restart.addEventListener("click", fl_MouseClickOnRestart.bind(this));
		
		function fl_MouseClickOnRestart()
		{
			
				showelse.bind(this)();
				this.marokait_btn.alpha=0.33
				this.teimanit_btn.alpha=0.33
				this.hodit_btn.alpha=0.33
				this.matok.alpha=0.33
				this.maluah.alpha=0.33
				wasclicked=0
				Marokaitwasclicked=0
				Hoditwasclicked=0
				Teimanitwasclicked=0
				Matokwasclicked=0
				Maluahwasclicked=0
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Text Boxes
	this.s_text = new lib.s_text();
	this.s_text.parent = this;
	this.s_text.setTransform(401,343);

	this.g_text = new lib.g_text();
	this.g_text.parent = this;
	this.g_text.setTransform(403,343);

	this.rl_text = new lib.rl_text();
	this.rl_text.parent = this;
	this.rl_text.setTransform(404.1,343);

	this.m_text = new lib.m_text();
	this.m_text.parent = this;
	this.m_text.setTransform(404.1,341.1);

	this.lp_text = new lib.lp_text();
	this.lp_text.parent = this;
	this.lp_text.setTransform(405.1,342.4);

	this.h_text = new lib.h_text();
	this.h_text.parent = this;
	this.h_text.setTransform(404.7,342.4);

	this.b_text = new lib.b_text();
	this.b_text.parent = this;
	this.b_text.setTransform(404.7,341);

	this.halve_text = new lib.halve_text();
	this.halve_text.parent = this;
	this.halve_text.setTransform(875.5,664.8,0.436,0.436);

	this.lado_text = new lib.lado_text();
	this.lado_text.parent = this;
	this.lado_text.setTransform(405.3,342);

	this.dusa_text = new lib.dusa_text();
	this.dusa_text.parent = this;
	this.dusa_text.setTransform(726,406.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dusa_text},{t:this.lado_text},{t:this.halve_text},{t:this.b_text},{t:this.h_text},{t:this.lp_text},{t:this.m_text},{t:this.rl_text},{t:this.g_text},{t:this.s_text}]}).wait(1));

	// Tray
	this.restart = new lib.restart();
	this.restart.parent = this;
	this.restart.setTransform(864.6,530.9,0.408,0.408);
	new cjs.ButtonHelper(this.restart, 0, 1, 1);

	this.maluah = new lib.maluah();
	this.maluah.parent = this;
	this.maluah.setTransform(875.2,445.2,0.452,0.452);
	this.maluah.alpha = 0.328;
	new cjs.ButtonHelper(this.maluah, 0, 1, 1);

	this.matok = new lib.matok();
	this.matok.parent = this;
	this.matok.setTransform(875.4,394.8,0.455,0.455,0,0,0,0.1,0);
	this.matok.alpha = 0.328;
	new cjs.ButtonHelper(this.matok, 0, 1, 1);

	this.instance = new lib.Bitmap10();
	this.instance.parent = this;
	this.instance.setTransform(783,309,0.493,0.493);

	this.dusa_c1 = new lib.dusa_c1();
	this.dusa_c1.parent = this;
	this.dusa_c1.setTransform(141.9,390.1);
	new cjs.ButtonHelper(this.dusa_c1, 0, 1, 1);

	this.instance_1 = new lib.Squareforfood("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(141.9,390.1,0.449,0.449,0,0,0,-0.4,0.5);

	this.sk_b3 = new lib.sk_b3();
	this.sk_b3.parent = this;
	this.sk_b3.setTransform(317.8,301.9);
	new cjs.ButtonHelper(this.sk_b3, 0, 1, 1);

	this.jahnun_b1 = new lib.jahnun_b1();
	this.jahnun_b1.parent = this;
	this.jahnun_b1.setTransform(90.7,301.7,0.452,0.452,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.jahnun_b1, 0, 1, 1);

	this.z_d1 = new lib.z_d1();
	this.z_d1.parent = this;
	this.z_d1.setTransform(142.1,477.1);
	new cjs.ButtonHelper(this.z_d1, 0, 1, 1);

	this.sm_d2 = new lib.sm_d2();
	this.sm_d2.parent = this;
	this.sm_d2.setTransform(229.9,477.2);
	new cjs.ButtonHelper(this.sm_d2, 0, 1, 1);

	this.b_d3 = new lib.b_d3();
	this.b_d3.parent = this;
	this.b_d3.setTransform(318.1,477.5);
	new cjs.ButtonHelper(this.b_d3, 0, 1, 1);

	this.k_d4 = new lib.k_d4();
	this.k_d4.parent = this;
	this.k_d4.setTransform(405.2,477.3,0.452,0.452,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.k_d4, 0, 1, 1);

	this.h_d5 = new lib.h_d5();
	this.h_d5.parent = this;
	this.h_d5.setTransform(492.1,478.1);
	new cjs.ButtonHelper(this.h_d5, 0, 1, 1);

	this.s_d6 = new lib.s_d6();
	this.s_d6.parent = this;
	this.s_d6.setTransform(580.3,477.3,0.84,0.84);
	new cjs.ButtonHelper(this.s_d6, 0, 1, 1);

	this.sa_d7 = new lib.sa_d7();
	this.sa_d7.parent = this;
	this.sa_d7.setTransform(668.6,477.1,0.452,0.452,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.sa_d7, 0, 1, 1);

	this.h_c7 = new lib.h_c7();
	this.h_c7.parent = this;
	this.h_c7.setTransform(668.6,389.5,0.45,0.45,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.h_c7, 0, 1, 1);

	this.sm_c6 = new lib.sm_c6();
	this.sm_c6.parent = this;
	this.sm_c6.setTransform(580.4,389.9,0.452,0.452,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.sm_c6, 0, 1, 1);

	this.us_c5 = new lib.us_c5();
	this.us_c5.parent = this;
	this.us_c5.setTransform(493.1,390.1);
	new cjs.ButtonHelper(this.us_c5, 0, 1, 1);

	this.lp_c4 = new lib.lp_c4();
	this.lp_c4.parent = this;
	this.lp_c4.setTransform(405,390.1);
	new cjs.ButtonHelper(this.lp_c4, 0, 1, 1);

	this.f_c3 = new lib.f_c3();
	this.f_c3.parent = this;
	this.f_c3.setTransform(318.1,389.1);
	new cjs.ButtonHelper(this.f_c3, 0, 1, 1);

	this.k_c2 = new lib.k_c2();
	this.k_c2.parent = this;
	this.k_c2.setTransform(229.9,389.6);
	new cjs.ButtonHelper(this.k_c2, 0, 1, 1);

	this.malavah_b7 = new lib.malavah_b7();
	this.malavah_b7.parent = this;
	this.malavah_b7.setTransform(668.5,301.8);
	new cjs.ButtonHelper(this.malavah_b7, 0, 1, 1);

	this.m_b6 = new lib.m_b6();
	this.m_b6.parent = this;
	this.m_b6.setTransform(580.8,301.9);
	new cjs.ButtonHelper(this.m_b6, 0, 1, 1);

	this.smusa_b5 = new lib.smusa_b5();
	this.smusa_b5.parent = this;
	this.smusa_b5.setTransform(492.9,301.9,0.452,0.452);
	new cjs.ButtonHelper(this.smusa_b5, 0, 1, 1);

	this.makrod_b4 = new lib.makrod_b4();
	this.makrod_b4.parent = this;
	this.makrod_b4.setTransform(405.1,302.5);
	new cjs.ButtonHelper(this.makrod_b4, 0, 1, 1);

	this.lado_b2 = new lib.lado_b2();
	this.lado_b2.parent = this;
	this.lado_b2.setTransform(230.1,301.8,0.45,0.45,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.lado_b2, 0, 1, 1);

	this.ag_a7 = new lib.ag_a7();
	this.ag_a7.parent = this;
	this.ag_a7.setTransform(669.1,213.8);
	new cjs.ButtonHelper(this.ag_a7, 0, 1, 1);

	this.lukum_a6 = new lib.lukum_a6();
	this.lukum_a6.parent = this;
	this.lukum_a6.setTransform(581,214);
	new cjs.ButtonHelper(this.lukum_a6, 0, 1, 1);

	this.instance_2 = new lib.Squareforfood("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(668.3,477.2,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_3 = new lib.Squareforfood("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(668.3,389.1,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_4 = new lib.Squareforfood("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(668.3,301.7,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_5 = new lib.Squareforfood("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(668.9,213.8,0.449,0.449,0,0,0,-0.4,0.5);

	this.gg_a5 = new lib.gg_a5();
	this.gg_a5.parent = this;
	this.gg_a5.setTransform(492.7,203,1,1,0,0,0,0,-11.1);
	new cjs.ButtonHelper(this.gg_a5, 0, 1, 1);

	this.ap_a4 = new lib.ap_a4();
	this.ap_a4.parent = this;
	this.ap_a4.setTransform(405.1,214.1);
	new cjs.ButtonHelper(this.ap_a4, 0, 1, 1);

	this.hodit_btn = new lib.hodit_btn();
	this.hodit_btn.parent = this;
	this.hodit_btn.setTransform(844.1,277.9,0.726,0.726,0,0,0,-48.3,0.3);
	this.hodit_btn.alpha = 0.328;
	new cjs.ButtonHelper(this.hodit_btn, 0, 1, 1);

	this.teimanit_btn = new lib.teimanit_btn();
	this.teimanit_btn.parent = this;
	this.teimanit_btn.setTransform(876.3,227.8,0.494,0.494,0,0,0,0.2,0.2);
	this.teimanit_btn.alpha = 0.328;
	new cjs.ButtonHelper(this.teimanit_btn, 0, 1, 1);

	this.kuban_a3 = new lib.kuban_a3();
	this.kuban_a3.parent = this;
	this.kuban_a3.setTransform(317.8,214.4);
	new cjs.ButtonHelper(this.kuban_a3, 0, 1, 1);

	this.pre_a2 = new lib.pre_a2();
	this.pre_a2.parent = this;
	this.pre_a2.setTransform(230.1,214,0.452,0.452,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.pre_a2, 0, 1, 1);

	this.halve_a1 = new lib.halve_a1();
	this.halve_a1.parent = this;
	this.halve_a1.setTransform(142.4,213.9,0.452,0.452);
	new cjs.ButtonHelper(this.halve_a1, 0, 1, 1);

	this.marokait_btn = new lib.marokait_btn();
	this.marokait_btn.parent = this;
	this.marokait_btn.setTransform(871,180.5,0.496,0.496);
	this.marokait_btn.alpha = 0.328;
	new cjs.ButtonHelper(this.marokait_btn, 0, 1, 1);

	this.instance_6 = new lib.Sinun1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(875.2,137.9,0.811,0.811);

	this.instance_7 = new lib.Title();
	this.instance_7.parent = this;
	this.instance_7.setTransform(102,30,0.674,0.674);

	this.instance_8 = new lib.Squareforfood("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(580.6,477.2,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_9 = new lib.Squareforfood("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(492.9,477.2,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_10 = new lib.Squareforfood("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(405.2,477.2,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_11 = new lib.Squareforfood("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(580.6,389.5,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_12 = new lib.Squareforfood("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(492.9,389.5,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_13 = new lib.Squareforfood("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(405.2,389.5,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_14 = new lib.Squareforfood("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(317.6,477.2,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_15 = new lib.Squareforfood("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(317.6,389.5,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_16 = new lib.Squareforfood("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(229.9,477.2,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_17 = new lib.Squareforfood("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(229.9,389.5,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_18 = new lib.Squareforfood("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(580.6,301.8,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_19 = new lib.Squareforfood("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(492.9,301.8,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_20 = new lib.Squareforfood("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(405.2,301.8,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_21 = new lib.Squareforfood("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(580.6,214.1,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_22 = new lib.Squareforfood("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(493.1,214.1,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_23 = new lib.Squareforfood("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(405.2,214.1,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_24 = new lib.Squareforfood("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(317.6,301.8,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_25 = new lib.Squareforfood("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(229.9,301.8,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_26 = new lib.Squareforfood("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(142.2,477.2,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_27 = new lib.Squareforfood("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(142.2,301.8,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_28 = new lib.Squareforfood("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(317.6,214.1,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_29 = new lib.Squareforfood("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(229.9,214.1,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_30 = new lib.Squareforfood("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(142.2,214.1,0.449,0.449,0,0,0,-0.4,0.5);

	this.instance_31 = new lib.Tray();
	this.instance_31.parent = this;
	this.instance_31.setTransform(404.9,351.8,0.977,1.131,0,0,0,151.4,1.3);

	this.instance_32 = new lib.Squareforfood("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(141.9,390.1,0.449,0.449,0,0,0,-0.4,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.marokait_btn},{t:this.halve_a1},{t:this.pre_a2},{t:this.kuban_a3},{t:this.teimanit_btn},{t:this.hodit_btn},{t:this.ap_a4},{t:this.gg_a5},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.lukum_a6},{t:this.ag_a7},{t:this.lado_b2},{t:this.makrod_b4},{t:this.smusa_b5},{t:this.m_b6},{t:this.malavah_b7},{t:this.k_c2},{t:this.f_c3},{t:this.lp_c4},{t:this.us_c5},{t:this.sm_c6},{t:this.h_c7},{t:this.sa_d7},{t:this.s_d6},{t:this.h_d5},{t:this.k_d4},{t:this.b_d3},{t:this.sm_d2},{t:this.z_d1},{t:this.jahnun_b1},{t:this.sk_b3},{t:this.instance_1},{t:this.dusa_c1},{t:this.instance},{t:this.matok},{t:this.maluah},{t:this.restart}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(469.5,330,982.4,601.5);
// library properties:
lib.properties = {
	id: '323ABB4A1281394C86C33ABE431514D1',
	width: 960,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Hina_atlas_.png", id:"Hina_atlas_"}
	],
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
an.compositions['323ABB4A1281394C86C33ABE431514D1'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;