package rest.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	public String putData="default success";
	@CrossOrigin(origins="http://localhost:3000")
	@GetMapping("/gettest")
	public String getTestString() {
		return putData;
	}
	@PostMapping("/posttest")
	public String postTestString(@RequestBody String data) {
		return data;
	}
	@PutMapping("/puttest")
	public void putTestString(@RequestBody String data) {
		putData=data;
	}
	@DeleteMapping("/deletetest")
	public void deleteTestString() {
		putData="";
	}
}
