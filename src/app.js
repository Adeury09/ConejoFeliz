
var HelloWorldLayer = cc.Layer.extend({
    bombas:[ ],
    zanahorias:[ ],
    sprFondo:null,
    sprConejo:null,
    sprBomba:null,
    size:null,
    random : function getRandomInt(min, max) {
    	return (Math.random() * (max - min + 1)) + min;
	},
    
    MoverConejo : function(location, event){
        cc.log("Mover conejo");
        var juego = event.getCurrentTarget();
        var ubicacion = location.getLocation();
        juego.sprConejo.setPosition(ubicacion.x,juego.sprConejo.getPositionY());
    },
        
    /*
    matar: function(location, event){
		var ubicacion = location.getLocation();
		var juego = event.getCurrentTarget();
		for(var sprBomba of juego.bombas){
			var cuadro = sprBomba.getBoundingBox();
			if(cc.rectContainsPoint(cuadro,ubicacion)){
				sprBomba.setVisible(false);
			}
			
		}
		return true;
		
	},  */
    
    creaBomba: function(){
        
		
		var sprBomba = new cc.Sprite(res.bomba_png);
		//this.sprBomba.setScale(0.4,0.4);
        sprBomba.setPosition(this.random((this.size.width/2)-220,(this.size.width/2)+220), this.size.height+100);
        this.addChild(sprBomba, 1);
		var moveto = cc.moveTo(3,sprBomba.getPositionX(), -50);
		sprBomba.runAction(moveto);
		this.bombas.push(sprBomba);		
		
	},
    
    creaZanahoria: function(){
        
        //Posicion de la zanahoria
        var ran = this.random(1.4,3);
        var zanahoria = new cc.Sprite(res.zanahoria_png);
        zanahoria.setPosition(this.random((this.size.width/2)-220, (this.size.width/2)+220), this.size.height+100);
        this.addChild(zanahoria, 1);        
        //mover zanahoria
        this.zanahorias.push(zanahoria);
        var zanahoria_action = cc.moveTo(3,zanahoria.getPositionX(), -50);
        zanahoria.runAction(zanahoria_action);
        
    },
    
    ctor:function () {
        this._super();
        //Tamaño de la pantalla
        var size = cc.winSize;
		this.size = size;
        
        //posicionando la imagen de fondo
        this.sprFondo = new cc.Sprite(res.fondo_png);
        this.sprFondo.setPosition(size.width / 2,size.height / 2);
        this.addChild(this.sprFondo, 0);
        
        //
		this.sprConejo = new cc.Sprite(res.conejo_png);
        this.schedule(this.creaBomba,1);
        this.schedule(this.creaZanahoria,1);
		this.sprConejo.setPosition(size.width / 2,size.height * 0.15);
		this.addChild(this.sprConejo, 1);
        
        
        var conejo = function(){
            this.sprConejo = new cc.Sprite(res.conejo_png);
            this.sprConejo.setPosition(size.width / 2,size.height * 0.15);
            this.addChild(this.sprConejo, 1);
        }
        
		//Inicializando eventos
		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
            
			onTouchBegan: this.MoverConejo,
			onTouchMoved: this.MoverConejo
			
		}, this);
        
       
        return true;
    }
    
    
    /*
    
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
        
        
        
       
        var contador = 0;
        while(true){
            
            //posicion de la bomba
       
            var ran = this.random(1,480);
            var velocidad = this.random(2,6);
            this.sprBomba = new cc.Sprite(res.bomba_png);
            //this.sprBomba.setAnchorPoint(cc.p(0.5,0.5));
            this.sprBomba.setPosition(size.width/2+ran, size.height);
            this.addChild(this.sprBomba, 2);
            
            //mover Bomba
            
            var bomba_action = cc.MoveTo.create(velocidad, cc.p(size.width/2+ran,size.height * -1));
           
            this.sprBomba.runAction(bomba_action);
            this.bombas.push(this.sprBomba);
            
            contador++;
            
            if(contador>5)
                break;
            
        }
        
         
        
        
        //Posicion de la zanahoria
        var ran = this.random(1.4,3);
        this.zanahoria = new cc.Sprite(res.zanahoria_png);
        this.zanahoria.setPosition(size.width/ran, size.height/1.1)
        this.addChild(this.zanahoria, 2);
        
        //mover zanahoria
       
        var zanahoria_action = cc.MoveTo.create(2, cc.p(size.width/ran,size.height * 0.13));
        this.zanahoria.runAction(zanahoria_action);
        
        return true; 
        
    } 
    */
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

