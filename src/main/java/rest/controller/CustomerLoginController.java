package rest.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import rest.entity.Customer;
import rest.otp.Otp;
import rest.otp.SendOtpPost;
import rest.pojo.Login;
import rest.service.CustomerService;

import java.util.List;



@RestController
public class CustomerLoginController {
    @Autowired
    private CustomerService customerService;



    //0 - MobileNo is not registerd
    //1 - Password is incorrect
    //



    @PostMapping("/customerLogin")
    public int customerLogin(HttpSession session, @RequestBody Login login) {
        String mobileNo = login.getMobileNo();
        String password = login.getPassword();
        List<Customer> customers = customerService.getAllCustomer();
        for(Customer customer: customers) {
            if(mobileNo.equals(customer.getMobileNumber())) {
                if(! password.equals(customer.getPassword()))
                    return 1;
                session.setAttribute("customerLogin", true);
                session.setAttribute("customerMobileNo", mobileNo);
                return 2;
            }
        }
        return 0;
    }

    //0 mobileNo is not registerd;
    //1 otp generated Successfully
    //2 otp generation failed
    @PostMapping("/CustomerLogin-forgetPassword")
    public int forgetPassword(HttpSession session, String mobileNumber){
        Customer customer = customerService.getOneCustomer(mobileNumber);
        if(customer == null)
            return 0;
        session.setAttribute("customerMobileNumber", mobileNumber);
        Otp otp = new Otp();
        String otpMessage = otp.generateOtp(4);
        //System.out.println("Generated otp: " + otpMessage);
        String apiKey = "Rr36ehDsQwlLx4G925FvcXnNbmWZSPHa1pfT8OygYEIzVCMU0k98YW1XVdDhUmctBTvspouFOgr6QkCN";
        try {
            SendOtpPost.sendOtp(otpMessage, mobileNumber, apiKey);
            session.setAttribute("forgetPasswordOtp", otpMessage);
            return 1;
        } catch (Exception e) {
            return 2;
        }
    }

    @PostMapping("/customerLogin-forgetPassword-verifyOtp")
    public boolean verifyOtp(HttpSession session, String Otp) {
        String forgetPasswordOtp =  (String) session.getAttribute("forgetPasswordOtp");
        if(Otp.equals(forgetPasswordOtp)){
            System.out.println("Verified");
            session.setAttribute("forgetPasswordOtpVerified",true);
            return true;
        }
        else{
            System.out.println("Noooooo");
            session.setAttribute("forgetPasswordOtpVerified",false);
            return false;
        }
    }

    @PostMapping("customerLogin-resetPassword")
    public boolean resetPassword(HttpSession session, String password) {
        boolean otpVerified = (boolean) session.getAttribute("forgetPasswordOtpVerified");
        if(!otpVerified)
            return false;
        String mobileNumber = (String) session.getAttribute("customerMobileNumber");
        customerService.updatePassword(mobileNumber, password);
        return true;
    }

}
