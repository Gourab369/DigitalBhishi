package rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rest.entity.SecurityDocuments;
import rest.repository.SecurityDocumentsRepository;

import java.util.List;
import java.util.Optional;

@Service
public class SecurityDetailsService {
    @Autowired
    private SecurityDocumentsRepository securityDocumentsRepo;

    public List<SecurityDocuments> getAllSecurityDocuments(){
        List<SecurityDocuments> allSecurityDocuments = securityDocumentsRepo.findAll();
        return allSecurityDocuments;
    }

    public SecurityDocuments getOneSecurityDocuments(Integer securityDocumentsId) {
        Optional<SecurityDocuments> securityDocumentsOpt = securityDocumentsRepo.findById(securityDocumentsId);
        SecurityDocuments foundSecurityDocuments = securityDocumentsOpt.get();
        return foundSecurityDocuments;
    }

    public SecurityDocuments createSecurityDocuments(SecurityDocuments SecurityDocuments) {
        SecurityDocuments createdSecurityDocuments = securityDocumentsRepo.save(SecurityDocuments);
        return createdSecurityDocuments;
    }

    public void deleteOneSecurityDocuments(Integer SecurityDocumentsId) {
        securityDocumentsRepo.deleteById(SecurityDocumentsId);
    }

}
