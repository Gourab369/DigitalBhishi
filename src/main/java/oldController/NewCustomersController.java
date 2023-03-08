package oldController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rest.entity.*;
import rest.service.NewCustomerService;

import java.util.List;


@RestController

public class NewCustomersController {
    @Autowired
    private NewCustomerService newCustomerService;

    @GetMapping("/newCustomers-api/{CustomerId}")
    public NewCustomer getOneNewCustomers(@PathVariable("CustomerId") Integer newCustomersId) {
        NewCustomer foundNewCustomer = newCustomerService.getOneNewCustomer(newCustomersId);
        return foundNewCustomer;

    }

    @GetMapping("/newCustomers-api")
    public List<NewCustomer> getAllCustomer(){
        List<NewCustomer> allNewCustomers = newCustomerService.getAllNewCustomer();
        return allNewCustomers;
    }

    @PostMapping("/newCustomers-api")
    public NewCustomer createNewNewCustomers(@RequestBody NewCustomer newCustomer) {
        System.out.println("NewCustomers getting added is " + newCustomer);
        Bhishi bhishi = new Bhishi();
        bhishi.setLoanDetails(new Loan());
        NewCustomer createdNewCustomer = 	newCustomerService.createNewCustomer(newCustomer);

        return createdNewCustomer;
    }

    @DeleteMapping("/newCustomers-api/{customerId}")
    public void deleteOneNewCustomers(@PathVariable Integer CustomerId){
        newCustomerService.deleteOneNewCustomer(CustomerId);
    }

//    @PutMapping("/newCustomers-api")
//    public void updateOneNewCustomers(@RequestBody NewCustomers newCustomers) {
//        newCustomersService.updateOneNewCustomers(newCustomers);
//    }

}
