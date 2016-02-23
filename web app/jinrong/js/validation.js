/**
 * 表单验证工具
 */
var TINY={};
TINY.box = function(){
	return {
		required: function(obj){
			var value= $(obj).val().trim();
			if(value == ''){
				return '该字段不能为空';
			}else{
				return '';
			}
		},
		verfiyLength: function(obj,num){
			var value = $(obj).val().trim();
			if(value == ''){
				return '该字段不能为空';
			}else{
				if(value.length < num){
					return '长度不能少于'+num+'位';
				}else{
					return '';
				}
			}
		},
		maxLength: function(obj,num){
			var value = $(obj).val().trim();
			if(value == ''){
				return '该字段不能为空';
			}else{
				if($(obj).val().length > num){
                   return '长度不大于'+num+'位';
				}else{
					return '';
				}
			}
		},
		repeatPwd: function(obj,psobj){
			var value = $(obj).val().trim();
			if(value == ''){
				return '该字段不能为空';
			}else{
				if($(obj).val() != $(psobj).val()){
					return '你输入的密码与之前密码不一致';
				}else{
					return '';
				}
			}
		},
		fixedMobile: function(obj){
			var value = $(obj).val().trim();
			var reg = /^(d{3,4})-(d{6})/;
			if(value == ''){
				return '该字段不能为空';
			}else{
				if(!reg.test($(obj).val())){
					return '电话号码只能为数字';
				}else{
					return '';
				}
			}
		},
		// 手机号码验证
		checkMobile: function(obj){
			var value = $(obj).val().trim();
			var reg =/^1[3|5|8][0-9]{9}$/;
			if(value == ''){
				return '该字段不能为空';
			}else{
				if(!reg.test($(obj).val())){
                   return '手机格式不对';
				}else{
					return '';
				}
			}
		},
		checkEmail: function(obj){
			var value = $(obj).val().trim();
			var reg = /^\w+@[a-z0-9]+\.[a-z]+$/;
			if(value == ''){
				return '该字段不能为空';
			}else{
				if(!reg.test($(obj).val())){
                   return '邮箱格式不对';
				}else{
					return '';
				}
			}
		},
		verfiyString: function(obj,num){
			var value = $(obj).val().trim();
			if(value == ''){
				return '该字段不能为空';
			}else{
				if($(obj).val().length<num){
                   return '不少于'+num+'位';
				}else{
					return '';
				}
			}
		},
		// 经纬度验证
		checkLongitude: function(obj){
			var value = $(obj).val().trim();
			var re = /^[0-9]+\.[0-9]+$/;
			if(value == ''){
				return '该字段不能为空';
			}else{
				if(!re.test($(obj).val())){
                   return '经纬度格式不对';
				}else{
					return '';
				}
			}
		}
	}
}