package com.mycompany.dagochebackend;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController
{
	@GetMapping("/list")
	//public List<String> main()
	public String main(String srcId)
	{
		//return Arrays.asList("1", "", );
		return "***" + "srcId" + "***";
	}
}