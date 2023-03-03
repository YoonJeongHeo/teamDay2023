package co.kr.teamDay.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import co.kr.teamDay.service.TestService;

@Controller
public class TestController {
	
	@Autowired
	private TestService service;
	
	@GetMapping("/")
	public Object homeTest() {
		return "index";
	}
	
	//정규식 등록 - 스크립트
	@PostMapping("/regexInsert")
	@ResponseBody
	public Object regexInsert(@RequestBody Map<String,Object> paramsMap) {
		return service.regexInsert(paramsMap);
	}
	
	//정규식 등록 - 자바
	@PostMapping("/regexInsertJava")
	@ResponseBody
	public Object regexInsertJava(@RequestBody Map<String,Object> paramsMap) {
		return service.regexInsertJava(paramsMap);
	}
	
	//정규식 등록 - 쿼리
	@PostMapping("/regexInsertQuery")
	@ResponseBody
	public Object regexInsertQuery(@RequestBody Map<String,Object> paramsMap) {
		return service.regexInsertQuery(paramsMap);
	}
	
	//if조건 등록 - 스크립트
	@PostMapping("/ifInsert")
	@ResponseBody
	public Object ifInsert(@RequestBody Map<String,Object> paramsMap) {
		return service.ifInsert(paramsMap);
	}
	
	//if조건 등록 - 자바
	@PostMapping("/ifInsertJava")
	@ResponseBody
	public Object ifInsertJava(@RequestBody Map<String,Object> paramsMap) {
		return service.ifInsertJava(paramsMap);
	}
	
	
	

}
