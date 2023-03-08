package rest.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import rest.entity.LoanDetails;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Repository
public interface LoanDetailsRepository extends JpaRepository<LoanDetails,Integer> {
//    @Transactional //Causes to start the transaction when the execution begins and end when it ends
//    @Modifying //Mandatory in order to support any DML operation
//    @Query("update LoanDetails l set l.startDate = :startDate, l.endDate = :endDate, l.principleAmount = :principleAmount, l.interestPercent = :interestPercent, l.repaidAmount = :repaidAmount, where l.loanId = :loanId")
//    void updateOneAdminDetails(Integer loanId, LocalDateTime startDate, LocalDate endDate, Double principalAmount, Float interestPercent, Double repaidAmount);

}

