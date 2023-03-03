package co.kr.teamDay.service;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.kr.teamDay.mapper.TestMapper;

@Service
public class TestServiceImpl implements TestService{

	@Autowired
	TestMapper mapper;
	
	private static final String SUCCESS = "success";
	private static final String MESSAGE = "message";
	
	//정규식 등록 - 스크립트
	@Override
	public Map<String, Object> regexInsert(Map<String, Object> paramsMap) {
		Map<String, Object> result = new HashMap<>();
		
		if(mapper.regexInsert(paramsMap)>0) {
			result.put(SUCCESS, true);
			result.put(MESSAGE, "정상적으로 등록이 되었습니다.");
		} else {
			result.put(SUCCESS, false);
			result.put(MESSAGE, "등록 오류 입니다.");
		}
		return result;
	}
	
	//정규식 등록 - 자바
	@Override
	public Map<String, Object> regexInsertJava(Map<String, Object> paramsMap) {
		Map<String, Object> result = new HashMap<>();

		String name = (String) paramsMap.get("name");
		String regString = "^[a-zA-Z가-힣]*$";
		boolean nameBool = Pattern.matches(regString, name);
		if(!nameBool) {
			result.put(SUCCESS, false);
			result.put(MESSAGE, "영,문자만 입력해주세요.");
			return result;
		}
		
		String url = (String) paramsMap.get("url");
		String regUrl = "(http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?";
		boolean urlBool = Pattern.matches(regUrl, url);
		if(!urlBool) {
			result.put(SUCCESS, false);
			result.put(MESSAGE, "url 형식에 맞게 입력해주세요.");
			return result;
		}
		
		String email = (String) paramsMap.get("email");
		String regEmail = "^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\\.[a-zA-Z]{2,3}$";
		boolean emailBool = Pattern.matches(regEmail, email);
		if(!emailBool) {
			result.put(SUCCESS, false);
			result.put(MESSAGE, "이메일 형식에 맞게 입력해주세요.");
			return result;
		}
		
		String password = (String) paramsMap.get("password");
		int pwdSize = password.length();
		String regPwdCk = "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$";
		boolean pwdBool = Pattern.matches(regPwdCk, password);
		if(!pwdBool) {
			result.put(SUCCESS, false);
			result.put(MESSAGE, "비밀번호는 8자리 이상 영문 소문자/숫자/특수문자를 조합해서 입력해주세요.");
			return result;
		}
		if(pwdSize <7) {
			result.put(SUCCESS, false);
			result.put(MESSAGE, "비밀번호는 8자리 이상 영문 소문자/숫자/특수문자를 조합해서 입력해주세요.");
			return result;
		}
		
		String phone = (String) paramsMap.get("phoneNumber");
		String regPnum = "^[0-9]*$";
		boolean pnumBool = Pattern.matches(regPnum, phone);
		
		if(!pnumBool) {
			result.put(SUCCESS, false);
			result.put(MESSAGE, "휴대전화번호은(는) 숫자만 입력해주세요.");
			return result;
		}
		if (phone.length() == 10) {
			phone = phone.substring(0, 3) + "-" + phone.substring(3, 7) + "-" + phone.substring(7, 11);
			paramsMap.put("phoneNumber", phone);
		} else if (phone.length() == 11) {
			phone = phone.substring(0, 3) + "-" + phone.substring(3, 7) + "-" + phone.substring(7, 11);
			paramsMap.put("phoneNumber", phone);
		}
		
				
		String number = (String) paramsMap.get("residentNumer");
		String regNum = "^[0-9]*$";
		boolean numBool = Pattern.matches(regNum, number);
		
		if(!numBool) {
			result.put(SUCCESS, false);
			result.put(MESSAGE, "주민등록번호은(는) 숫자만 입력해주세요.");
			return result;
		}
		if (number.length() == 13) {
			number = number.substring(0, 6) + "-" + number.substring(6, 13);
			paramsMap.put("residentNumer", number);
		}
		
		String cardNumber = (String) paramsMap.get("cardNumber");
		String regCard = "^[0-9]*$";
		boolean cardBool = Pattern.matches(regCard, cardNumber);
		
		if(!cardBool) {
			result.put(SUCCESS, false);
			result.put(MESSAGE, "신용카드번호은(는) 숫자만 입력해주세요.");
			return result;
		}
		
		if(mapper.regexInsert(paramsMap)>0) {
			result.put(SUCCESS, true);
			result.put(MESSAGE, "정상적으로 등록이 되었습니다.");
		} else {
			result.put(SUCCESS, false);
			result.put(MESSAGE, "등록 오류 입니다.");
		}
		return result;
	}

