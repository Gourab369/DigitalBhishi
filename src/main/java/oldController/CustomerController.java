package oldController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rest.entity.*;
import rest.entity.Customer;
import rest.service.CustomerService;

import java.util.List;

@RestController
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @GetMapping("/customer-api/{CustomerId}")
    public Customer getOneCustomer(@PathVariable("CustomerId") Integer customerId) {
        Customer foundCustomer = customerService.getOneCustomer(customerId);
        return foundCustomer;

    }

    @GetMapping("/customer-api")
    public List<Customer> getAllCustomer(){
        List<Customer> allCustomer = customerService.getAllCustomer();
        return allCustomer;
    }

    @PostMapping("/customer-api")
    public Customer createNewCustomer(@RequestBody Customer customer) {
        System.out.println("Customer getting added is " + customer);
        customer.setAdminDetails(new Admin());
        Bhishi bhishi = new Bhishi();
        bhishi.setLoanDetails(new Loan());
        customer.setBhishiDetails(bhishi);
        customer.setSecurityDocuments(new SecurityDocuments());
        Customer createdCustomer = 	customerService.createCustomer(customer);

        return createdCustomer;
    }

    @DeleteMapping("/customer-api/{customerId}")
    public void deleteOneCustomer(@PathVariable Integer CustomerId){
        customerService.deleteOneCustomer(CustomerId);
    }

    @PutMapping("/customer-api")
    public void updateOneCustomer(@RequestBody Customer customer) {
        customerService.updateOneCustomer(customer);
    }

}
