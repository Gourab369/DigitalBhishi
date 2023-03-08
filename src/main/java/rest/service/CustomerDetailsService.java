package rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rest.entity.CustomerDetails;
import rest.repository.CustomerDetailsRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerDetailsService {
    @Autowired
    private CustomerDetailsRepository customerDetailsRepo;

    public List<CustomerDetails> getAllCustomerDetails(){
        List<CustomerDetails> allCustomerDetails = customerDetailsRepo.findAll();
        return allCustomerDetails;
    }

    public CustomerDetails getOneCustomerDetails(Integer customerDetailsId) {
        Optional<CustomerDetails> customerDetailsOpt = customerDetailsRepo.findById(customerDetailsId);
        CustomerDetails foundCustomerDetails = customerDetailsOpt.get();
        return foundCustomerDetails;
    }

    public CustomerDetails createCustomerDetails(CustomerDetails CustomerDetails) {
        CustomerDetails createdCustomerDetails = customerDetailsRepo.save(CustomerDetails);
        return createdCustomerDetails;
    }

    public void deleteOneCustomerDetails(Integer CustomerDetailsId) {
        customerDetailsRepo.deleteById(CustomerDetailsId);
    }

    public void updateOneCustomerDetails(CustomerDetails customerDetails) {
        Integer customerId = customerDetails.getCustomerId();
        String firstName = customerDetails.getFirstName();
        String middleName = customerDetails.getMiddleName();
        String lastName = customerDetails.getLastName();
        String mobileNumber = customerDetails.getMobileNumber();
        String alternateNumber = customerDetails.getAlternateNumber();
        String aadharNumber = customerDetails.getAadharNumber();
        String aadharPic = customerDetails.getAadharPic();
        String guarantor1Aadhar = customerDetails.getGuarantor1Aadhar();
        String guarantor2Aadhar = customerDetails.getGuarantor2Aadhar();
        customerDetailsRepo.updateOneCustomerDetails(customerId, firstName, middleName, lastName, mobileNumber, alternateNumber, aadharNumber, aadharPic, guarantor1Aadhar, guarantor2Aadhar);
    }
}
