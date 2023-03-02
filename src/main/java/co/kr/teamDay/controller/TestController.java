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
	
	//정규식 등록
	@PostMapping("/regexInsert")
	@ResponseBody
	public Object regexInsert(@RequestBody Map<String,Object> paramsMap) {
		return service.regexInsert(paramsMap);
	}
	
	
	

}
