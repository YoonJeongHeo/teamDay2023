package co.kr.teamDay.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TestMapper {
	
	//정규식 등록
	public int regexInsert(Map<String, Object> paramsMap);
	
	//쿼리 정규식 등록 (임시테이블)
	public int regexInsertQuery(Map<String, Object> paramsMap);
	
	//쿼리 정규식 일치확인 (임시테이블)
	public int regexSelectQuery(Map<String, Object> paramsMap);
	
	//쿼리 정규식 삭제 (임시테이블)
	public int regexDelectQuery(Map<String, Object> paramsMap);
	
	//if조건 등록
	public int ifInsert(Map<String, Object> paramsMap);

	

}
