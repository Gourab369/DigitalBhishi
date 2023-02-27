package rest.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.time.LocalDateTime;

public interface SessionLogsRepository {
//    @Transactional //Causes to start the transaction when the execution begins and end when it ends
//    @Modifying //Mandatory in order to support any DML operation
//    @Query("update SessionLogs s set s.sessionStart = :sessionStart, s.sessionEnd = :sessionEnd, s.loginId = :loginId, s.tokenId = :tokenId where l.logId = :logId")
//    void updateOneAdminDetails(Integer logId, LocalDateTime sessionStart, LocalDateTime sessionEnd, Integer loginId, Integer tokenId);

}
