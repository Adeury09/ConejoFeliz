
var HelloWorldLayer = cc.Layer.extend({
    sprFondo:null,
    sprConejo:null,
    sprBomba:null,
    random: function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	},
    
    ctor:function () {
        this._super();
        //Obteniendo el tamaño de la pantalla
        var size = cc.winSize;
                
    
        //posicionando la imagen de fondo
        this.sprFondo = new cc.Sprite(res.fondo_png);
        this.sprFondo.setPosition(size.width / 2,size.height / 2);
        this.addChild(this.sprFondo, 0);
        
        //posicionando la imagen del conejo
        this.sprConejo = new cc.Sprite(res.conejo_png);
        this.sprConejo.setPosition(size.width / 2,size.height * 0.15);
        this.addChild(this.sprConejo, 1);
        
        
        //posicion de la bomba
        var ran = this.random(1.4,3);
        this.sprBomba = new cc.Sprite(res.bomba_png);
        //this.sprBomba.setAnchorPoint(cc.p(0.5,0.5));
        this.sprBomba.setPosition(size.width/ran, size.height/1.1);
        this.addChild(this.sprBomba, 2);
        
        //mover bomba
        
        var bomba_action = cc.MoveTo.create(3, cc.p(size.width/ran,size.height * -1));
        this.sprBomba.runAction(bomba_action);
        
        //Posicion de la zanahoria
        var ran = this.random(1.4,3);
        this.zanahoria = new cc.Sprite(res.zanahoria_png);
        this.zanahoria.setPosition(size.width/ran, size.height/1.1)
        this.addChild(this.zanahoria, 2);
        
        //mover zanahoria
       
        var zanahoria_action = cc.MoveTo.create(3, cc.p(size.width/ran,size.height * -1));
        this.zanahoria.runAction(zanahoria_action);
        
        return true; 
        
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

