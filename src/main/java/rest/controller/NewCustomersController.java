package rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rest.entity.*;
import rest.service.NewCustomersService;

import java.util.List;


@RestController

public class NewCustomersController {
    @Autowired
    private NewCustomersService newCustomersService;

    @GetMapping("/newCustomers-api/{CustomerId}")
    public NewCustomers getOneNewCustomers(@PathVariable("CustomerId") Integer newCustomersId) {
        NewCustomers foundNewCustomers = newCustomersService.getOneNewCustomers(newCustomersId);
        return foundNewCustomers;

    }

    @GetMapping("/newCustomers-api")
    public List<NewCustomers> getAllCustomer(){
        List<NewCustomers> allNewCustomers = newCustomersService.getAllNewCustomers();
        return allNewCustomers;
    }

    @PostMapping("/newCustomers-api")
    public NewCustomers createNewNewCustomers(@RequestBody NewCustomers newCustomers) {
        System.out.println("NewCustomers getting added is " + newCustomers);
        BhishiDetails bhishiDetails = new BhishiDetails();
        bhishiDetails.setLoanDetails(new LoanDetails());
        NewCustomers createdNewCustomers = 	newCustomersService.createNewCustomers(newCustomers);

        return createdNewCustomers;
    }

    @DeleteMapping("/newCustomers-api/{customerId}")
    public void deleteOneNewCustomers(@PathVariable Integer CustomerId){
        newCustomersService.deleteOneNewCustomers(CustomerId);
    }

//    @PutMapping("/newCustomers-api")
//    public void updateOneNewCustomers(@RequestBody NewCustomers newCustomers) {
//        newCustomersService.updateOneNewCustomers(newCustomers);
//    }

}
