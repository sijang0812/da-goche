package com.mycompany.dagochebackend;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController
{
	@GetMapping("main")
	public List<String> main()
	{
		return Arrays.asList("메인", "main");
	}
}