package rest.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import rest.entity.LoginDetails;


@Repository
public interface LoginDetailsRepository extends JpaRepository<LoginDetails, Integer> {
//    @Transactional //Causes to start the transaction when the execution begins and end when it ends
//    @Modifying //Mandatory in order to support any DML operation
//    @Query("update LoanDetails l set l.username =: userName, l.password = :password, where l.loginId = :loginId")
//    void updateOneLoginDetails(Integer loginId, String userName, String password);
}
