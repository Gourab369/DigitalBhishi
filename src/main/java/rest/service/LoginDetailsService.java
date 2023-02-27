package rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rest.entity.LoginDetails;
import rest.repository.LoginDetailsRepository;

import java.util.List;
import java.util.Optional;

@Service
public class LoginDetailsService {
    @Autowired
    private LoginDetailsRepository loginDetailsRepo;

    public List<LoginDetails> getAllLoginDetails(){
        List<LoginDetails> allLoginDetails = loginDetailsRepo.findAll();
        return allLoginDetails;
    }

    public LoginDetails getOneLoginDetails(Integer loginDetailsId) {
        Optional<LoginDetails> loginDetailsOpt = loginDetailsRepo.findById(loginDetailsId);
        LoginDetails foundLoginDetails = loginDetailsOpt.get();
        return foundLoginDetails;
    }

    public LoginDetails createLoginDetails(LoginDetails LoginDetails) {
        LoginDetails createdLoginDetails = loginDetailsRepo.save(LoginDetails);
        return createdLoginDetails;
    }

    public void deleteOneLoginDetails(Integer LoginDetailsId) {
        loginDetailsRepo.deleteById(LoginDetailsId);
    }

    public void updateOneLoginDetails(LoginDetails loginDetails) {
        int logId = loginDetails.getLoginId();
        String username = loginDetails.getUserName();
        String password = loginDetails.getPassword();
        loginDetailsRepo.updateOneLoginDetails(logId, username, password);
    }
}
