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
	public ArrayList<Map<String, Object>> main()
	//public String main(String srcId)
	{
		ArrayList<Map<String, Object>> listReturn = new ArrayList<Map<String, Object>>();
		Map<String, Object> mapParam = new HashMap<String, Object>();
		
		mapParam.put("tlsId", "001");
		mapParam.put("tlsNm", "몽키스패너");
		listReturn.add(mapParam);
		mapParam.put("tlsId", "002");
		mapParam.put("tlsNm", "첼라");
		listReturn.add(mapParam);
		
		System.out.println(listReturn);
		return listReturn;
	}
}