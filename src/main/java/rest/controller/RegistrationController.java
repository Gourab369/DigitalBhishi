package rest.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.*;
import rest.otp.Otp;
import rest.otp.SendOtp;
import rest.otp.SendOtpPost;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RegistrationController {

    @PostMapping("/registration-generateOtp/")
    public void generateOtp(HttpSession session, @RequestBody String mobileNumber) {
        Otp otp = new Otp();
        String otpMessage = otp.generateOtp(4);
        //System.out.println("Generated otp: " + otpMessage);
        String apiKey = "Rr36ehDsQwlLx4G925FvcXnNbmWZSPHa1pfT8OygYEIzVCMU0k98YW1XVdDhUmctBTvspouFOgr6QkCN";
        try {
            SendOtpPost.sendOtp(otpMessage, mobileNumber, apiKey);
        } catch (Exception e) {


        }
        session.setAttribute("otp", otpMessage);
    }


    @PostMapping("/registration-verifyOtp")
    public void verifyOtp(HttpSession session, @RequestBody String otp) {
        String generatedOtp =  (String) session.getAttribute("otp");
        if(otp.equals(generatedOtp)){
            System.out.println("Verified");
        }
        else{
            System.out.println("NOoooooo");
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
