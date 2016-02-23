(function(){
	var MenuBar = function(){
        this.el = document.querySelector('#sidebar ul');
        this.state = 'all closed';
        this.el.addEventListener('click',function(event){
           event = window.event||event;
           if(event.stopPropagation){
           	event.stopPropagation();
           }else{
           	event.cancelBubble = true;
           }
        });
        this.currentOpenedMenuContent = null
        var self = this;
        this.menulist = document.querySelectorAll('#sidebar ul > li');
        for(var i = 0;i<this.menulist.length;i++){
            this.menulist[i].addEventListener('click',function(event){
                var currentMenu = document.getElementById(event.currentTarget.id+ '-content');
                if(self.state == 'all closed'){
                	console.log('打开'+currentMenu.id);
                    self.state = 'hasOpened';
                    self.currentOpenedMenuContent = currentMenu;
                    currentMenu.className = 'left-content';
                    currentMenu.style.left = '-85px';
                    currentMenu.style.top = '0px';
                    currentMenu.classList.add('current-content-right');
                }else{
                	console.log('关闭'+self.currentOpenedMenuContent.id);
                	console.log('打开'+currentMenu.id);
                	self.currentOpenedMenuContent.className = 'left-content';
                	self.currentOpenedMenuContent.style.left = '-85px';
                    currentMenu.classList.remove('current-content-left');
                	currentMenu.style.left = '35px';
                	currentMenu.style.top = '250px';
                    console.log(currentMenu);
                	currentMenu.classList.add('current-content-top');
                    self.state = 'hasOpened';
                    self.currentOpenedMenuContent = currentMenu;
                }
            });
        }
        this.menuCloseList = document.querySelectorAll('.left-content > .nav-con-close');
        for(i=0;i<this.menuCloseList.length;i++){
        	this.menuCloseList[i].addEventListener('click',function(event){
        		event = event || window.event;
        		if(event.stopPropagation){
        			event.stopPropagation();
        		}else{
        			event.cancelBubble = true;
        		}
        		var currentParent = this.parentNode;
        		console.log(currentParent);
        	    currentParent.style.left = '35px';
        	    currentParent.style.top = '0px';
        	    currentParent.classList.add('current-content-left');
        	    console.log('关闭'+currentParent);
        	    self.state = 'all closed';
                // currentParent.className = 'left-content';
        	})
        }
        this.beforeClose=function(){
            self.menuCloseList = document.querySelectorAll('.left-content > .nav-con-close');
            console.log(self.menuCloseList);
        for(i=0;i<self.menuCloseList.length;i++){
                var lis = self.menuCloseList[i];
                var currentParent = lis.parentNode;
                currentParent.style.left = '35px';
                currentParent.style.top = '0px';
                currentParent.classList.add('current-content-left');
                console.log('关闭'+currentParent);
                self.state = 'all closed';
        }
        };
	};
	var Siderbar = function(eId,closeBarId){
		var self = this;
        console.log()
		this.state = 'opened';
		this.el = document.getElementById(eId||'sidebar');
		this.closeBar = document.getElementById(closeBarId||'closebar');
		this.leftcontent = document.getElementById('content');
		this.menu = new MenuBar();
        this.el.addEventListener('click',function(event){
        	event = window.event||event;
        	if(event.target !== self.el){
        	    self.traggerSwitch();
        	}
        });
	};
	Siderbar.prototype.open = function(){
		console.log('打开siderbar');
		this.state = 'opened';
		this.el.style.left='-120px';
		this.el.className = 'sider-move-right';
		this.closeBar.style.left = '160px';
        this.closeBar.className = 'close-move-left';
        this.leftcontent.className = '';
	};
	Siderbar.prototype.close = function(){
		console.log('关闭siderbar');
		this.el.className = 'sider-move-left';
		this.closeBar.className = 'close-move-right';
		this.state = 'close';
        this.menu.beforeClose();
		this.leftcontent.className = 'left-content';
	};
	Siderbar.prototype.traggerSwitch = function(){
		if(this.state=='opened'){
			this.close();
		}else{
			this.open();
		}
	}
	var sider = new Siderbar();

})();