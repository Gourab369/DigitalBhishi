package rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rest.entity.LoanDetails;
import rest.repository.LoanDetailsRepository;

import java.util.List;
import java.util.Optional;

@Service
public class LoanDetailsService {
    @Autowired
    private LoanDetailsRepository loanDetailsRepo;

    public List<LoanDetails> getAllLoanDetails(){
        List<LoanDetails> allLoanDetails = loanDetailsRepo.findAll();
        return allLoanDetails;
    }

    public LoanDetails getOneLoanDetails(Integer LoanDetailsId) {
        Optional<LoanDetails> loanDetailsOpt = loanDetailsRepo.findById(LoanDetailsId);
        LoanDetails foundLoanDetails = loanDetailsOpt.get();
        return foundLoanDetails;
    }

    public LoanDetails createLoanDetails(LoanDetails LoanDetails) {
        LoanDetails createdLoanDetails = loanDetailsRepo.save(LoanDetails);
        return createdLoanDetails;
    }

    public void deleteOneLoanDetails(Integer LoanDetailsId) {
        loanDetailsRepo.deleteById(LoanDetailsId);
    }
}