	//if조건 등록 - 스크립트
	@Override
	public Map<String, Object> ifInsert(Map<String, Object> paramsMap) {
		Map<String, Object> result = new HashMap<>();
		
		if(mapper.ifInsert(paramsMap)>0) {
			result.put(SUCCESS, true);
			result.put(MESSAGE, "정상적으로 등록이 되었습니다.");
		} else {
			result.put(SUCCESS, false);
			result.put(MESSAGE, "등록 오류 입니다.");
		}
		return result;
	}

	//if조건 등록 - 자바
	@Override
	public Map<String, Object> ifInsertJava(Map<String, Object> paramsMap) {
		Map<String, Object> result = new HashMap<>();
		
		String name = (String) paramsMap.get("name2");
		String[] nameNumber = {"1","2","3","4","5","6","7","8","9","0"};
		String[] nameSpecialchar = {"`","~","!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","{","]","}",
							        ";",":","'","\"",",","<",".",">","/","?","\\","|"};
		for(int i=0; i<nameNumber.length; i++) {
			if(name.indexOf(nameNumber[i]) >-1) {
				result.put(SUCCESS, false);
				result.put(MESSAGE, "영,문자만 입력해주세요.");
				return result;
			}
		}
		for(int i=0; i<nameSpecialchar.length; i++) {
			if(name.indexOf(nameSpecialchar[i]) >-1) {
				result.put(SUCCESS, false);
				result.put(MESSAGE, "영,문자만 입력해주세요.");
				return result;
			}
		}
		
		String url = (String) paramsMap.get("url2");
		String[] urlNumber = {"1","2","3","4","5","6","7","8","9","0"};
		String[] urlSpecialchar = {"`","~","^","*","(",")","{","}",";","'","\"",",","<",">","|"};
		for(int i=0; i<urlNumber.length; i++) {
			if(url.indexOf(urlNumber[i]) >-1) {
				result.put(SUCCESS, false);
				result.put(MESSAGE, "url 형식에 맞게 입력해주세요.");
				return result;
			}
		}
		for(int i=0; i<urlSpecialchar.length; i++) {
			if(url.indexOf(urlSpecialchar[i])>-1) {
				result.put(SUCCESS, false);
				result.put(MESSAGE, "url 형식에 맞게 입력해주세요.");
				return result;
			}
		}
		
		String email = (String) paramsMap.get("email2");
		String[] emailSpecialchar = {"`","~","!","#","$","%","^","&","*","(",")","=","+","[","{","]","}",
				   				   ";",":","'","\"",",","<",">","/","?","\\","|"};
		for(int i=0; i<emailSpecialchar.length; i++) {
			if(email.indexOf(emailSpecialchar[i])>-1) {
				result.put(SUCCESS, false);
				result.put(MESSAGE, "이메일 형식에 맞게 입력해주세요.");
				return result;
			}
		}
		
		String password = (String) paramsMap.get("password2");
		int pwdSize = password.length();
		String[] pwdSpecialchar = {"`","~","(",")","_","-","=","+","[","{","]","}",
				   				   ";",":","'","\"",",","<",".",">","/","?","\\","|"};
		for(int i=0; i<pwdSpecialchar.length; i++) {
			if(password.indexOf(pwdSpecialchar[i])>-1) {
				result.put(SUCCESS, false);
				result.put(MESSAGE, "비밀번호는 8자리 이상 영문 소문자/숫자/특수문자를 조합해서 입력해주세요.");
				return result;
			}
		}
		if(pwdSize <7) {
			result.put(SUCCESS, false);
			result.put(MESSAGE, "비밀번호는 8자리 이상 영문 소문자/숫자/특수문자를 조합해서 입력해주세요.");
			return result;
		}
		
		String phone = (String) paramsMap.get("phoneNumber2");
		String[] pNumEnglishUpper = {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
		                             "S","T","U","V","W","X","Y","Z"};
		String[] pNumEnglishLower = {"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
		                             "s","t","u","v","w","x","y","z"};
		String[] pNumSpecialchar = {"`","~","!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","{","]","}",
									";",":","'","\"",",","<",".",">","/","?","\\","|"};
		for(int i=0; i<pNumEnglishUpper.length; i++) {
			if(phone.indexOf(pNumEnglishUpper[i])>-1) {
				result.put(SUCCESS, false);
				result.put(MESSAGE, "휴대전화번호은(는) 숫자만 입력해주세요.");
				return result;
			}
		}
		for(int i=0; i<pNumEnglishLower.length; i++) {
			if(phone.indexOf(pNumEnglishLower[i])>-1) {
				result.put(SUCCESS, false);
				result.put(MESSAGE, "휴대전화번호은(는) 숫자만 입력해주세요.");
				return result;
			}
		}
		for(int i=0; i<pNumSpecialchar.length; i++) {
			if(phone.indexOf(pNumSpecialchar[i])>-1) {
				result.put(SUCCESS, false);
				result.put(MESSAGE, "휴대전화번호은(는) 숫자만 입력해주세요.");
				return result;
			}
		}
		if (phone.length() == 10) {
			phone = phone.substring(0, 3) + "-" + phone.substring(3, 7) + "-" + phone.substring(7, 11);
			paramsMap.put("phoneNumber2", phone);
		} else if (phone.length() == 11) {
			phone = phone.substring(0, 3) + "-" + phone.substring(3, 7) + "-" + phone.substring(7, 11);
			paramsMap.put("phoneNumber2", phone);
		}
		
		String number = (String) paramsMap.get("residentNumer2");
		String[] rNumEnglishUpper = {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
		                             "S","T","U","V","W","X","Y","Z"};
		String[] rNumEnglishLower = {"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
		                             "s","t","u","v","w","x","y","z"};
		String[] rNumSpecialchar = {"`","~","!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","{","]","}",
									";",":","'","\"",",","<",".",">","/","?","\\","|"};
		for(int i=0; i<rNumEnglishUpper.length; i++) {
			if(number.indexOf(rNumEnglishUpper[i])>-1) {
				result.put(SUCCESS, false);
				result.put(MESSAGE, "주민등록번호은(는) 숫자만 입력해주세요.");
				return result;
			}
		}
		for(int i=0; i<rNumEnglishLower.length; i++) {
			if(number.indexOf(rNumEnglishLower[i])>-1) {
				result.put(SUCCESS, false);
				result.put(MESSAGE, "주민등록번호은(는) 숫자만 입력해주세요.");
				return result;
			}
		}
		for(int i=0; i<rNumSpecialchar.length; i++) {
			if(number.indexOf(rNumSpecialchar[i])>-1) {
				result.put(SUCCESS, false);
				result.put(MESSAGE, "주민등록번호은(는) 숫자만 입력해주세요.");
				return result;
			}
		}
		if (number.length() == 13) {
			number = number.substring(0, 6) + "-" + number.substring(6, 13);
			paramsMap.put("residentNumer2", number);
		}
		
		String card = (String) paramsMap.get("cardNumber2");
		String[] cNumEnglishUpper = {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
		                             "S","T","U","V","W","X","Y","Z"};
		String[] cNumEnglishLower = {"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
		                             "s","t","u","v","w","x","y","z"};
		String[] cNumSpecialchar = {"`","~","!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","{","]","}",
									";",":","'","\"",",","<",".",">","/","?","\\","|"};
		for(int i=0; i<cNumEnglishUpper.length; i++) {
			if(card.indexOf(cNumEnglishUpper[i])>-1) {
				result.put(SUCCESS, false);
				result.put(MESSAGE, "주민등록번호은(는) 숫자만 입력해주세요.");
				return result;
			}
		}
		for(int i=0; i<cNumEnglishLower.length; i++) {
			if(card.indexOf(cNumEnglishLower[i])>-1) {
				result.put(SUCCESS, false);
				result.put(MESSAGE, "주민등록번호은(는) 숫자만 입력해주세요.");
				return result;
			}
		}
		for(int i=0; i<cNumSpecialchar.length; i++) {
			if(card.indexOf(cNumSpecialchar[i])>-1) {
				result.put(SUCCESS, false);
				result.put(MESSAGE, "주민등록번호은(는) 숫자만 입력해주세요.");
				return result;
			}
		}
		
		System.out.println("IMPL : " + paramsMap);
		if(mapper.ifInsert(paramsMap)>0) {
			result.put(SUCCESS, true);
			result.put(MESSAGE, "정상적으로 등록이 되었습니다.");
		} else {
			result.put(SUCCESS, false);
			result.put(MESSAGE, "등록 오류 입니다.");
		}
		return result;
	}


	

}
