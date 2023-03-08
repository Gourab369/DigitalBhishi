package rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rest.entity.NewCustomers;
import rest.repository.NewCustomersRepository;

import java.util.List;
import java.util.Optional;

@Service
public class NewCustomersService {
    @Autowired
    private NewCustomersRepository newCustomersRepo;

    public List<NewCustomers> getAllNewCustomers(){
        List<NewCustomers> allNewCustomers = newCustomersRepo.findAll();
        return allNewCustomers;
    }

    public NewCustomers getOneNewCustomers(Integer newCustomersId) {
        Optional<NewCustomers> newCustomersOpt = newCustomersRepo.findById(newCustomersId);
        NewCustomers foundNewCustomers = newCustomersOpt.get();
        return foundNewCustomers;
    }

    public NewCustomers createNewCustomers(NewCustomers NewCustomers) {
        NewCustomers createdNewCustomers = newCustomersRepo.save(NewCustomers);
        return createdNewCustomers;
    }

    public void deleteOneNewCustomers(Integer NewCustomersId) {
        newCustomersRepo.deleteById(NewCustomersId);
    }


}
