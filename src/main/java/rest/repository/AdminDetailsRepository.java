package rest.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import rest.entity.Addresses;
import rest.entity.AdminDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminDetailsRepository extends JpaRepository<AdminDetails, Integer> {
    @Transactional //Causes to start the transaction when the execution begins and end when it ends
    @Modifying //Mandatory in order to support any DML operation
    @Query("update AdminDetails a set a.firstName = :firstName, a.middleName = :middleName, a.lastName = :lastName, a.mobileNumber = :mobileNumber, a.alternateNumber = :alternateNumber, a.aadharNumber = :aadharNumber, a.aadharPic = :aadharPic, a.panNumber = :panNumber, a.panPic = :panPic where a.adminId = :adminId")
    void updateOneAdminDetails(Integer adminId, String firstName, String middleName, String lastName, String mobileNumber, String alternateNumber, String aadharNumber, String aadharPic, String panNumber, String panPic);
}


