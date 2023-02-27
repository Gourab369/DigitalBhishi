package rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rest.entity.SessionLogs;
import rest.repository.SessionLogsRepository;

import java.util.List;
import java.util.Optional;

@Service
public class SessionLogsService {

    @Autowired
    private SessionLogsRepository sessionLogsRepo;

    public List<SessionLogs> getAllSessionLogs(){
        List<SessionLogs> allSessionLogs = sessionLogsRepo.findAll();
        return allSessionLogs;
    }

    public SessionLogs getOneSessionLogs(Integer sessionLogsId) {
        Optional<SessionLogs> sessionLogsOpt = sessionLogsRepo.findById(sessionLogsId);
        SessionLogs foundSessionLogs = sessionLogsOpt.get();
        return foundSessionLogs;
    }

    public SessionLogs createSessionLogs(SessionLogs SessionLogs) {
        SessionLogs createdSessionLogs = sessionLogsRepo.save(SessionLogs);
        return createdSessionLogs;
    }

    public void deleteOneSessionLogs(Integer SessionLogsId) {
        sessionLogsRepo.deleteById(SessionLogsId);
    }




}
