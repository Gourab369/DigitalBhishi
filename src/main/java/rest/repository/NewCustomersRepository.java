package rest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rest.entity.NewCustomers;

@Repository
public interface NewCustomersRepository extends JpaRepository<NewCustomers, Integer> {

}
