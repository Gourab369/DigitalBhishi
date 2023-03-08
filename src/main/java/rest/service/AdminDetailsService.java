package rest.service;

import rest.entity.Addresses;
import rest.entity.AdminDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rest.repository.AdminDetailsRepository;


import java.util.List;
import java.util.Optional;


@Service
public class AdminDetailsService {
    @Autowired
    private AdminDetailsRepository adminDetailsRepo;

    public List<AdminDetails> getAllAdminDetails(){
        List<AdminDetails> allAdminDetails = adminDetailsRepo.findAll();
        return allAdminDetails;
    }

    public AdminDetails getOneAdminDetails(Integer AdminDetailsId) {
        Optional<AdminDetails> adminDetailsOpt = adminDetailsRepo.findById(AdminDetailsId);
        AdminDetails foundAdminDetails = adminDetailsOpt.get();
        return foundAdminDetails;
    }

    public AdminDetails createAdminDetails(AdminDetails AdminDetails) {
        AdminDetails createdAdminDetails = adminDetailsRepo.save(AdminDetails);
        return createdAdminDetails;
    }

    public void deleteOneAdminDetails(Integer AdminDetailsId) {
        adminDetailsRepo.deleteById(AdminDetailsId);
    }

    public void updateOneAdminDetails(AdminDetails adminDetails) {
        Integer adminId = adminDetails.getAdminId();
        String firstName = adminDetails.getFirstName();
        String middleName = adminDetails.getMiddleName();
        String lastName = adminDetails.getLastName();
        String mobileNumber = adminDetails.getMobileNumber();
        String alternateNumber = adminDetails.getAlternateNumber();
        String aadharNumber = adminDetails.getAadharNumber();
        String aadharPic = adminDetails.getAadharPic();
        String panNumber = adminDetails.getPanNumber();
        String panPic = adminDetails.getPanPic();
        adminDetailsRepo.updateOneAdminDetails(adminId, firstName, middleName, lastName, mobileNumber, alternateNumber, aadharNumber, aadharPic, panNumber, panPic);
    }
}
