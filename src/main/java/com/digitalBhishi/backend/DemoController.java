package com.digitalBhishi.backend;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {
	@GetMapping("/api/demo")
	public String demo() {
		return "hey!!! "+ new Date() +"\n";
	}
}
