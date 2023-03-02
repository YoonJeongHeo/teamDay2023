package co.kr.teamDay.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TestMapper {
	
	//정규식 등록
	public int regexInsert(Map<String, Object> paramsMap);

}
