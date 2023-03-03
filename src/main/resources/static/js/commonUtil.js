/**
 * @name         : ajax
 * @description  : ajax 통신 (csrf 토큰 포함)
 * @date         :
 * @author	     :
 */
function ajax(url, ajaxParam, fn_success, fn_complete) {

    $.ajax({
        url : url,
        type : 'POST',
        contentType : "application/json",
        data : JSON.stringify(ajaxParam),
        dataType : "json",
        success : function(data) {
            if(fn_success != null || fn_complete != undefined){
                fn_success(data);
            }else{

            }
        },
        error : function() {
            alert("처리중 에러가 발생하였습니다.");
        },
        
        complete : function(xhr) {
            if(fn_complete != null || fn_complete != undefined){
                fn_complete(xhr);
            }
        }
    });
};

/**
 * @name         : fn_getFormData
 * @description  : 폼데이터를 Json Arry로 직렬화
 * @date         :
 * @author	     :
 */
function fn_getFormData(form, data) {
	var unindexed_array = $(form).serializeArray();
	var indexed_array = {};

	$.map(unindexed_array, function(n, i) {
		indexed_array[n['name']] = n['value'].trim();
	});

	$.extend(indexed_array, data);
	return indexed_array;
};

/**
 * @name         : validck
 * @description  : validck 공통
 * @date         :
 * @author	     : 허윤정
 */
function validck(obj){

	var flag = true;
	var targetNm =  $(".wTable");
	if(obj!=null){
		targetNm = obj;
	}

	targetNm.find("input").each( function () {

		 //필수값 체크
		 if($( this ).hasClass('reqed')){
			 if( $.trim($( this ).val()) == ""){
				 alert($( this ).attr("title")+"은(는) 필수값입니다.");
				 $( this ).focus();
				 flag = false;
				 return false;
			 }
		 }
	
		 //이름체크
		 if($( this ).hasClass('name')){
			 var regString = /^[a-zA-Z가-힣]*$/;

			 if(!regString.test($( this ).val())) {
				 alert($( this ).attr("title")+"은(는) 영,문자만 입력해주세요.");
				 $( this ).focus();
				 flag = false;
				 return false;
			 }
		 }
	
		//URL
		if($( this ).hasClass('url')){
			 var regUrl = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

			 if(!regUrl.test($( this ).val())) {
				 alert($( this ).attr("title")+"은(는) url 형식에 맞게 입력해주세요.");
				 $( this ).focus();
				 flag = false;
				 return false;
			 }
		 }
		
		//이메일 체크
		 if($( this ).hasClass('email')){
			 var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
			
			if($( this ).val() != '') {
				if(!regEmail.test($( this ).val())) {
				 alert($( this ).attr("title")+"은(는) 이메일 형식에 맞게 입력해주세요.");
				 $( this ).focus();
				 flag = false;
				 return false;
			 }
			}
		 }
	
		// 비밀번호 체크
		if($( this ).hasClass('pwd')){
            var regPwdCk = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/

            if(!regPwdCk.test($( this ).val()) && $( this ).val() != '') {
                alert($( this ).attr("title")+"의 형식이 맞지 않습니다.\n8자리 이상 영문 소문자/숫자/특수문자를 조합해서 입력해주세요.");
                $( this ).focus();
                flag = false;
                return false;
            }
        }
        
        //휴대전화번호 체크
		if($( this ).hasClass('phoneNum')){
			var regPhone = /^[0-9]*$/;
			
			if(!regPhone.test($( this ).val())) {
				alert($( this ).attr("title")+"은(는) 숫자만 입력해주세요.");
				$( this ).focus();
				flag = false;
				return false;
			}
		}
		
		//주민등록번호 체크
		if($( this ).hasClass('num')){
			var regNumber = /^[0-9]*$/;
			
			if(!regNumber.test($( this ).val())) {
				alert($( this ).attr("title")+"은(는) 숫자만 입력해주세요.");
				$( this ).focus();
				flag = false;
				return false;
			}
		}
		
		//신용카드번호 체크
		if($( this ).hasClass('card')){
			var regCard = /^[0-9]*$/;
			
			if(!regCard.test($( this ).val())) {
				alert($( this ).attr("title")+"은(는) 숫자만 입력해주세요.");
				$( this ).focus();
				flag = false;
				return false;
			}
		}
		
    });

	return flag;
}