(function(W, D, $) {
	
	'use strict';
	
	W.$info = W.$info || {};
	
	$(document).ready(function() {
		$info.ui.pageLoad();
	});
	
	var regSpeedMs = 0;
	var regSpeedS = 0;
	var ifSpeedMs = 0;
	var ifSpeedS = 0;
	var flag = true;
	
	$info.ui = {
		
		pageLoad : function() {
			// 정규식 사용 테이블
			$('#ckBtn').on("click", function() {
				var startReg = performance.now();
				//스크립트
//				$info.event.regexFun();
				$info.event.regexFun1();
				//자바
//				$info.event.regexFun2();
				//쿼리
//				$info.event.regexFun3();
				var endReg = performance.now();
				regSpeedMs = endReg - startReg;
				regSpeedS = regSpeedMs/1000;
			});
			$('#regBtn').on("click", function() {
				$info.ui.regex();
			});
			
			// if조건 사용 테이블
			$('#ckBtn2').on("click", function() {
				var startIf = performance.now();
				//스크립트
//				$info.event.ifFun();
				//자바
				$info.event.ifFun2();
				var endIf = performance.now();
				ifSpeedMs = endIf - startIf;
				ifSpeedS = ifSpeedMs/1000;
			});
			$('#ifBtn').on("click", function() {
				$info.ui.ifCondition();
			});
			
		},
		
		// 전화번호 세팅
		phoneNum : function(phone) {
			var phoneNum = "";
			
			if (phone.length == 10) {
			    phoneNum = phone.substr(0, 3) + "-" + phone.substr(3, 3) + "-" + phone.substr(6, 4);
			} else if (phone.length == 11) {
			    phoneNum = phone.substr(0, 3) + "-" + phone.substr(3, 4) + "-" + phone.substr(7, 4);
			} else {
			    phoneNum = phone;
			}
			return phoneNum;
		},
		
		// 주민등록번호 세팅
		residentNum : function(number) {
			var residentNum = "";
			
			if (number.length == 13) {
			    residentNum = number.substr(0, 6) + "-" + number.substr(6, 7);
			} else {
			    residentNum = number;
			}
			return residentNum;
		},
		
		// 정규식 표현
		regex : function() {
			$('input[name=nameReg]').attr('value',"/^[a-zA-Z가-힣]*$/");
			$('input[name=urlReg]').attr('value',"/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/");
			$('input[name=emailReg]').attr('value',"/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/");
			$('input[name=pwdReg]').attr('value',"/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/");
			$('input[name=phoneNumReg]').attr('value',"/^[0-9]*$/");
			$('input[name=regSpeed]').attr('value',regSpeedMs.toFixed(3)+'ms / ' + regSpeedS.toFixed(3)+'s');
		},
		
		// IF 표현
		ifCondition : function() {
			$('input[name=ifSpeed]').attr('value',ifSpeedMs.toFixed(3)+'ms / ' + ifSpeedS.toFixed(3)+'s');
		},
		
		
		//if 조건 표현
		name : function() {
//			$("#name2").keyup(function(e) {
//				if((e.keyCode!=229) && (e.keyCode!=8) && (e.keyCode!=13) && (e.keyCode!=21) &&
//				   (e.keyCode!=17) && (e.keyCode<65 || e.keyCode>90)) {
//						alert($('input[name=name2]').attr("title")+"은(는) 영,문자만 입력해주세요.");
//						$('.name2').val('');
//				}
//			});
			var name = $('.name2').val();
			var nameSpecialchar = ['`','~','!','@','#','$','%','^','&','*','(',')','_','-','=','+','[','{',']','}',
								   ';',':','"',"'",',','<','.','>','/','?','\\','|'];
			
			for(var i=0; i<10; i++) {
				if(name.indexOf(i) > -1) {
					alert($('input[name=name2]').attr("title")+"은(는) 영,문자만 입력해주세요.");
					flag = false;
					return
				}
			}
			for(var i=0; i<nameSpecialchar.length; i++) {
				if(name.indexOf(nameSpecialchar[i]) > -1) {
					alert($('input[name=name2]').attr("title")+"은(는) 영,문자만 입력해주세요.");
					flag = false;
					return
				}
			}
		},

		url : function() {
//			$("#url2").keyup(function(e) {
//				if((e.keyCode!=229) && (e.keyCode!=8) && (e.keyCode!=13) && (e.keyCode!=21) &&
//				   (e.keyCode!=186) && (e.keyCode!=16) && (e.keyCode!=17) && (e.keyCode!=190) && 
//				   (e.keyCode!=191) && (e.keyCode<65 || e.keyCode>90) ) {
//						alert($('input[name=url2]').attr("title")+"은(는) url 형식에 맞게 입력해주세요.");
//						$('.url2').val('');
//				}
//			});
			var url = $('.url2').val();
			var urlSpecialchar = ['`','~','^','*','(',')','{','}',';','"',"'",',','<','>','|'];
			
			for(var i=0; i<10; i++) {
				if(url.indexOf(i) > -1) {
					alert($('input[name=url2]').attr("title")+"은(는) url 형식에 맞게 입력해주세요.");
					flag = false;
					return
				}
			}
			for(var i=0; i<urlSpecialchar.length; i++) {
				if(url.indexOf(urlSpecialchar[i]) > -1) {
					alert($('input[name=url2]').attr("title")+"은(는) url 형식에 맞게 입력해주세요.");
					flag = false;
					return
				}
			}
		},
		
		email : function() {
//			$("#email2").keyup(function(e) {
//				if((e.keyCode!=229) && (e.keyCode!=8) && (e.keyCode!=13) && (e.keyCode!=21) &&
//				   (e.keyCode!=186) && (e.keyCode!=16) && (e.keyCode!=17) && (e.keyCode!=50) && 
//				   (e.keyCode!=190) && (e.keyCode<65 || e.keyCode>90) ) {
//					if((e.keyCode<48 || e.keyCode>57)) {
//						alert($('input[name=email2]').attr("title")+"은(는) 이메일 형식에 맞게 입력해주세요.");
//						$('.email2').val('');
//				   }
//						
//				}
//			});
			var email = $('.email2').val();
			var emailSpecialchar = ['`','~','!','#','$','%','^','&','*','(',')','=','+','[','{',']','}',
								   ';',':','"',"'",',','<','>','/','?','\\','|'];
			
			for(var i=0; i<emailSpecialchar.length; i++) {
				if(email.indexOf(emailSpecialchar[i]) > -1) {
					alert($('input[name=url2]').attr("title")+"은(는) 이메일 형식에 맞게 입력해주세요.");
					flag = false;
					return
				}
			}
		},
		
		password : function() {
//			$("#password2").keyup(function(e) {
//				if((e.keyCode!=229) && (e.keyCode!=8) && (e.keyCode!=13) && (e.keyCode!=21) &&
//				   (e.keyCode!=186) && (e.keyCode!=16) && (e.keyCode!=17) && (e.keyCode!=50) && 
//				   (e.keyCode!=190) && (e.keyCode<65 || e.keyCode>90) ) {
//					if((e.keyCode<48 || e.keyCode>57)) {
//						alert($('input[name=password2]').attr("title")+"의 형식이 맞지 않습니다.\n8자리 이상 영문 소문자/숫자/특수문자를 조합해서 입력해주세요.");
//						$('.password2').val('');
//					}
//				}
//			});
			var password = $('.password2').val();
			var pwdSize = password.length;
			var pwdSpecialchar = ['`','~','(',')','_','-','=','+','[','{',']','}',
								   ';',':','"',"'",',','<','.','>','/','?','\\','|'];
			
			for(var i=0; i<pwdSpecialchar.length; i++) {
				if(password.indexOf(pwdSpecialchar[i]) > -1) {
					alert($('input[name=password2]').attr("title")+"의 형식이 맞지 않습니다.\n8자리 이상 영문 소문자/숫자/특수문자를 조합해서 입력해주세요.");
					flag = false;
					return
				}
			}
			if(pwdSize < 7) {
				alert($('input[name=password2]').attr("title")+"의 형식이 맞지 않습니다.\n8자리 이상 영문 소문자/숫자/특수문자를 조합해서 입력해주세요.");
				flag = false;
				return
			}
		},
		
		phoneNumber : function() {
//			$("#phoneNumber2").keyup(function(e) {
//				var pwSize = $('.password2').val();
//				if(pwSize < 7) {
//					alert($('input[name=password2]').attr("title")+"의 형식이 맞지 않습니다.\n8자리 이상 영문 소문자/숫자/특수문자를 조합해서 입력해주세요.");
//				}
//				if((e.keyCode!=8) && (e.keyCode!=13) && (e.keyCode!=17) && (e.keyCode!=86)) {
//					if((e.keyCode<48 || e.keyCode>57)) {
//						alert($('input[name=phoneNumber2]').attr("title")+"은(는) 숫자만 입력해주세요.");
//						$('.phoneNumber2').val('');
//					}
//				}
//			});

			var phoneNumber = $('.phoneNumber2').val();
			var pNumEnglishUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
									'S','T','U','V','W','X','Y','Z'];
			var pNumEnglishLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
									's','t','u','v','w','x','y','z'];
			var pNumSpecialchar = ['`','~','!','@','#','$','%','^','&','*','(',')','_','-','=','+','[','{',']','}',
								   ';',':','"',"'",',','<','.','>','/','?','\\','|'];
			
			for(var i=0; i<pNumEnglishUpper.length; i++) {
				if(phoneNumber.indexOf(pNumEnglishUpper[i]) > -1) {
					alert($('input[name=phoneNumber2]').attr("title")+"은(는) 숫자만 입력해주세요.");
					flag = false;
					return
				}
			}
			for(var i=0; i<pNumEnglishLower.length; i++) {
				if(phoneNumber.indexOf(pNumEnglishLower[i]) > -1) {
					alert($('input[name=phoneNumber2]').attr("title")+"은(는) 숫자만 입력해주세요.");
					flag = false;
					return
				}
			}
			for(var i=0; i<pNumSpecialchar.length; i++) {
				if(phoneNumber.indexOf(pNumSpecialchar[i]) > -1) {
					alert($('input[name=phoneNumber2]').attr("title")+"은(는) 숫자만 입력해주세요.");
					flag = false;
					return
				}
			}
		},
		
		residentNumer : function() {
//			$("#residentNumer2").keyup(function(e) {
//				if((e.keyCode!=8) && (e.keyCode!=13) && (e.keyCode!=17) && (e.keyCode!=86)) {
//					if((e.keyCode<48 || e.keyCode>57)) {
//						alert($('input[name=residentNumer2]').attr("title")+"은(는) 숫자만 입력해주세요.");
//						$('.residentNumer2').val('');
//					}
//				}
//			});

			var residentNumer = $('.residentNumer2').val();
			var rNumEnglishUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
									'S','T','U','V','W','X','Y','Z'];
			var rNumEnglishLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
									's','t','u','v','w','x','y','z'];
			var rNumSpecialchar = ['`','~','!','@','#','$','%','^','&','*','(',')','_','-','=','+','[','{',']','}',
								   ';',':','"',"'",',','<','.','>','/','?','\\','|'];
			
			for(var i=0; i<rNumEnglishUpper.length; i++) {
				if(residentNumer.indexOf(rNumEnglishUpper[i]) > -1) {
					alert($('input[name=residentNumer2]').attr("title")+"은(는) 숫자만 입력해주세요.");
					flag = false;
					return
				}
			}
			for(var i=0; i<rNumEnglishLower.length; i++) {
				if(residentNumer.indexOf(rNumEnglishLower[i]) > -1) {
					alert($('input[name=residentNumer2]').attr("title")+"은(는) 숫자만 입력해주세요.");
					flag = false;
					return
				}
			}
			for(var i=0; i<rNumSpecialchar.length; i++) {
				if(residentNumer.indexOf(rNumSpecialchar[i]) > -1) {
					alert($('input[name=residentNumer2]').attr("title")+"은(는) 숫자만 입력해주세요.");
					flag = false;
					return
				}
			}
		},
		
		cardNumber : function() {
//			$("#cardNumber2").keyup(function(e) {
//				if((e.keyCode!=8) && (e.keyCode!=13) && (e.keyCode!=17) && (e.keyCode!=86)) {
//					if((e.keyCode<48 || e.keyCode>57)) {
//						alert($('input[name=cardNumber2]').attr("title")+"은(는) 숫자만 입력해주세요.");
//						$('.cardNumber2').val('');
//					}
//				}
//			});

			var cardNumber = $('.cardNumber2').val();
			var cNumEnglishUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
									'S','T','U','V','W','X','Y','Z'];
			var cNumEnglishLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
									's','t','u','v','w','x','y','z'];
			var cNumSpecialchar = ['`','~','!','@','#','$','%','^','&','*','(',')','_','-','=','+','[','{',']','}',
								   ';',':','"',"'",',','<','.','>','/','?','\\','|'];
			
			for(var i=0; i<cNumEnglishUpper.length; i++) {
				if(cardNumber.indexOf(cNumEnglishUpper[i]) > -1) {
					alert($('input[name=cardNumber2]').attr("title")+"은(는) 숫자만 입력해주세요.");
					flag = false;
					return
				}
			}
			for(var i=0; i<cNumEnglishLower.length; i++) {
				if(cardNumber.indexOf(cNumEnglishLower[i]) > -1) {
					alert($('input[name=cardNumber2]').attr("title")+"은(는) 숫자만 입력해주세요.");
					flag = false;
					return
				}
			}
			for(var i=0; i<cNumSpecialchar.length; i++) {
				if(cardNumber.indexOf(cNumSpecialchar[i]) > -1) {
					alert($('input[name=cardNumber2]').attr("title")+"은(는) 숫자만 입력해주세요.");
					flag = false;
					return
				}
			}
		}
		
	};
	
	
	$info.event = {
		// 정규식 사용 - 스크립트
		regexFun : function() {
			if(!validck($('.regexTbl'))) {
				return;
			}else {
				var regexForm = fn_getFormData($('#regexForm'));
				regexForm.phoneNumber = $info.ui.phoneNum(regexForm.phoneNumber);
				regexForm.residentNumer = $info.ui.residentNum(regexForm.residentNumer);
				if(confirm("등록 하시겠습니까?")) {
					ajax('/regexInsert', regexForm, function (data) {
						if(data.success) {
							alert(data.message);
							$('.conDel').val('');
						}else {
							alert(data.message);
							$('.conDel').val('');
						}
					});
				}
			}
		},
		
		// 정규식 사용 - 자바
		regexFun2 : function() {
			var regexForm = fn_getFormData($('#regexForm'));
			if(confirm("등록 하시겠습니까?")) {
				ajax('/regexInsertJava', regexForm, function (data) {
					if(data.success) {
						alert(data.message);
						$('.conDel').val('');
					}else {
						alert(data.message);
						$('.conDel').val('');
					}
				});
			}
		},
		
		// 정규식 사용 - 쿼리
		regexFun3 : function() {
			var regexForm = fn_getFormData($('#regexForm'));
			if(confirm("등록 하시겠습니까?")) {
				ajax('/regexInsertQuery', regexForm, function (data) {
					if(data.success) {
						alert(data.message);
//						$('.conDel').val('');
					}else {
						alert(data.message);
//						$('.conDel').val('');
					}
				});
			}
		},
		
		// 정규식 사용 - test
		regexFun1 : function() {
			
			var regString = /\w/;

			 if(!regString.test($( '.name' ).val())) {
				 alert($( '.name' ).attr("title")+"은(는) 영,문자만 입력해주세요.");
				 $( '.name' ).focus();
				 return false;
			 }
			
			var regexForm = fn_getFormData($('#regexForm'));
			if(confirm("등록 하시겠습니까?")) {
				ajax('/regexInsertQuery', regexForm, function (data) {
					if(data.success) {
						alert(data.message);
//						$('.conDel').val('');
					}else {
						alert(data.message);
//						$('.conDel').val('');
					}
				});
			}
		},
		
		//if조건문 사용 - 스크립트
		ifFun : function() {
			$info.ui.name();
			$info.ui.url();
			$info.ui.email();
			$info.ui.password();
			$info.ui.phoneNumber();
			$info.ui.residentNumer();
			$info.ui.cardNumber();
			
			if(flag) {
				var ifForm = fn_getFormData($('#ifForm'));
				ifForm.phoneNumber2 = $info.ui.phoneNum(ifForm.phoneNumber2);
				ifForm.residentNumer2 = $info.ui.residentNum(ifForm.residentNumer2);
				if(confirm("등록 하시겠습니까?")) {
					ajax('/ifInsert', ifForm, function (data) {
						if(data.success) {
							alert(data.message);
							$('.conDel2').val('');
						}else {
							alert(data.message);
							$('.conDel2').val('');
						}
					});
				}
			}
		},
		
		//if조건문 사용 - 자바단
		ifFun2 : function() {
			var ifForm = fn_getFormData($('#ifForm'));
				if(confirm("등록 하시겠습니까?")) {
					ajax('/ifInsertJava', ifForm, function (data) {
						if(data.success) {
							alert(data.message);
//							$('.conDel2').val('');
						}else {
							alert(data.message);
//							$('.conDel2').val('');
						}
					});
				}
		}
	};
		

}(window, document, jQuery));
