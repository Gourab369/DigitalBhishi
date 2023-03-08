package oldController;

import org.springframework.web.bind.annotation.*;
import rest.entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import rest.service.AdminService;

import java.util.List;

@RestController
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/admin-api/{adminId}")
    public Admin getOneAdmin(@PathVariable("adminId") Integer adminId) {
        Admin foundAdmin = adminService.getOneAdmin(adminId);
        return foundAdmin;

    }

    @GetMapping("/admin-api")
    public List<Admin> getAllRestaurants(){
        List<Admin> allRestaurants = adminService.getAllAdmin();
        return allRestaurants;
    }

    @PostMapping("/admin-api")
    public Admin createNewAdmin(@RequestBody Admin admin) {
        System.out.println("Admin getting added is " + admin);
        Admin createdAdmin = 	adminService.createAdmin(admin);
        return createdAdmin;
    }

    @DeleteMapping("/admin-api/{adminId}")
    public void deleteOneAdmin(@PathVariable Integer adminId){
        adminService.deleteOneAdmin(adminId);
    }

      @PutMapping("/admin-api")
      public void updateOneAdmin(@RequestBody Admin admin) {
        adminService.updateOneAdmin(admin);
      }
}
