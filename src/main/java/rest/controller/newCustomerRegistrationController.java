package rest.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rest.entity.NewCustomer;
import rest.otp.Otp;
import rest.otp.SendOtpPost;
import rest.service.NewCustomerService;

import java.util.List;

@RestController
public class newCustomerRegistrationController {

    @Autowired
    private NewCustomerService newCustomerService;
    @GetMapping("/newCustomerRegistration-generateOtp/{mobileNumber}")
    public boolean generateOtp(HttpSession session, @PathVariable("mobileNumber") String mobileNumber) {
        List<NewCustomer> newCustomers = newCustomerService.getAllNewCustomer();
        for (NewCustomer iterator: newCustomers) {
            if(iterator.getMobileNumber().equals(mobileNumber)) {
                System.out.println("mobile number is already Present");
                return  false;
            }
        }
        Otp otp = new Otp();
        String otpMessage = otp.generateOtp(4);
        //System.out.println("Generated otp: " + otpMessage);
        String apiKey = "Rr36ehDsQwlLx4G925FvcXnNbmWZSPHa1pfT8OygYEIzVCMU0k98YW1XVdDhUmctBTvspouFOgr6QkCN";
        try {
            SendOtpPost.sendOtp(otpMessage, mobileNumber, apiKey);
            session.setAttribute("customerOtp", otpMessage);
            return true;
        } catch (Exception e) {
            return false;
        }
    }


    @PostMapping("/newCustomerRegistration-verifyOtp")
    public boolean verifyOtp(HttpSession session, @RequestBody String otp) {
        String generatedOtp =  (String) session.getAttribute("customerOtp");
        if(otp.equals(generatedOtp)){
            System.out.println("Verified");
            session.setAttribute("customerOtpVerified",true);
            return true;
        }
        else{
            System.out.println("Noooooo");
            session.setAttribute("customerOtpVerified",false);
            return false;
        }

    }


    @PostMapping("/newCustomerRegistration-register")
    public boolean registerNewCustomer(HttpSession session, @RequestBody NewCustomer newCustomer){
        if(session.getAttribute("customerOtpVerified") == null) {
            System.out.println("Otp is not verified");
            return false;
        }
        boolean verified = (boolean) session.getAttribute("customerOtpVerified");
        if(verified){

            // will do this verification later on
//            List<NewCustomers> newCustomers = newCustomersService.getAllNewCustomers();
//            for (NewCustomers iterator: newCustomers) {
//                if(iterator.getAadharNumber().equals(newCustomer.getAadharNumber()) {
//                    System.out.println("Customer number is already Present");
//                    return;
//                }
//            }
            newCustomerService.createNewCustomer(newCustomer);
            System.out.println("New Customer inserted successfully");
            return true;
        }
        else {
            System.out.println("Otp is not verified");
            return false;
        }
    }
//
//    @RequestMapping(..)
//    public String someControllerMethod(HttpSession session) {
//        session.setAttribute(Constants.CART, new Cart());
//    ...
//        Cart cart = (Cart) session.getAttribute(Constants.CART);
//    }
}
