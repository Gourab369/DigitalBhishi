package rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rest.entity.CustomerDetails;
import rest.entity.CustomerDetails;
import rest.service.CustomerDetailsService;
import rest.service.CustomerDetailsService;

import java.util.List;

public class CustomerController {
    @Autowired
    private CustomerDetailsService customerDetailsService;

    @GetMapping("/customerDetails-api/{CustomerId}")
    public CustomerDetails getOneCustomerDetails(@PathVariable("CustomerId") Integer customerDetailsId) {
        CustomerDetails foundCustomerDetails = customerDetailsService.getOneCustomerDetails(customerDetailsId);
        return foundCustomerDetails;

    }

    @GetMapping("/customerDetails-api")
    public List<CustomerDetails> getAllCustomer(){
        List<CustomerDetails> allCustomerDetails = customerDetailsService.getAllCustomerDetails();
        return allCustomerDetails;
    }

    @PostMapping("/customerDetails-api")
    public CustomerDetails createNewCustomerDetails(@RequestBody CustomerDetails customerDetails) {
        System.out.println("CustomerDetails getting added is " + customerDetails);
        CustomerDetails createdCustomerDetails = 	customerDetailsService.createCustomerDetails(customerDetails);
        return createdCustomerDetails;
    }

    @DeleteMapping("/customerDetails-api/{customerId}")
    public void deleteOneCustomerDetails(@PathVariable Integer CustomerId){
        customerDetailsService.deleteOneCustomerDetails(CustomerId);
    }

    @PutMapping("/customerDetails-api")
    public void updateOneCustomerDetails(@RequestBody CustomerDetails customerDetails) {
        customerDetailsService.updateOneCustomerDetails(customerDetails);
    }

}
