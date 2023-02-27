package rest.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import rest.entity.BhishiDetails;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Repository
public interface BhishiDetailsRepository extends JpaRepository<BhishiDetails, Integer> {
//    @Transactional //Causes to start the transaction when the execution begins and end when it ends
//    @Modifying //Mandatory in order to support any DML operation
//    @Query("update BhishiDetails b set b.startDate = :startDate, b.maturityDate = :maturityDate, b.loanId = :loanId, b.isActive = :isActive, b.loanStatus = :loanStatus, b.inactiveDays = :inactiveDays, b.terminationStatus = :terminationStatus, b.premiumAmount = :premiumAmount where b.bishiId = :bhishiId")
//    void updateOneAdminDetails(Integer bhishiId, LocalDateTime startDate, LocalDate maturityDate, Integer loanId, boolean isActive, boolean loanStatus, int inactiveDays, String terminationStatus, double premiumAmount);
}
