package rest.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class NewCustomers {
    @Id
    @GeneratedValue
    private Integer customerId;
    private String firstName;
    private String middleName;
    private String lastName;
    private String mobileNumber;
    private String alternateNumber;
    @Column(unique=true)
    private String aadharNumber;
    private String aadharPic;
    private String guarantor1Aadhar;
    private String guarantor2Aadhar;


    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true) // attributes are necessary
    @JoinColumn(name="AddressId")
    private Addresses customerAddress;

    public NewCustomers(String firstName, String middleName, String lastName, String mobileNumber, String alternateNumber, String aadharNumber, String aadharPic, String guarantor1Aadhar, String guarantor2Aadhar, Addresses customerAddress) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.alternateNumber = alternateNumber;
        this.aadharNumber = aadharNumber;
        this.aadharPic = aadharPic;
        this.guarantor1Aadhar = guarantor1Aadhar;
        this.guarantor2Aadhar = guarantor2Aadhar;
        this.customerAddress = customerAddress;
    }

    public NewCustomers() {
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getAlternateNumber() {
        return alternateNumber;
    }

    public void setAlternateNumber(String alternateNumber) {
        this.alternateNumber = alternateNumber;
    }

    public String getAadharNumber() {
        return aadharNumber;
    }

    public void setAadharNumber(String aadharNumber) {
        this.aadharNumber = aadharNumber;
    }

    public String getAadharPic() {
        return aadharPic;
    }

    public void setAadharPic(String aadharPic) {
        this.aadharPic = aadharPic;
    }

    public String getGuarantor1Aadhar() {
        return guarantor1Aadhar;
    }

    public void setGuarantor1Aadhar(String guarantor1Aadhar) {
        this.guarantor1Aadhar = guarantor1Aadhar;
    }

    public String getGuarantor2Aadhar() {
        return guarantor2Aadhar;
    }

    public void setGuarantor2Aadhar(String guarantor2Aadhar) {
        this.guarantor2Aadhar = guarantor2Aadhar;
    }

    public Addresses getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(Addresses customerAddress) {
        this.customerAddress = customerAddress;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        NewCustomers that = (NewCustomers) o;
        return Objects.equals(customerId, that.customerId) && Objects.equals(firstName, that.firstName) && Objects.equals(middleName, that.middleName) && Objects.equals(lastName, that.lastName) && Objects.equals(mobileNumber, that.mobileNumber) && Objects.equals(alternateNumber, that.alternateNumber) && Objects.equals(aadharNumber, that.aadharNumber) && Objects.equals(aadharPic, that.aadharPic) && Objects.equals(guarantor1Aadhar, that.guarantor1Aadhar) && Objects.equals(guarantor2Aadhar, that.guarantor2Aadhar) && Objects.equals(customerAddress, that.customerAddress);
    }

    @Override
    public int hashCode() {
        return Objects.hash(customerId, firstName, middleName, lastName, mobileNumber, alternateNumber, aadharNumber, aadharPic, guarantor1Aadhar, guarantor2Aadhar, customerAddress);
    }
}
