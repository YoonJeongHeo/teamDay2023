package co.kr.teamDay.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.kr.teamDay.mapper.TestMapper;

@Service
public class TestServiceImpl implements TestService{

	@Autowired
	TestMapper mapper;
	
	private static final String SUCCESS = "success";
	private static final String MESSAGE = "message";
	
	@Override
	//정규식 등록
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

}
