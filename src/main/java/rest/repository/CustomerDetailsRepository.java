package rest.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import rest.entity.CustomerDetails;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Repository
public interface CustomerDetailsRepository extends JpaRepository<CustomerDetails, Integer> {
    @Transactional //Causes to start the transaction when the execution begins and end when it ends
    @Modifying //Mandatory in order to support any DML operation
    @Query("update CustomerDetails c set c.firstName = :firstName, c.middleName = :middleName, c.lastName = :lastName, c.mobileNumber = :mobileNumber, c.alternateNumber = :alternateNumber, c.aadharNumber = :aadharNumber, c.aadharPic = :aadharPic, c.guarantor1Aadhar = :guarantor1Aadhar, c.guarantor2Aadhar = :guarantor2Aadhar where c.customerId = :customerId")
    void updateOneCustomerDetails(Integer customerId, String firstName, String middleName, String lastName, String mobileNumber, String alternateNumber, String aadharNumber, String aadharPic, String guarantor1Aadhar, String guarantor2Aadhar);
}
