package rest.controller;

import jdk.jfr.ContentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class TestController {
	public String putData="default success";

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
	@PostMapping("/customerDetails/posttest")
	public boolean customerNotExists(@RequestBody String customerNumber){
		if(customerNumber.equals("9830707310")){
			return false;
		}else return true;
	}
	@PostMapping("/customerDetails/otp")
	public boolean otpMatches(@RequestBody String otp){
		if(otp.equals("1039")){
			return true;
		}else return false;
		
	}
}
