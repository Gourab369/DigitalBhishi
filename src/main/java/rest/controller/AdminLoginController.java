package rest.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import rest.entity.Admin;
import rest.otp.Otp;
import rest.otp.SendOtpPost;
import rest.pojo.Login;
import rest.service.AdminService;

import java.util.List;

@RestController
public class AdminLoginController {
    @Autowired
    private AdminService adminService;



    //0 - MobileNo is not registerd
    //1 - Password is incorrect
    //
    @PostMapping("/adminLogin")
    public int adminLogin(HttpSession session, @RequestBody Login login) {
        String mobileNo = login.getMobileNo();
        String password = login.getPassword();
        List<Admin> admins = adminService.getAllAdmin();
        for(Admin admin: admins) {
            if(mobileNo.equals(admin.getMobileNumber())) {
                if(! password.equals(admin.getPassword()))
                    return 1;
                session.setAttribute("adminLogin", true);
                session.setAttribute("adminMobileNo", mobileNo);
                return 2;
            }
        }
        return 0;
    }

    //0 mobileNo is not registerd;
    //1 otp generated Successfully
    //2 otp generation failed
    @PostMapping("/adminLogin-forgetPassword")
    public int forgetPassword(HttpSession session, String mobileNumber){
        Admin admin = adminService.getOneAdmin(mobileNumber);
        if(admin == null)
            return 0;
        session.setAttribute("adminMobileNumber", mobileNumber);
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

    @PostMapping("/adminLogin-forgetPassword-verifyOtp")
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

    @PostMapping("adminLogin-resetPassword")
    public boolean resetPassword(HttpSession session, String password) {
        boolean otpVerified = (boolean) session.getAttribute("forgetPasswordOtpVerified");
        if(!otpVerified)
            return false;
        String mobileNumber = (String) session.getAttribute("adminMobileNumber");
        adminService.updatePassword(mobileNumber, password);
        return true;
    }


}
