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
import rest.entity.NewCustomers;
import rest.otp.Otp;
import rest.requiredDataFetchClasses.UserNumber;
import rest.service.NewCustomersService;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class TestController {
	public String putData="default success";
	@Autowired
	private NewCustomersService newCustomersService;
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
	public boolean customerNotExists(@RequestBody CustomerVerify customerNumber){
		if(customerNumber.equals(new CustomerVerify())){
			System.out.println(customerNumber);
			return false;
		}else
		{System.out.println(customerNumber);
			return true;}
	}
	@PostMapping("/customerDetails/otp")
	public boolean otpMatches(@RequestBody Otpclass otp){
		String s = otp.getOtp();
		if(s.equals((new Otpclass("1037")).getOtp())){
			System.out.println(s+"  "+new Otpclass("1037"));
			return true;
		}else{ System.out.println(s+"  "+new Otpclass("1037"));
			return false;}

	}
	@PostMapping("/customerDetails/checkNumber")
	public boolean customerNumberExists(@RequestBody UserNumber user){
		List<NewCustomers> existingCustomersList = newCustomersService.getAllNewCustomers();
		for(NewCustomers customers : existingCustomersList){
			if(customers.getMobileNumber().equals(user.getNumber())) return true;
		}
		return false;
		//return existingCustomersList.contains((new NewCustomers()).setMobileNumber(user.getNumber()));
	}
}
