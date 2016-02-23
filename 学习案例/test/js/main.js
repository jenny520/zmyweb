(function($){
    $(document).ready(function(){
      var container = $('.container');
      var box = $('.box');
      var back = $('.back');
      var icon = $('.icon');
      var btn = $('.btn');
      var imgs = back.find('img');
      var close = $('.close');

      $.Velocity.RegisterUI('linxi.slideUpIn',{
        defaultDuration:500,
        calls:[
        [{
          opacity:[1,0],translateY:[0,100]
        }]
        ]
      });
      
      $.Velocity.RegisterUI('linxi.slideDownOut',{
        defaultDuration:300,
        calls:[
        [{
          opacity:[0,1],translateY:[100,0]
        }]
        ]
      });

      $.Velocity.RegisterUI('linxi.scaleIn',{
        defaultDuration:300,
        calls:[
        [{
          opacity:[1,0],scale:[1,0.3]
        }]
        ]
      });

      $.Velocity.RegisterUI('linxi.scaleOut',{
        defaultDuration:300,
        calls:[
        [{
          opacity:[0,1],scale:[0.3,1]
        }]
        ]
      });
      var mySeq = [{e:container,p:'linxi.slideUpIn',o:{delay:300}}
                  ,{e:box,p:'linxi.slideUpIn',o:{sequenceQueue: false}},
                  {e:icon,p:'linxi.slideUpIn',o:{sequenceQueue: false,delay:30}}];
      $.Velocity.RunSequence(mySeq);
      var seqClick = [{e:container,p:'linxi.slideDownOut'},
                  {e:box,p:'linxi.slideDownOut',o:{sequenceQueue:false}},
                  {e:icon,p:'linxi.slideDownOut',o:{sequenceQueue:false}},
                  {e:container,p:'linxi.slideUpIn',o:{sequenceQueue:false}},
                  {e:back,p:'linxi.slideUpIn',o:{sequenceQueue:false}},
                  {e:imgs,p:'linxi.scaleIn',o:{sequenceQueue:false,delay:300}}
      ];
      var seqClose = [{e:imgs,p:'linxi.scaleOut'},
                  {e:container,p:'linxi.slideDownOut'},
                  {e:back,p:'linxi.slideDownOut',o:{sequenceQueue:false}},
                  {e:container,p:'linxi.slideUpIn'},
                  {e:box,p:'linxi.slideUpIn',o:{sequenceQueue:false}},
                  {e:icon,p:'linxi.slideUpIn',o:{sequenceQueue:false,delay:30}}
      ];
      btn.click(function(){
        $.Velocity.RunSequence(seqClick);
      });
      close.click(function(){
        $.Velocity.RunSequence(seqClose);
      })
    })
})(jQuery);