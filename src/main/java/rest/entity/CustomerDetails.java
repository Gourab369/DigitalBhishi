package rest.entity;

import jakarta.persistence.*;

import javax.swing.text.Document;

@Entity
public class CustomerDetails {
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
    private Addresses address;


    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name="CustomerId")
    private AdminDetails adminDetails;


    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name="CustomerId")
    private BhishiDetails bhishiDetails;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private SecurityDocuments securityDocuments;

    public CustomerDetails(String firstName, String middleName, String lastName, String mobileNumber, String alternateNumber, String aadharNumber, String aadharPic, String guarantor1Aadhar, String guarantor2Aadhar, Addresses address, AdminDetails adminDetails, BhishiDetails bhishiDetails, SecurityDocuments securityDocuments) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.alternateNumber = alternateNumber;
        this.aadharNumber = aadharNumber;
        this.aadharPic = aadharPic;
        this.guarantor1Aadhar = guarantor1Aadhar;
        this.guarantor2Aadhar = guarantor2Aadhar;
        this.address = address;
        this.adminDetails = adminDetails;
        this.bhishiDetails = bhishiDetails;
        this.securityDocuments = securityDocuments;
    }

    public CustomerDetails() {
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public void setAlternateNumber(String alternateNumber) {
        this.alternateNumber = alternateNumber;
    }

    public void setAadharNumber(String aadharNumber) {
        this.aadharNumber = aadharNumber;
    }

    public void setAadharPic(String aadharPic) {
        this.aadharPic = aadharPic;
    }

    public void setGuarantor1Aadhar(String guarantor1Aadhar) {
        this.guarantor1Aadhar = guarantor1Aadhar;
    }

    public void setGuarantor2Aadhar(String guarantor2Aadhar) {
        this.guarantor2Aadhar = guarantor2Aadhar;
    }

    public AdminDetails getAdminDetails() {
        return adminDetails;
    }

    public void setAdminDetails(AdminDetails adminDetails) {
        this.adminDetails = adminDetails;
    }

    public BhishiDetails getBhishiDetails() {
        return bhishiDetails;
    }

    public void setBhishiDetails(BhishiDetails bhishiDetails) {
        this.bhishiDetails = bhishiDetails;
    }

    public SecurityDocuments getSecurityDocuments() {
        return securityDocuments;
    }

    public void setSecurityDocuments(SecurityDocuments securityDocuments) {
        this.securityDocuments = securityDocuments;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public String getAlternateNumber() {
        return alternateNumber;
    }

    public String getAadharNumber() {
        return aadharNumber;
    }

    public String getAadharPic() {
        return aadharPic;
    }

    public String getGuarantor1Aadhar() {
        return guarantor1Aadhar;
    }

    public String getGuarantor2Aadhar() {
        return guarantor2Aadhar;
    }

    public void setAddress(Addresses address) {
        this.address = address;
    }

    public Addresses getAddress() {
        return address;
    }


}
