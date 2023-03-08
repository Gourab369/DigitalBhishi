package rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rest.entity.BhishiDetails;
import rest.repository.BhishiDetailsRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BhishiDetailsService {
    @Autowired
    private BhishiDetailsRepository bhishiDetailsRepo;

    public List<BhishiDetails> getAllBhishiDetails(){
        List<BhishiDetails> allBhishiDetails = bhishiDetailsRepo.findAll();
        return allBhishiDetails;
    }

    public BhishiDetails getOneBhishiDetails(Integer BhishiDetailsId) {
        Optional<BhishiDetails> bhishiDetailsOpt = bhishiDetailsRepo.findById(BhishiDetailsId);
        BhishiDetails foundBhishiDetails = bhishiDetailsOpt.get();
        return foundBhishiDetails;
    }

    public BhishiDetails createBhishiDetails(BhishiDetails BhishiDetails) {
        BhishiDetails createdBhishiDetails = bhishiDetailsRepo.save(BhishiDetails);
        return createdBhishiDetails;
    }

    public void deleteOneBhishiDetails(Integer BhishiDetailsId) {
        bhishiDetailsRepo.deleteById(BhishiDetailsId);
    }

}
