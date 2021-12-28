package com.mycompany.dagochebackend;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController
{
	@GetMapping("/list")
	public List<Map<String, Object>> main()
	//public Map<String, Object> main()
	//public String main(String srcId)
	{
		String jsonReturn = "java";
		List<Map<String, Object>> listReturn = new ArrayList<Map<String, Object>>();
		Map<String, Object> mapParam1 = new HashMap<String, Object>();
		Map<String, Object> mapParam2 = new HashMap<String, Object>();
		
		mapParam1.put("tlsId", "001");
		mapParam1.put("tlsNm", "몽키스패너");
		System.out.println("mapParam:" + mapParam1);
		listReturn.add(mapParam1);
		System.out.println("listReturn:" + listReturn);
		
		mapParam2.put("tlsId", "002");
		mapParam2.put("tlsNm", "첼라");
		System.out.println("mapParam:" + mapParam2);
		listReturn.add(mapParam2);
		System.out.println("listReturn:" + listReturn);
		
		//return "aaaaa";
		return listReturn;
	}
}