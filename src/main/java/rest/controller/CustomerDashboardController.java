package rest.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import rest.entity.Bhishi;
import rest.entity.Customer;
import rest.entity.Loan;
import rest.service.CustomerService;

@RestController
public class CustomerDashboardController {
    @Autowired
    CustomerService customerService;
    @GetMapping("/customerDashboard-getProfile/")
    public Customer getProfile(HttpSession session) {
        boolean customerLogin = (boolean) session.getAttribute("customerLogin");
        if(!customerLogin)
            return null;
        String customerMobileNumber = (String) session.getAttribute("customerMobileNo");
        Customer customer = customerService.getOneCustomer(customerMobileNumber);
        return customer;
    }

    @GetMapping("/customerDashboard-getBhishi")
    public Bhishi getBhishi(HttpSession session) {
        boolean customerLogin = (boolean) session.getAttribute("customerLogin");
        if(!customerLogin)
            return null;
        String customerMobileNumber = (String) session.getAttribute("customerMobileNo");
        Customer customer = customerService.getOneCustomer(customerMobileNumber);
        Bhishi bhishi = customer.getBhishiDetails();
        return bhishi;
    }

    @GetMapping("/customerDashboard-getLoanDetails")
    public Loan getLoanDetails(HttpSession session){
        boolean customerLogin = (boolean) session.getAttribute("customerLogin");
        if(!customerLogin)
            return null;
        String customerMobileNumber = (String) session.getAttribute("customerMobileNo");
        Customer customer = customerService.getOneCustomer(customerMobileNumber);
        Bhishi bhishi = customer.getBhishiDetails();
        Loan loan = bhishi.getLoanDetails();
        return loan;
    }






}