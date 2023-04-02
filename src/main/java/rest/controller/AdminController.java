package rest.controller;

import org.springframework.web.bind.annotation.*;
import rest.entity.AdminDetails;
import org.springframework.beans.factory.annotation.Autowired;
import rest.service.AdminDetailsService;

import java.util.List;

@RestController
public class AdminController {
    @Autowired
    private AdminDetailsService adminDetailsService;

    @GetMapping("/adminDetails-api/{adminId}")
    public AdminDetails getOneAdminDetails(@PathVariable("adminId") Integer adminDetailsId) {
        AdminDetails foundAdminDetails = adminDetailsService.getOneAdminDetails(adminDetailsId);
        return foundAdminDetails;

    }

    @GetMapping("/adminDetails-api")
    public List<AdminDetails> getAllRestaurants(){
        List<AdminDetails> allRestaurants = adminDetailsService.getAllAdminDetails();
        return allRestaurants;
    }

    @PostMapping("/adminDetails-api")
    public AdminDetails createNewAdminDetails(@RequestBody AdminDetails adminDetails) {
        System.out.println("AdminDetails getting added is " + adminDetails);
        AdminDetails createdAdminDetails = 	adminDetailsService.createAdminDetails(adminDetails);
        return createdAdminDetails;
    }

    @DeleteMapping("/adminDetails-api/{adminId}")
    public void deleteOneAdminDetails(@PathVariable Integer adminId){
        adminDetailsService.deleteOneAdminDetails(adminId);
    }

      @PutMapping("/adminDetails-api")
      public void updateOneAdminDetails(@RequestBody AdminDetails adminDetails) {
        adminDetailsService.updateOneAdminDetails(adminDetails);
      }
}
