package rest.repository;


import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import rest.entity.Addresses;

@Repository
public interface AddressesRepository extends JpaRepository<Addresses, Integer> {
    @Transactional //Causes to start the transaction when the execution begins and end when it ends
    @Modifying //Mandatory in order to support any DML operation
    @Query("update addresses a set a.street = :street, a.locality = :locality, a.cityOrVillage = :cityOrVillage, a.tahasil = :tahasil, a.district = :district, a.state = :state, a.zipCode = :zipCode, a.panNumber = :panNumber where a.addressId = :addressId")
    void updateOneAdminDetails(Integer addressId, String street, String locality, String cityOrVillage, String tahasil, String district, String state, String zipCode);
}
