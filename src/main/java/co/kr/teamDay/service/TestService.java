package co.kr.teamDay.service;

import java.util.Map;

public interface TestService {

	//정규식 등록 - 스크립트
	public Map<String, Object> regexInsert(Map<String, Object> paramsMap);
	
	//정규식 등록 - 자바
	public Map<String, Object> regexInsertJava(Map<String, Object> paramsMap);
	
	//if조건 등록 - 스크립트
	public Map<String, Object> ifInsert(Map<String, Object> paramsMap);
	
	//if조건 등록 - 자바
	public Map<String, Object> ifInsertJava(Map<String, Object> paramsMap);

}
